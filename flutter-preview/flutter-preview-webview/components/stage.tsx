import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { Resizable, ResizeDirection } from "re-resizable";
import useMeasure from "react-use-measure";

const initial_minmax = 400;

/**
 * Resizable stage for widget preview - children will be iframe
 */
export function Stage({
  fullsize = false,
  handleMargin = 16,
  minSize = { width: 200, height: 200 },
  paddingTop = 32,
  children,
}: React.PropsWithChildren<{
  fullsize?: boolean;
  handleMargin?: number;
  minSize?: { width: number; height: number };
  paddingTop?: React.CSSProperties["paddingTop"];
}>) {
  const [ref, bounds] = useMeasure();

  const [maxSize, setMaxSize] = React.useState<{
    width: number;
    height: number;
  }>({
    width: initial_minmax,
    height: initial_minmax,
  });

  useEffect(() => {
    setMaxSize({
      width: bounds.width - (handleMargin + 24),
      height: bounds.height - (handleMargin + 24),
    });
  }, [bounds.width, bounds.height, handleMargin]);

  const handle_shared_style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <StageContainer
      ref={ref}
      style={{
        paddingTop: fullsize ? 0 : paddingTop,
      }}
    >
      <ResizableCanvas
        // allow only left, right, bottom
        enable={
          fullsize
            ? {
                // X
                top: false,
                right: false,
                bottom: false,
                left: false,
                topRight: false,
                bottomRight: false,
                bottomLeft: false,
                topLeft: false,
              }
            : {
                top: false, // X
                right: true, // O
                bottom: true, // O
                left: true, // O
                topRight: false, // X
                bottomRight: false, // X
                bottomLeft: false, // X
                topLeft: false, // X
              }
        }
        minHeight={fullsize ? undefined : minSize.height}
        minWidth={fullsize ? undefined : minSize.width}
        maxHeight={fullsize ? undefined : maxSize.height}
        maxWidth={fullsize ? undefined : maxSize.width}
        defaultSize={
          fullsize
            ? { width: "100%", height: "100%" }
            : {
                width: initial_minmax,
                height: initial_minmax,
              }
        }
        size={fullsize ? { width: "100%", height: "100%" } : undefined}
        handleStyles={
          fullsize
            ? {}
            : {
                left: {
                  left: -handleMargin,
                  ...handle_shared_style,
                },
                right: {
                  right: -handleMargin,
                  ...handle_shared_style,
                },
                bottom: {
                  bottom: -handleMargin,
                  ...handle_shared_style,
                },
              }
        }
        handleComponent={{
          left: <Handle data-position="left" />,
          right: <Handle data-position="right" />,
          bottom: <Handle data-position="bottom" />,
        }}
      >
        <Frame data-state={fullsize ? "fullsize" : "staged"}>
          {/* A wrapper for overflow: hidden */}
          {children}
        </Frame>
      </ResizableCanvas>
    </StageContainer>
  );
}

const Frame = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  overflow: hidden;

  &[data-state="staged"] {
    border-radius: 4px;
    border: solid 1px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.04);
  }

  transition: box-shadow 0.1s ease-in-out, border 0.1s ease-in-out,
    border-radius 0.1s ease-in-out;

  will-change: box-shadow, border, border-radius;
`;

// @ts-ignore
const ResizableCanvas = styled(Resizable)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background-color: white;
  user-select: none;
`;

const Handle = styled.div`
  user-select: none;
  z-index: 2;

  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 40px;

  &[data-position="left"] {
    width: 4px;
    height: 80px;

    /* center in parent */
    margin: 0 auto;
  }

  &[data-position="right"] {
    width: 4px;
    height: 80px;
  }

  &[data-position="bottom"] {
    width: 80px;
    height: 4px;
  }

  /* other directions not supported */
`;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
