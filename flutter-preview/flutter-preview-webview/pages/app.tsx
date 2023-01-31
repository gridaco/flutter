import React, { useEffect, useState } from "react";
import Head from "next/head";
import { NextPageContext } from "next";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Action, WebLaunchUrlAction } from "@flutter-preview/webview";
import Image from "next/image";
import { Appbar } from "components/appbar";
import { Stage } from "components/stage";

export default function FlutterWidgetPreview({
  initial,
}: {
  initial: {
    webLaunchUrl?: string;
  };
}) {
  const [fullsize, setFullsize] = useState(false);
  const [webLaunchUrl, setWebLaunchUrl] = useState(
    initial?.webLaunchUrl ?? null
  );
  const [refresh, setRefresh] = useState(0);

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
          onToggleReload={onToggleReload}
          onToggleFullsize={() => setFullsize((prev) => !prev)}
        />
        <Stage fullsize={fullsize}>
          {webLaunchUrl ? (
            <WebLaunchPreview src={webLaunchUrl} refreshKey={refresh} />
          ) : (
            <LoadingView />
          )}
        </Stage>
      </Body>
    </>
  );
}

function LoadingView() {
  return (
    <SplashViewLayout>
      <LoadingContent>
        <Image
          src={"/flutter-logo/flutter-logo-shape-only-black.svg"}
          alt="Flutter Black Logo (svg)"
          height={36}
          width={36}
        />
        <div className="text-layout">
          <span className="title">Loading...</span>
          <span className="description">
            Initial bootup takes about 5 to 30 seconds...
          </span>
        </div>
      </LoadingContent>
    </SplashViewLayout>
  );
}

const LoadingContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  flex: none;
  gap: 20px;
  box-sizing: border-box;

  .text-layout {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    box-sizing: border-box;
    flex-shrink: 0;
    max-width: 160px;

    .title {
      color: black;
      text-overflow: ellipsis;
      font-size: 14px;
      font-family: Inter, sans-serif;
      font-weight: 500;
      text-align: center;
      align-self: stretch;
      flex-shrink: 0;
    }

    .description {
      color: rgba(0, 0, 0, 0.5);
      text-overflow: ellipsis;
      font-size: 10px;
      font-family: "Source Code Pro", monospace;
      font-weight: 400;
      text-align: center;
      align-self: stretch;
      flex-shrink: 0;
    }
  }
`;

const SplashViewLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
  height: 100%;
  padding: 40px;

  .message {
    opacity: 0.5;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;

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
