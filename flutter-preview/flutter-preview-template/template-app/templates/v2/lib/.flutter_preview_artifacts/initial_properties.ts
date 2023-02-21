export default (args: {initial_properties: string}) => `import 'dart:ui';
import 'package:flutter/widgets.dart';
import 'package:flutter/material.dart';

Map<String, dynamic> FLUTTER_PREVIEW_TARGET_WIDGET_INITIAL_PROPERTIES = {
  // start_flutter_preview_template:initial_properties
${args.initial_properties}
// end_flutter_preview_template:initial_properties
};
`