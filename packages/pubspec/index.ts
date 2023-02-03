export { parse, stringfy } from "./pubspec";
export { locatePubspec } from "./locate";
import type { Pubspec } from "./pubspec";

export function analyzeFramework(pubspec: Pubspec): {
  framework: "flutter";
} | null {
  const isflutter = "flutter" in pubspec || pubspec.dependencies?.flutter;
  if (isflutter) {
    return { framework: "flutter" };
  }

  return null;
}

export type { Pubspec };
