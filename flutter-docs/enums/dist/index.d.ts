export type { FlutterEnumType } from "./flutter-enums";

export interface FlutterDocEnumDefinition {
  name: string;
  url: string;
  id: string;
  values?: Array<string>;
}

// module.exports = { all : Array<FlutterDocEnumDefinition> }
export const all: Array<FlutterDocEnumDefinition>;
