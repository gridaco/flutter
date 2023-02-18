import React, { useEffect, useState } from "react";
import Head from "next/head";
import { NextPageContext } from "next";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import {
  Action,
  WebLaunchUrlAction,
  AppStopAction,
  VSCodeOpenExternalCommand,
  NotifyVSCodeThatAppIsReady,
  NotifyPropertyChange,
} from "@flutter-preview/webview";
import { Appbar } from "components/appbar";
import { Stage } from "components/stage";
import { LoadingView } from "components/loading";
import { ErrorView } from "components/error";
import { Dock, Property } from "components/dock";
import { mapTypes } from "core/type-mapper";

export default function FlutterWidgetPreview({
  initial,
}: {
  initial: {
    webLaunchUrl?: string;
  };
}) {
  const [fullsize, setFullsize] = useState(false);
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 400,
    height: 400,
  });

  const [webLaunchUrl, setWebLaunchUrl] = useState(
    initial?.webLaunchUrl ?? null
  );
  const [refresh, setRefresh] = useState(0);
  const [error, setError] = useState<Error | null>(null);

  const onToggleReload = React.useCallback(() => {
    setRefresh((prev) => prev + 1);
  }, [setRefresh]);

  const appWindowRef = React.useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // send message to vscode to notify that the webview is ready
    // initially, once.
    const msg: NotifyVSCodeThatAppIsReady = {
      event: "webview-ready",
    };
    window.parent.postMessage(msg, "*");
  }, []);

  useEffect(() => {
    const handler = (e: MessageEvent<Action>) => {
      console.log("message event from vscode: ", e.data ?? e);
      const message = e.data;
      switch (message.type) {
        case "hot-restart": {
          onToggleReload();
          break;
        }
        case "web-launch-url": {
          const { url } = message as WebLaunchUrlAction;
          setWebLaunchUrl(url);
          break;
        }
        case "app.stop": {
          const { error } = message as AppStopAction;
          if (error) {
            setError(new Error(error));
          }
        }
        default: {
          console.log("unhandled message type: ", message["type"]);
          break;
        }
      }
    };
    window.addEventListener("message", handler);
    return () => {
      window.removeEventListener("message", handler);
    };
  }, [onToggleReload]);

  const openInNewWindow = () => {
    if (!webLaunchUrl) return;
    if (inIframe()) {
      const cmd: VSCodeOpenExternalCommand = {
        command: "vscode.env.openExternal",
        target: webLaunchUrl,
      };
      window.parent.postMessage(cmd, "*");
    } else {
      window.open(webLaunchUrl, "_blank");
    }
  };

  const properties_meta = [
    {
      key: "name",
      default: "Flutter Preview",
      type: "String",
    },
    {
      key: "radius",
      default: 12,
      type: "int",
    },
    {
      key: "description",
      default:
        "Flutter Preview is a tool that allows you to preview your Flutter app in the browser",
      type: "String",
    },
    {
      key: "color",
      default: "#000000",
      type: "Color",
    },
    {
      key: "enabled",
      default: true,
      type: "bool",
    },
    {
      key: "alignment",
      default: "start",
      type: "rendering/CrossAxisAlignment",
    },
  ] as const;

  const properties = properties_meta.map((p) => ({
    key: p.key,
    value: p.default,
    ...mapTypes(p.type),
  })) as Array<Property>;

  return (
    <>
      <Head>
        <title>Flutter Widget Preview for VSCode</title>
      </Head>
      <Body>
        <Appbar
          frameSize={size}
          onToggleReload={onToggleReload}
          onToggleOpenInNewWindow={openInNewWindow}
          onToggleFullsize={() => setFullsize((prev) => !prev)}
        />
        <Stage onResize={(size) => setSize(size)} fullsize={fullsize}>
          {webLaunchUrl ? (
            <WebLaunchPreview
              ref={appWindowRef}
              src={webLaunchUrl}
              refreshKey={refresh}
            />
          ) : error ? (
            <ErrorView messages={[error.message]} />
          ) : (
            <LoadingView />
          )}
        </Stage>
        <Dock
          properties={properties}
          onPropertyChange={(key, value) => {
            const msg: NotifyPropertyChange = {
              event: "@inapp/property-change",
              key,
              value,
            };
            appWindowRef?.current?.contentWindow?.postMessage(msg, "*");
          }}
        />
      </Body>
    </>
  );
}

/**
 * Since flutter daemon for web does not support hot-reload, but only hot-restart,
 * we need to use two iframes for smooth transition.
 *
 * the refreshKey will tell if to trigger a hot-restart
 *
 * @returns
 */
const WebLaunchPreview = React.forwardRef(function WebLaunchPreview(
  {
    src,
    refreshKey,
  }: {
    src: string;
    refreshKey: number;
  },
  ref?: React.Ref<HTMLIFrameElement>
) {
  return (
    <FramesContainer>
      <ContentFrame ref={ref} refreshKey={refreshKey} src={src} />
    </FramesContainer>
  );
});

const ContentFrame = React.forwardRef(function ContentFrame(
  {
    refreshKey,
    src,
  }: {
    refreshKey: number;
    src: string;
  },
  ref?: React.Ref<HTMLIFrameElement>
) {
  return (
    <ContentFrameWrapper
      transition={{
        delay: 0.5,
        duration: 0.5,
      }}
      initial={{
        opacity: 0,
        userSelect: "none",
        pointerEvents: "none",
      }}
      animate={{
        opacity: 1,
        userSelect: "auto",
        pointerEvents: "auto",
      }}
    >
      <iframe
        ref={ref}
        key={refreshKey}
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        src={src}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </ContentFrameWrapper>
  );
});

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const FramesContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ContentFrameWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

function inIframe() {
  // ssr
  if (typeof window === "undefined") return false;
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

export async function getServerSideProps(context: NextPageContext) {
  const { webLaunchUrl } = context.query;
  return {
    props: {
      initial: {
        webLaunchUrl: webLaunchUrl ?? null,
      },
    },
  };
}
