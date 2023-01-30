import type { TextTheme } from "./text-theme";
import { BuildableTree } from "../builder";
import { identifier } from "../decorations";

/**
 * https://api.flutter.dev/flutter/material/ThemeData-class.html
 */
@identifier("ThemeData")
export class ThemeData extends BuildableTree {
  textTheme: TextTheme;

  constructor(args: { textTheme?: TextTheme }) {
    super();
    this.textTheme = args.textTheme;
  }
}
