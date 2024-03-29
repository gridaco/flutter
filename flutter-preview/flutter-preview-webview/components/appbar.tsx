import React from "react";
import styled from "@emotion/styled";
import {
  ReloadIcon,
  Component1Icon,
  OpenInNewWindowIcon,
  SizeIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";

export function Appbar({
  onToggleReload,
  onToggleFullsize,
  onToggleOpenInNewWindow,
  frameSize,
}: {
  onToggleReload?: () => void;
  onToggleOpenInNewWindow?: () => void;
  onToggleFullsize?: () => void;
  frameSize: { width: number; height: number };
}) {
  return (
    <AppbarLayout>
      <div className="leading">
        <IconButton onClick={onToggleReload}>
          <ReloadIcon />
        </IconButton>
        {/* Not ready */}
        {/* <IconButton>
          <Component1Icon />
        </IconButton> */}
        <IconButton>
          <OpenInNewWindowIcon onClick={onToggleOpenInNewWindow} />
        </IconButton>
        <SizeInfo size={frameSize} />
      </div>
      <div className="trailling">
        <IconButton onClick={onToggleFullsize}>
          <SizeIcon />
        </IconButton>
      </div>
    </AppbarLayout>
  );
}

const AppbarLayout = styled.div`
  z-index: 9;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  padding: 16px 24px;

  background: white;
  color: rgba(0, 0, 0, 0.6);

  .leading {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    gap: 32px;
  }

  .trailling {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    gap: 32px;
  }
`;

const IconButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  border: none;
  background: none;
  color: rgba(0, 0, 0, 0.6) !important;
  cursor: pointer;

  &:hover {
    color: rgba(0, 0, 0, 0.8) !important;
    background: rgba(0, 0, 0, 0.1);
  }

  &:active {
    color: rgba(0, 0, 0, 1) !important;
    background: rgba(0, 0, 0, 0.12);
  }
`;

function SizeInfo({ size }: { size: { width: number; height: number } }) {
  return (
    <SizeInfoContainer>
      <span>{size.width}</span>
      <Cross2Icon className="x" />
      <span>{size.height}</span>
    </SizeInfoContainer>
  );
}

const SizeInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .x {
    width: 12px;
    opacity: 0.8;
    user-select: none;
    pointer-events: none;
  }

  font-family: "Courier New", Courier, monospace;
  font-size: 14px;
`;
