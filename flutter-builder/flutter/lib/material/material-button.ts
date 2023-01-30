import { identifier } from "../decorations";
import { Key } from "../foundation";
import { Widget } from "../widgets";

/**
 * https://api.flutter.dev/flutter/material/MaterialButton-class.html
 *
 * @obsolete This class is obsolete.
 *
 * FlatButton and RaisedButton have been replaced by TextButton and ElevatedButton respectively. ButtonTheme has been replaced by TextButtonTheme and ElevatedButtonTheme. The appearance of the new widgets can be customized by specifying a ButtonStyle or by creating a one-off style using a styleFrom method like TextButton.styleFrom. The original button classes have been deprecated, please migrate code that uses them. There's a detailed migration guide for the new button and button theme classes in flutter.dev/go/material-button-migration-guide.
 */
@identifier("MaterialButton")
export class MaterialButton extends Widget {
  onPressed: Function;
  constructor({ key }: { key?: Key }) {
    super({ key });
  }
}
