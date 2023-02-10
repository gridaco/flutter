var testKey = '__TESTRESULT__ ';

function dartPrint(message) {
  if (message.startsWith(testKey)) {
    var resultMsg = JSON.parse(message.substring(testKey.length));
    resultMsg.sender = 'frame';
    resultMsg.type = 'testResult';
    parent.postMessage(resultMsg, '*');
  } else {
    parent.postMessage(
      { sender: 'frame', type: 'stdout', message: message.toString() },
      '*'
    );
  }
}
// Unload previous version.
require.undef('dartpad_main');

var _thrownDartMainRunner = false;

window.onerror = function (message, url, lineNumber, colno, error) {
  if (!_thrownDartMainRunner) {
    var errorMessage = '';
    if (error != null) {
      errorMessage = 'Error: ' + error;
    }
    parent.postMessage(
      { sender: 'frame', type: 'stderr', message: message + errorMessage },
      '*'
    );
  }
  _thrownDartMainRunner = false;
};

require.config({
  baseUrl:
    'https://storage.googleapis.com/compilation_artifacts/2.11.0-213.1.beta/',
  waitSeconds: 60,
});

define('dartpad_main', ['dart_sdk', 'flutter_web'], function load__dartpad_main(
  dart_sdk,
  flutter_web
) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const custom_paint = flutter_web.src__rendering__custom_paint;
  const framework = flutter_web.src__widgets__framework;
  const app = flutter_web.src__material__app;
  const theme_data = flutter_web.src__material__theme_data;
  const slider_theme = flutter_web.src__material__slider_theme;
  const text = flutter_web.src__widgets__text;
  const scaffold = flutter_web.src__material__scaffold;
  const app_bar = flutter_web.src__material__app_bar;
  const drawer = flutter_web.src__material__drawer;
  const scroll_view = flutter_web.src__widgets__scroll_view;
  const drawer_header = flutter_web.src__material__drawer_header;
  const basic = flutter_web.src__widgets__basic;
  const container = flutter_web.src__widgets__container;
  const text_style = flutter_web.src__painting__text_style;
  const box = flutter_web.src__rendering__box;
  const box_decoration = flutter_web.src__painting__box_decoration;
  const box_border = flutter_web.src__painting__box_border;
  const colors = flutter_web.src__material__colors;
  const flex = flutter_web.src__rendering__flex;
  const slider = flutter_web.src__material__slider;
  const binding = flutter_web.src__widgets__binding;
  const platform = flutter_web.src__foundation__platform;
  var bootstrap = Object.create(dart.library);
  var main = Object.create(dart.library);
  var $floor = dartx.floor;
  var SunflowerPainterL = () =>
    (SunflowerPainterL = dart.constFn(dart.legacy(main.SunflowerPainter)))();
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(framework.Widget)))();
  var JSArrayOfWidgetL = () =>
    (JSArrayOfWidgetL = dart.constFn(_interceptors.JSArray$(WidgetL())))();
  var VoidToNullN = () =>
    (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  var doubleL = () => (doubleL = dart.constFn(dart.legacy(core.double)))();
  var doubleLToNullN = () =>
    (doubleLToNullN = dart.constFn(dart.fnType(core.Null, [doubleL()])))();
  const CT = Object.create(null);
  var L0 = 'file:///tmp/dartpadCSJXKZ/main.dart';
  bootstrap.main = function main$() {
    return async.async(dart.void, function* main$() {
      yield ui.webOnlyInitializePlatform();
      main.main();
    });
  };
  var seeds$ = dart.privateName(main, 'SunflowerPainter.seeds');
  main.SunflowerPainter = class SunflowerPainter extends custom_paint.CustomPainter {
    get seeds() {
      return this[seeds$];
    }
    set seeds(value) {
      super.seeds = value;
    }
    paint(canvas, size) {
      let center = dart.notNull(size.width) / 2;
      for (let i = 0; i < dart.notNull(this.seeds); i = i + 1) {
        let theta =
          (i * 6.283185307179586) / dart.notNull(main.SunflowerPainter.phi);
        let r = math.sqrt(i) * 4;
        let x = center + r * math.cos(theta);
        let y = center - r * math.sin(theta);
        let offset = new ui.Offset.new(x, y);
        if (!dart.test(size.contains(offset))) {
          continue;
        }
        this.drawSeed(canvas, x, y);
      }
    }
    shouldRepaint(oldDelegate) {
      SunflowerPainterL().as(oldDelegate);
      return oldDelegate.seeds != this.seeds;
    }
    drawSeed(canvas, x, y) {
      let t0;
      let paint =
        ((t0 = ui.Paint.new()),
        (() => {
          t0.strokeWidth = 2.0;
          t0.style = ui.PaintingStyle.fill;
          t0.color = main.primaryColor;
          return t0;
        })());
      canvas.drawCircle(
        new ui.Offset.new(
          dart.nullCast(x, core.double),
          dart.nullCast(y, core.double)
        ),
        2,
        paint
      );
    }
  };
  (main.SunflowerPainter.new = function (seeds) {
    this[seeds$] = seeds;
    main.SunflowerPainter.__proto__.new.call(this);
  }).prototype = main.SunflowerPainter.prototype;
  dart.addTypeTests(main.SunflowerPainter);
  dart.addTypeCaches(main.SunflowerPainter);
  dart.setMethodSignature(main.SunflowerPainter, () => ({
    __proto__: dart.getMethods(main.SunflowerPainter.__proto__),
    paint: dart.fnType(dart.void, [
      dart.legacy(ui.Canvas),
      dart.legacy(ui.Size),
    ]),
    shouldRepaint: dart.fnType(dart.legacy(core.bool), [
      dart.legacy(core.Object),
    ]),
    drawSeed: dart.fnType(dart.void, [
      dart.legacy(ui.Canvas),
      dart.legacy(core.num),
      dart.legacy(core.num),
    ]),
  }));
  dart.setLibraryUri(main.SunflowerPainter, L0);
  dart.setFieldSignature(main.SunflowerPainter, () => ({
    __proto__: dart.getFields(main.SunflowerPainter.__proto__),
    seeds: dart.finalFieldType(dart.legacy(core.int)),
  }));
  dart.defineLazy(
    main.SunflowerPainter,
    {
      /*main.SunflowerPainter.seedRadius*/ get seedRadius() {
        return 2;
      },
      /*main.SunflowerPainter.scaleFactor*/ get scaleFactor() {
        return 4;
      },
      /*main.SunflowerPainter.tau*/ get tau() {
        return 6.283185307179586;
      },
      /*main.SunflowerPainter.phi*/ get phi() {
        return (math.sqrt(5) + 1) / 2;
      },
    },
    true
  );
  main.Sunflower = class Sunflower extends framework.StatefulWidget {
    createState() {
      return new main._SunflowerState.new();
    }
  };
  (main.Sunflower.new = function () {
    main.Sunflower.__proto__.new.call(this);
  }).prototype = main.Sunflower.prototype;
  dart.addTypeTests(main.Sunflower);
  dart.addTypeCaches(main.Sunflower);
  dart.setMethodSignature(main.Sunflower, () => ({
    __proto__: dart.getMethods(main.Sunflower.__proto__),
    createState: dart.fnType(
      dart.legacy(framework.State$(dart.legacy(framework.StatefulWidget))),
      []
    ),
  }));
  dart.setLibraryUri(main.Sunflower, L0);
  main._SunflowerState = class _SunflowerState extends framework.State$(
    dart.legacy(main.Sunflower)
  ) {
    get seedCount() {
      return this.seeds[$floor]();
    }
    build(context) {
      return new app.MaterialApp.new({
        debugShowCheckedModeBanner: false,
        theme: theme_data.ThemeData.new().copyWith({
          platform: main.platform,
          brightness: ui.Brightness.dark,
          sliderTheme: slider_theme.SliderThemeData.fromPrimaryColors({
            primaryColor: main.primaryColor,
            primaryColorLight: main.primaryColor,
            primaryColorDark: main.primaryColor,
            valueIndicatorTextStyle: new text.DefaultTextStyle.fallback().style,
          }),
        }),
        home: new scaffold.Scaffold.new({
          appBar: new app_bar.AppBar.new({
            title: new text.Text.new('Sunflower'),
          }),
          drawer: new drawer.Drawer.new({
            child: new scroll_view.ListView.new({
              children: JSArrayOfWidgetL().of([
                new drawer_header.DrawerHeader.new({
                  child: new basic.Center.new({
                    child: new container.Container.new({
                      child: new text.Text.new('Sunflower 🌻', {
                        style: new text_style.TextStyle.new({ fontSize: 32.0 }),
                      }),
                    }),
                  }),
                }),
              ]),
            }),
          }),
          body: new container.Container.new({
            constraints: new box.BoxConstraints.expand(),
            decoration: new box_decoration.BoxDecoration.new({
              border: box_border.Border.all({
                color: colors.Colors.transparent,
              }),
            }),
            child: new basic.Column.new({
              crossAxisAlignment: flex.CrossAxisAlignment.center,
              mainAxisAlignment: flex.MainAxisAlignment.start,
              children: JSArrayOfWidgetL().of([
                new container.Container.new({
                  decoration: new box_decoration.BoxDecoration.new({
                    border: box_border.Border.all({
                      color: colors.Colors.transparent,
                    }),
                  }),
                  child: new basic.SizedBox.new({
                    width: 400.0,
                    height: 400.0,
                    child: new basic.CustomPaint.new({
                      painter: new main.SunflowerPainter.new(this.seedCount),
                    }),
                  }),
                }),
                new text.Text.new(
                  'Showing ' + dart.str(this.seedCount) + ' seeds'
                ),
                new basic.ConstrainedBox.new({
                  constraints: new box.BoxConstraints.tightFor({
                    width: 300.0,
                  }),
                  child: new slider.Slider.adaptive({
                    min: 20.0,
                    max: 2000.0,
                    value: this.seeds,
                    onChanged: dart.fn((newValue) => {
                      this.setState(
                        dart.fn(() => {
                          this.seeds = newValue;
                        }, VoidToNullN())
                      );
                    }, doubleLToNullN()),
                  }),
                }),
              ]),
            }),
          }),
        }),
      });
    }
  };
  (main._SunflowerState.new = function () {
    this.seeds = 100.0;
    main._SunflowerState.__proto__.new.call(this);
  }).prototype = main._SunflowerState.prototype;
  dart.addTypeTests(main._SunflowerState);
  dart.addTypeCaches(main._SunflowerState);
  dart.setMethodSignature(main._SunflowerState, () => ({
    __proto__: dart.getMethods(main._SunflowerState.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [
      dart.legacy(framework.BuildContext),
    ]),
  }));
  dart.setGetterSignature(main._SunflowerState, () => ({
    __proto__: dart.getGetters(main._SunflowerState.__proto__),
    seedCount: dart.legacy(core.int),
  }));
  dart.setLibraryUri(main._SunflowerState, L0);
  dart.setFieldSignature(main._SunflowerState, () => ({
    __proto__: dart.getFields(main._SunflowerState.__proto__),
    seeds: dart.fieldType(dart.legacy(core.double)),
  }));
  main.main = function main$0() {
    binding.runApp(new main.Sunflower.new());
  };
  dart.defineLazy(
    main,
    {
      /*main.primaryColor*/ get primaryColor() {
        return colors.Colors.orange;
      },
      /*main.platform*/ get platform() {
        return platform.TargetPlatform.android;
      },
    },
    true
  );
  dart.trackLibraries(
    'dartpad_main',
    {
      'file:///tmp/dartpadCSJXKZ/bootstrap.dart': bootstrap,
      'file:///tmp/dartpadCSJXKZ/main.dart': main,
    },
    {},
    null
  );
  // Exports:
  return {
    tmp__dartpadCSJXKZ__bootstrap: bootstrap,
    tmp__dartpadCSJXKZ__main: main,
  };
});

