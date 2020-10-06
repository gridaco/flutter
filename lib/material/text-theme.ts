import { Snippet } from "../builder/buildable-tree"
import { TextStyle } from "../painting/text-style"

/**
 * https://api.flutter.dev/flutter/material/TextTheme-class.html
 */
export class TextTheme {
    headline1: TextStyle
    headline2: TextStyle
    headline3: TextStyle
    headline4: TextStyle
    headline5: TextStyle
    headline6: TextStyle
    subtitle1: TextStyle
    subtitle2: TextStyle
    body1: TextStyle
    body2: TextStyle
    button: TextStyle
    caption: TextStyle
    overline: TextStyle
}


/**
 * returns prebuilt code snippet for text-themes. i.e TextThemeDefaults.headline1 will give you "Theme.of(context).textTheme.headline1"
 * 
 */
export class TextThemeDefaults {
    constructor() { }
    public static readonly headline1: Snippet = Snippet.fromStatic("Theme.of(context).textTheme.headline1")
    public static readonly headline2: Snippet = Snippet.fromStatic("Theme.of(context).textTheme.headline2")
    public static readonly headline3: Snippet = Snippet.fromStatic("Theme.of(context).textTheme.headline3")
    public static readonly headline4: Snippet = Snippet.fromStatic("Theme.of(context).textTheme.headline4")
    public static readonly headline5: Snippet = Snippet.fromStatic("Theme.of(context).textTheme.headline5")
    public static readonly headline6: Snippet = Snippet.fromStatic("Theme.of(context).textTheme.headline6")
    public static readonly subtitle1: Snippet = Snippet.fromStatic("Theme.of(context).textTheme.subtitle1")
    public static readonly subtitle2: Snippet = Snippet.fromStatic("Theme.of(context).textTheme.subtitle2")
    public static readonly body1: Snippet = Snippet.fromStatic("Theme.of(context).textTheme.body1")
    public static readonly body2: Snippet = Snippet.fromStatic("Theme.of(context).textTheme.body2")
    public static readonly button: Snippet = Snippet.fromStatic("Theme.of(context).textTheme.button")
    public static readonly caption: Snippet = Snippet.fromStatic("Theme.of(context).textTheme.caption")
    public static readonly overline: Snippet = Snippet.fromStatic("Theme.of(context).textTheme.overline")
}