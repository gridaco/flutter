import { Key } from "../foundation";
import { Widget, WidgetBuilder } from "../widgets";
import { ThemeData } from "./theme-data";

/**
 * https://api.flutter.dev/flutter/material/MaterialApp-class.html
 */
export class MaterialApp extends Widget {
  home: Widget;
  routes?: Map<string, WidgetBuilder>;
  initialRoute?: string;
  title?: string;
  theme?: ThemeData;
  darkTheme?: ThemeData;
  debugShowMaterialGrid?: boolean;
  showPerformanceOverlay?: boolean;
  checkerboardRasterCacheImages?: boolean;
  checkerboardOffscreenLayers?: boolean;
  showSemanticsDebugger?: boolean;
  debugShowCheckedModeBanner?: boolean;

  constructor({
    key,
    home,
    routes,
    initialRoute,
    title,
    theme,
    darkTheme,
    debugShowMaterialGrid,
    showPerformanceOverlay,
    checkerboardRasterCacheImages,
    checkerboardOffscreenLayers,
    showSemanticsDebugger,
    debugShowCheckedModeBanner,
  }: { key?: Key } & {
    home: Widget;
    routes?: Map<string, WidgetBuilder>;
    initialRoute?: string;
    title?: string;
    theme?: ThemeData;
    darkTheme?: ThemeData;
    debugShowMaterialGrid?: boolean;
    showPerformanceOverlay?: boolean;
    checkerboardRasterCacheImages?: boolean;
    checkerboardOffscreenLayers?: boolean;
    showSemanticsDebugger?: boolean;
    debugShowCheckedModeBanner?: boolean;
  }) {
    super({ key });

    this.home = home;
    this.routes = routes;
    this.initialRoute = initialRoute;
    this.title = title;
    this.theme = theme;
    this.darkTheme = darkTheme;
    this.debugShowMaterialGrid = debugShowMaterialGrid;
    this.showPerformanceOverlay = showPerformanceOverlay;
    this.checkerboardRasterCacheImages = checkerboardRasterCacheImages;
    this.checkerboardOffscreenLayers = checkerboardOffscreenLayers;
    this.showSemanticsDebugger = showSemanticsDebugger;
    this.debugShowCheckedModeBanner = debugShowCheckedModeBanner;
  }
}
