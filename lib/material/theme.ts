import { actions } from "@bridged.xyz/remote-ui-core";
import { TextThemeDefaults } from "./text-theme";

/**
 * https://api.flutter.dev/flutter/material/Theme-class.html
 */
export class Theme {
    /**
     * mocking the Theme.of(context) method. it does not return the actial instance value. instead, returns the prebuilt code snippet.
     */
    static of(): ThemeDefaults {
        return {
            textStyle: TextThemeDefaults,
        }
    }
}

export interface ThemeDefaults {
    textStyle: typeof TextThemeDefaults
}
