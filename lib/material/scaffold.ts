import { Color } from '../dart-ui'
import { Widget } from '../widgets'
import { PreferredSizeWidget } from '../widgets/preffered-size-widget'
import { FloatingActionButtonLocation } from './floating-action-button-location'
/**
 * https://api.flutter.dev/flutter/material/Scaffold-class.html
 */
export class Scaffold extends Widget {

    appBar?: PreferredSizeWidget
    body?: Widget
    floatingActionButton?: Widget
    floatingActionButtonLocation?: FloatingActionButtonLocation
    drawer?: Widget
    endDrawer?: Widget
    bottomNavigationBar?: Widget
    bottomSheet?: Widget
    backgroundColor?: Color
    resizeToAvoidBottomPadding?: boolean
    resizeToAvoidBottomInset?: boolean

    /**
     * https://api.flutter.dev/flutter/material/Scaffold/Scaffold.html
     */
    constructor(args: {
        appBar?: PreferredSizeWidget
        body?: Widget
        floatingActionButton?: Widget
        floatingActionButtonLocation?: FloatingActionButtonLocation
        drawer?: Widget
        endDrawer?: Widget
        bottomNavigationBar?: Widget
        bottomSheet?: Widget
        backgroundColor?: Color
        resizeToAvoidBottomPadding?: boolean
        resizeToAvoidBottomInset?: boolean
    }) {
        super()

        this.appBar = args.appBar;
        this.body = args.body;
        this.floatingActionButton = args.floatingActionButton;
        this.floatingActionButtonLocation = args.floatingActionButtonLocation;
        this.drawer = args.drawer;
        this.endDrawer = args.endDrawer;
        this.bottomNavigationBar = args.bottomNavigationBar;
        this.bottomSheet = args.bottomSheet;
        this.backgroundColor = args.backgroundColor;
        this.resizeToAvoidBottomPadding = args.resizeToAvoidBottomPadding;
        this.resizeToAvoidBottomInset = args.resizeToAvoidBottomInset;
    }
}