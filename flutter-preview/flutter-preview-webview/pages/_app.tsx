import "../styles/globals.css";
import type { AppProps } from "next/app";
import { EditorPropertyThemeProvider } from "@editor-ui/property";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EditorPropertyThemeProvider
      theme={{
        input: {
          bg: "white",
          prefix: "rgba(0, 0, 0, 0.54)",
          suffix: "rgba(0, 0, 0, 0.54)",
          value: "rgba(0, 0, 0, 0.87)",
          value_disabled: "rgba(0, 0, 0, 0.2)",
          border: {
            focus: "rgba(0, 0, 0, 0.54)",
          },
        },
        foreground: "black",
      }}
    >
      <Component {...pageProps} />
    </EditorPropertyThemeProvider>
  );
}
