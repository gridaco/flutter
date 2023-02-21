# `@flutter-preview/template`

Install

```bash
yarn add @flutter-preview/template
```

Usage

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
