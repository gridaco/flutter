import React, { useEffect } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import type { Action, DaemonStartupLog } from "@flutter-preview/webview";

export function LoadingView({
  messages: initialMessage = ["Initial bootup takes about 5 to 30 seconds..."],
}: {
  messages?: string[];
}) {
  const [messages, setMessages] = React.useState<string[]>(initialMessage);

  useEffect(() => {
    const handler = (e: MessageEvent<Action>) => {
      console.log("message event from vscode: ", e.data ?? e);
      const message = e.data;
      if (message.type === "daemon-startup-log") {
        const { message: logMessage } = message as DaemonStartupLog;
        setMessages((prev) => [...prev, logMessage]);
      }
    };

    window.addEventListener("message", handler);
    return () => {
      window.removeEventListener("message", handler);
    };
  }, []);

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
            {/* show last 2 logs */}
            {messages.slice(-2).join("\n")}
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
