import { type as typeanalyze } from "@flutter-preview/analyzer";

type MappedControlMeta =
  | {
      type: "number" | "boolean" | "text" | "color";
    }
  | {
      type: "enum";
      options?: Array<{ label: string; value: string }> | Array<string>;
    };

export function mapTypes(type: typeanalyze.DartType): MappedControlMeta {
  switch (type) {
    case "int":
      return { type: "number" };
    case "double":
      return { type: "number" };
    case "num":
      return { type: "number" };
    case "bool":
      return { type: "boolean" };
    case "String":
      return { type: "text" };
    case "dynamic":
      return { type: "text" };
  }

  switch (type) {
    case "Color":
      return { type: "color" };
  }

  // enums
  const maybeEnum = typeanalyze.isTypeFlutterEnum(type);
  if (maybeEnum) {
    return {
      type: "enum",
      options: maybeEnum.values?.map((v) => ({
        label: maybeEnum.name + "." + v,
        value: v,
      })),
    };
  }

  // else
  return { type: "text" };
}
