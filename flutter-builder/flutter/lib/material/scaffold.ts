import { Color } from "../dart-ui";
import { identifier } from "../decorations";
import { Key } from "../foundation";
import { Widget } from "../widgets";
import { PreferredSizeWidget } from "../widgets/preffered-size-widget";
import { FloatingActionButtonLocation } from "./floating-action-button-location";
/**
 * https://api.flutter.dev/flutter/material/Scaffold-class.html
 */
@identifier("Scaffold")
export class Scaffold extends Widget {
  appBar?: PreferredSizeWidget;
  body?: Widget;
  floatingActionButton?: Widget;
  floatingActionButtonLocation?: FloatingActionButtonLocation;
  drawer?: Widget;
  endDrawer?: Widget;
  bottomNavigationBar?: Widget;
  bottomSheet?: Widget;
  backgroundColor?: Color;
  resizeToAvoidBottomPadding?: boolean;
  resizeToAvoidBottomInset?: boolean;

  /**
   * https://api.flutter.dev/flutter/material/Scaffold/Scaffold.html
   */
  constructor({
    key,
    appBar,
    body,
    floatingActionButton,
    floatingActionButtonLocation,
    drawer,
    endDrawer,
    bottomNavigationBar,
    bottomSheet,
    backgroundColor,
    resizeToAvoidBottomPadding,
    resizeToAvoidBottomInset,
  }: { key?: Key } & {
    appBar?: PreferredSizeWidget;
    body?: Widget;
    floatingActionButton?: Widget;
    floatingActionButtonLocation?: FloatingActionButtonLocation;
    drawer?: Widget;
    endDrawer?: Widget;
    bottomNavigationBar?: Widget;
    bottomSheet?: Widget;
    backgroundColor?: Color;
    resizeToAvoidBottomPadding?: boolean;
    resizeToAvoidBottomInset?: boolean;
  }) {
    super({ key });

    this.appBar = appBar;
    this.body = body;
    this.floatingActionButton = floatingActionButton;
    this.floatingActionButtonLocation = floatingActionButtonLocation;
    this.drawer = drawer;
    this.endDrawer = endDrawer;
    this.bottomNavigationBar = bottomNavigationBar;
    this.bottomSheet = bottomSheet;
    this.backgroundColor = backgroundColor;
    this.resizeToAvoidBottomPadding = resizeToAvoidBottomPadding;
    this.resizeToAvoidBottomInset = resizeToAvoidBottomInset;
  }
}
