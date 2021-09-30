import type { TextTheme } from "./text-theme";
import { BuildableTree } from "../builder";

/**
 * https://api.flutter.dev/flutter/material/ThemeData-class.html
 */
export class ThemeData extends BuildableTree {
  textTheme: TextTheme;

  constructor(args: { textTheme?: TextTheme }) {
    super();
    this.textTheme = args.textTheme;
  }
}
