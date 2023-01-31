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
}: {
  onToggleReload?: () => void;
  onToggleFullsize?: () => void;
}) {
  return (
    <AppbarLayout>
      <div className="leading">
        <IconButton onClick={onToggleReload}>
          <ReloadIcon />
        </IconButton>
        <IconButton>
          <Component1Icon />
        </IconButton>
        <IconButton>
          <OpenInNewWindowIcon />
        </IconButton>
        <SizeInfo />
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

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

function SizeInfo() {
  const sizeinfo = {
    width: 0,
    height: 0,
  };

  return (
    <SizeInfoContainer>
      <span>{sizeinfo.width}</span>
      <Cross2Icon />
      <span>{sizeinfo.height}</span>
    </SizeInfoContainer>
  );
}

const SizeInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
