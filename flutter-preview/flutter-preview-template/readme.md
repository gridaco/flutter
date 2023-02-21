# template app directory

- `/template_app` - a executable dart project used for template app development
- `/template-app` - a nodejs library contains a template file originated from template_app, with an ready to use api
- `/template-type-map-seed` - a nodejs script to seed type mapper dart code to template_app

The template app provides a skeleton flutter project to run on flutter daemon, with message channel to communicate with webview host, having capability of changing the widget's properties on runtime.

```ts
import template from "@flutter-preview/template";

const project = template({
  target: {
    id: "SampleWidget",
    import: "src/samples/widget_1.dart",
    args: {
      title: {
        id: "title",
        type: "String",
        placement: {
          index: 0,
          positional: true,
        },
      },
      subtitle: {
        id: "subtitle",
        type: "String",
        placement: {
          index: 1,
          positional: true,
        },
      },
      active: {
        id: "active",
        type: "bool",
        placement: {
          name: "active",
          optionalNamed: true,
        },
      },
    },
  },
});

const pubspec = project.pubspec;
const main = project.main;
const mappers = project.mappers;
```
