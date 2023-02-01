import React, { useEffect } from "react";
import styled from "@emotion/styled";

export const ContentLayout = styled.div`
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
    max-width: 180px;

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
