import React, { useEffect } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import type { Action, DaemonStartupLog } from "@flutter-preview/webview";
import { ContentLayout } from "./state-content-layout";

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
      <ContentLayout>
        <Image
          src={"/flutter-logo/flutter-logo-shape-only-black.svg"}
          alt="Flutter Black Logo (svg)"
          height={36}
          width={36}
        />
        <div className="text-layout">
          <span className="title">Booting Flutter Daemon</span>
          <p className="description">
            {/* show last 2 logs */}
            {messages.slice(-2).map((message, index) => (
              <span key={index}>
                {message}
                <br />
              </span>
            ))}
          </p>
        </div>
      </ContentLayout>
    </SplashViewLayout>
  );
}

const SplashViewLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
  height: 100%;
  padding: 40px;
`;
