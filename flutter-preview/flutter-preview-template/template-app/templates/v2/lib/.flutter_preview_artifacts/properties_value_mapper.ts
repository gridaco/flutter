export default (args: {property_variable_declarations: string, widget_instantiation: string}) => `import 'package:flutter/widgets.dart';
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
`