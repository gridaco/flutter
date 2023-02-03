import React, { useEffect, useState } from "react";
import Head from "next/head";
import { NextPageContext } from "next";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import {
  Action,
  WebLaunchUrlAction,
  AppStopAction,
} from "@flutter-preview/webview";
import { Appbar } from "components/appbar";
import { Stage } from "components/stage";
import { LoadingView } from "components/loading";
import { ErrorView } from "components/error";

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

  useEffect(() => {
    // send message to vscode to notify that the webview is ready
    // initially, once.

    window.parent.postMessage(
      {
        type: "webview-ready",
      },
      "*"
    );
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

  return (
    <>
      <Head>
        <title>Flutter Widget Preview for VSCode</title>
      </Head>
      <Body>
        <Appbar
          frameSize={size}
          onToggleReload={onToggleReload}
          onToggleFullsize={() => setFullsize((prev) => !prev)}
        />
        <Stage onResize={(size) => setSize(size)} fullsize={fullsize}>
          {webLaunchUrl ? (
            <WebLaunchPreview src={webLaunchUrl} refreshKey={refresh} />
          ) : error ? (
            <ErrorView messages={[error.message]} />
          ) : (
            <LoadingView />
          )}
        </Stage>
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
function WebLaunchPreview({
  src,
  refreshKey,
}: {
  src: string;
  refreshKey: number;
}) {
  return (
    <FramesContainer>
      <ContentFrame refreshKey={refreshKey} src={src} />
    </FramesContainer>
  );
}

function ContentFrame({
  refreshKey,
  src,
}: {
  refreshKey: number;
  src: string;
}) {
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
}

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
