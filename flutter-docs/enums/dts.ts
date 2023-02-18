import type { FlutterDocEnumDefinition } from "./index";

export function dts(defs: Array<FlutterDocEnumDefinition>) {
  return `
export type FlutterEnumType = 
${defs.map((def) => `  | "${def.id}"`).join("\n")}
;
  `;
}
