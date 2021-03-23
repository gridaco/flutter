import { BuildableTree } from "../builder";
import { TextStyle } from "../painting/text-style";

/**
 * https://api.flutter.dev/flutter/material/TextTheme-class.html
 */
export class TextTheme extends BuildableTree {
  headline1?: TextStyle;
  headline2?: TextStyle;
  headline3?: TextStyle;
  headline4?: TextStyle;
  headline5?: TextStyle;
  headline6?: TextStyle;
  subtitle1?: TextStyle;
  subtitle2?: TextStyle;
  bodyText1?: TextStyle;
  bodyText2?: TextStyle;
  button?: TextStyle;
  caption?: TextStyle;
  overline?: TextStyle;

  constructor(args: {
    headline1?: TextStyle;
    headline2?: TextStyle;
    headline3?: TextStyle;
    headline4?: TextStyle;
    headline5?: TextStyle;
    headline6?: TextStyle;
    subtitle1?: TextStyle;
    subtitle2?: TextStyle;
    bodyText1?: TextStyle;
    bodyText2?: TextStyle;
    button?: TextStyle;
    caption?: TextStyle;
    overline?: TextStyle;
  }) {
    super();
    this.headline1 = args.headline1;
    this.headline2 = args.headline2;
    this.headline3 = args.headline3;
    this.headline4 = args.headline4;
    this.headline5 = args.headline5;
    this.headline6 = args.headline6;
    this.subtitle1 = args.subtitle1;
    this.subtitle2 = args.subtitle2;
    this.bodyText1 = args.bodyText1;
    this.bodyText2 = args.bodyText2;
    this.button = args.button;
    this.caption = args.caption;
    this.overline = args.overline;
  }
}

/**
 * returns prebuilt code snippet for text-themes. i.e TextThemeDefaults.headline1 will give you "Theme.of(context).textTheme.headline1"
 *
 */
export class TextThemeDefaults {
  constructor() {}

  public static get headline1(): TextStyle {
    return new TextStyle().overrideSnippet(
      "Theme.of(context).textTheme.headline1"
    );
  }
  public static get headline2(): TextStyle {
    return new TextStyle().overrideSnippet(
      "Theme.of(context).textTheme.headline2"
    );
  }
  public static get headline3(): TextStyle {
    return new TextStyle().overrideSnippet(
      "Theme.of(context).textTheme.headline3"
    );
  }
  public static get headline4(): TextStyle {
    return new TextStyle().overrideSnippet(
      "Theme.of(context).textTheme.headline4"
    );
  }
  public static get headline5(): TextStyle {
    return new TextStyle().overrideSnippet(
      "Theme.of(context).textTheme.headline5"
    );
  }
  public static get headline6(): TextStyle {
    return new TextStyle().overrideSnippet(
      "Theme.of(context).textTheme.headline6"
    );
  }
  public static get subtitle1(): TextStyle {
    return new TextStyle().overrideSnippet(
      "Theme.of(context).textTheme.subtitle1"
    );
  }
  public static get subtitle2(): TextStyle {
    return new TextStyle().overrideSnippet(
      "Theme.of(context).textTheme.subtitle2"
    );
  }
  public static get bodyText1(): TextStyle {
    return new TextStyle().overrideSnippet(
      "Theme.of(context).textTheme.bodyText1"
    );
  }
  public static get bodyText2(): TextStyle {
    return new TextStyle().overrideSnippet(
      "Theme.of(context).textTheme.bodyText2"
    );
  }
  public static get button(): TextStyle {
    return new TextStyle().overrideSnippet(
      "Theme.of(context).textTheme.button"
    );
  }
  public static get caption(): TextStyle {
    return new TextStyle().overrideSnippet(
      "Theme.of(context).textTheme.caption"
    );
  }
  public static get overline(): TextStyle {
    return new TextStyle().overrideSnippet(
      "Theme.of(context).textTheme.overline"
    );
  }
}
