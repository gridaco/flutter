import React from "react";
import styled from "@emotion/styled";
import { ContentLayout } from "./state-content-layout";
import { CrossCircledIcon } from "@radix-ui/react-icons";

export function ErrorView({
  messages = ["Running Flutter App failed with compile errors."],
}: {
  messages?: string[];
}) {
  return (
    <ViewLayout>
      <ContentLayout>
        <CrossCircledIcon width={24} height={24} color="red" />
        <div className="text-layout">
          <span className="title">Compile Failed</span>
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
    </ViewLayout>
  );
}

const ViewLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
  height: 100%;
  padding: 40px;
`;
