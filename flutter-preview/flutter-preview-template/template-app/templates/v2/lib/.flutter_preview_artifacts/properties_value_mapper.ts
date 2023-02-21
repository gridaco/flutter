export default (args: {property_variable_declarations: string, widget_instantiation: string}) => `import 'dart:html' as html;
import 'package:flutter/widgets.dart';
import './properties_value.dart';
import './target_widget.dart';

class PropertiesMapper extends StatelessWidget {
  const PropertiesMapper({super.key});

  @override
  Widget build(BuildContext context) {
    // read the value of the "name" property from the parent state container
    // start_flutter_preview_template:property_variable_declarations
${args.property_variable_declarations}
// end_flutter_preview_template:property_variable_declarations

    return Column(
      children: [
        // start_flutter_preview_template:widget_instantiation
${args.widget_instantiation}
// end_flutter_preview_template:widget_instantiation
      ],
    );
  }
}

Function() GENERIC_CALLBACK_HANDLER = ([dynamic args]) {
  // Send a event to the parent webapp when the widget is tapped
  // post message
  html.window.parent?.postMessage({
    "event": "@inapp/function-invocation-event",
    "name": 'onTap', // TODO:
    "args": args
  }, "*");
};
`