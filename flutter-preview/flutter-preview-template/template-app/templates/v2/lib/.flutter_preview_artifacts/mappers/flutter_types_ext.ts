export default (args: {}) => `import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';

// EXTENSIONS
extension StringToBool on String {
  bool parseBool() {
    return this.toLowerCase() == 'true';
  }
}

extension StringToColor on String {
  Color parseColor() {
    // if string starts with #, remove it
    if (this.startsWith("#")) {
      return Color(int.parse(this.substring(1, 7), radix: 16) + 0xFF000000);
    } else {
      return Color(int.parse(this, radix: 16) + 0xFF000000);
    }
  }
}

extension StringToIcon on String {
  Icon parseIcon() {
    // TODO: parse icon
    return Icon(Icons.add);
  }
}
`