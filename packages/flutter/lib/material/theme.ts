import { TextThemeDefaults } from "./text-theme";
import { ThemeData } from "./theme-data";

/**
 * https://api.flutter.dev/flutter/material/Theme-class.html
 */
export class Theme {
    /**
     * mocking the Theme.of(context) method. it does not return the actial instance value. instead, returns the prebuilt code snippet.
     */

    /**
     * https://api.flutter.dev/flutter/material/Theme/of.html
     */
    static of(): ThemeDefaults {
        // return new ThemeData({
        //     textTheme: TextThemeDefaults
        // })
        return {
            textTheme: TextThemeDefaults,
        }
    }
}

export interface ThemeDefaults {
    textTheme: typeof TextThemeDefaults
}
