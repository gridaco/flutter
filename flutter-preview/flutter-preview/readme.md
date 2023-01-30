# Flutter preview

## How It works

- input: flutter project path, target widget info
- sync: sync flutter project to preview project on local temp dir
  - modes: symlink, watch & copy
- daemon: start flutter daemon on preview project

## Root app & theme

**default main**

```dart
import 'package:flutter/material.dart';

class FlutterPreview extends StatelessWidget {
  const FlutterPreview({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Preview',
      theme: ThemeData(),
      home: const PreviewWidget(),
    );
  }
}
```

**custom main**
