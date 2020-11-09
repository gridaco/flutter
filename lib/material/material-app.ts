
import { Widget, WidgetBuilder } from "../widgets";
import { ThemeData } from "./theme-data";


/**
 * https://api.flutter.dev/flutter/material/MaterialApp-class.html
 */
export class MaterialApp extends Widget {
    home: Widget
    routes?: Map<string, WidgetBuilder>
    initialRoute?: string
    title?: string
    theme?: ThemeData
    darkTheme?: ThemeData
    debugShowMaterialGrid?: boolean
    showPerformanceOverlay?: boolean
    checkerboardRasterCacheImages?: boolean
    checkerboardOffscreenLayers?: boolean
    showSemanticsDebugger?: boolean
    debugShowCheckedModeBanner?: boolean

    constructor(args: {
        home: Widget
        routes?: Map<string, WidgetBuilder>
        initialRoute?: string
        title?: string
        theme?: ThemeData
        darkTheme?: ThemeData
        debugShowMaterialGrid?: boolean
        showPerformanceOverlay?: boolean
        checkerboardRasterCacheImages?: boolean
        checkerboardOffscreenLayers?: boolean
        showSemanticsDebugger?: boolean
        debugShowCheckedModeBanner?: boolean
    }) {
        super()

        this.home = args.home;
        this.routes = args.routes;
        this.initialRoute = args.initialRoute;
        this.title = args.title;
        this.theme = args.theme;
        this.darkTheme = args.darkTheme;
        this.debugShowMaterialGrid = args.debugShowMaterialGrid;
        this.showPerformanceOverlay = args.showPerformanceOverlay;
        this.checkerboardRasterCacheImages = args.checkerboardRasterCacheImages;
        this.checkerboardOffscreenLayers = args.checkerboardOffscreenLayers;
        this.showSemanticsDebugger = args.showSemanticsDebugger;
        this.debugShowCheckedModeBanner = args.debugShowCheckedModeBanner;
    }
}