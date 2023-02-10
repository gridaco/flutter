import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  splitting: false,
  sourcemap: false,
  external: ["vscode", "path", "fs", "child_process", "os"],
  minify: true,
  clean: true,
  dts: true,
});