//# sourceMappingURL=main.dart.js.map

require(['dart_sdk'], function (sdk) {
  'use strict';
  sdk.developer._extensions.clear();
  sdk.dart.hotRestart();
});

require(['dartpad_main', 'dart_sdk'], function (dartpad_main, dart_sdk) {
  // SDK initialization.
  dart_sdk.dart.setStartAsyncSynchronously(true);
  dart_sdk._isolate_helper.startRootIsolate(() => {}, []);

  // Loads the `dartpad_main` module and runs its bootstrapped main method.
  //
  // DDK provides the user's code in a RequireJS module, which exports an
  // object that looks something like this:
  //
  // {
  //       [random_tokens]__bootstrap: bootstrap,
  //       [random_tokens]__main: main
  // }
  //
  // The first of those properties holds the compiled code for the bootstrap
  // Dart file, which the server uses to wrap the user's code and wait on a
  // call to dart:ui's `webOnlyInitializePlatform` before executing any of it.
  //
  // The loop below iterates over the properties of the exported object,
  // looking for one that ends in "__bootstrap". Once found, it executes the
  // bootstrapped main method, which calls the user's main method, which
  // (presumably) calls runApp and starts Flutter's rendering.

  for (var prop in dartpad_main) {
    if (prop.endsWith('__bootstrap')) {
      dartpad_main[prop].main();
    }
  }
});
