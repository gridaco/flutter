import type { DartProperty } from "flutter-ast";

import v2_lib_main from "./templates/v2/lib/main";
import v2_lib_flutter_preview_artifacts__initial_properties from "./templates/v2/lib/.flutter_preview_artifacts/initial_properties";
import v2_lib_flutter_preview_artifacts__preview from "./templates/v2/lib/.flutter_preview_artifacts/preview";
import v2_lib_flutter_preview_artifacts__properties_value_mapper from "./templates/v2/lib/.flutter_preview_artifacts/properties_value_mapper";
import v2_lib_flutter_preview_artifacts__properties_value_state from "./templates/v2/lib/.flutter_preview_artifacts/properties_value_state";
import v2_lib_flutter_preview_artifacts__properties_value from "./templates/v2/lib/.flutter_preview_artifacts/properties_value";
import v2_lib_flutter_preview_artifacts__target_widget from "./templates/v2/lib/.flutter_preview_artifacts/target_widget";
// mappers
import v2_lib_flutter_preview_artifacts__mappers__mappers from "./templates/v2/lib/.flutter_preview_artifacts/mappers/mappers";
import v2_lib_flutter_preview_artifacts__mappers__flutter_enums_ext from "./templates/v2/lib/.flutter_preview_artifacts/mappers/flutter_enums_ext";
import v2_lib_flutter_preview_artifacts__mappers__flutter_types_ext from "./templates/v2/lib/.flutter_preview_artifacts/mappers/flutter_types_ext";

const templates = {
  "lib/main.dart": v2_lib_main,
  "lib/.flutter_preview_artifacts/initial_properties.dart":
    v2_lib_flutter_preview_artifacts__initial_properties,
  "lib/.flutter_preview_artifacts/preview.dart":
    v2_lib_flutter_preview_artifacts__preview,
  "lib/.flutter_preview_artifacts/properties_value_mapper.dart":
    v2_lib_flutter_preview_artifacts__properties_value_mapper,
  "lib/.flutter_preview_artifacts/properties_value_state.dart":
    v2_lib_flutter_preview_artifacts__properties_value_state,
  "lib/.flutter_preview_artifacts/properties_value.dart":
    v2_lib_flutter_preview_artifacts__properties_value,
  "lib/.flutter_preview_artifacts/target_widget.dart":
    v2_lib_flutter_preview_artifacts__target_widget,
  // mappers
  "lib/.flutter_preview_artifacts/mappers/mappers.dart":
    v2_lib_flutter_preview_artifacts__mappers__mappers,
  "lib/.flutter_preview_artifacts/mappers/flutter_enums_ext.dart":
    v2_lib_flutter_preview_artifacts__mappers__flutter_enums_ext,
  "lib/.flutter_preview_artifacts/mappers/flutter_types_ext.dart":
    v2_lib_flutter_preview_artifacts__mappers__flutter_types_ext,
} as const;

interface FlutterTemplateArgs {
  /**
   * The has is used for making the artifacts directory unique, so it won't conflict with user's src files
   * This can be also used as an id.
   *
   * e.g. if the hash is "123", the artifacts directory will be ".flutter_preview_artifacts_123"
   *
   * @type {string}
   * @default ""
   */
  hash?: string;
  target: {
    identifier: string;
    initializationName: string;
    import: string;
    properties: DartProperty[];
  };
}

interface IFileEntry {
  path: string;
  content: string;
}

interface TemplateData {
  main: IFileEntry;
  artifacts: IFileEntry[];
}

export default function template({
  hash = "",
  target,
}: FlutterTemplateArgs): TemplateData {
  const __flutter_preview_artifacts__initial_properties = templates[
    "lib/.flutter_preview_artifacts/initial_properties.dart"
  ]({
    initial_properties: buildInitialProperties(),
  });

  const __flutter_preview_artifacts__preview = templates[
    "lib/.flutter_preview_artifacts/preview.dart"
  ]({});

  const __flutter_preview_artifacts__properties_value_mapper = templates[
    "lib/.flutter_preview_artifacts/properties_value_mapper.dart"
  ](buildPropertyConnectorsWithInstanciation());

  const __flutter_preview_artifacts__properties_value_state = templates[
    "lib/.flutter_preview_artifacts/properties_value_state.dart"
  ]({});

  const __flutter_preview_artifacts__properties_value = templates[
    "lib/.flutter_preview_artifacts/properties_value.dart"
  ]({});

  const __flutter_preview_artifacts__target_widget = templates[
    "lib/.flutter_preview_artifacts/target_widget.dart"
  ]({
    target_widget: `export '${target.import}'`,
  });

  // mappers
  const __flutter_preview_artifacts__mappers__mappers = templates[
    "lib/.flutter_preview_artifacts/mappers/mappers.dart"
  ]({});

  const __flutter_preview_artifacts__mappers__flutter_enums_ext = templates[
    "lib/.flutter_preview_artifacts/mappers/flutter_enums_ext.dart"
  ]({});

  return {
    main: {
      path: "lib/main.dart",
      content: buildMainContent(target),
    },
    artifacts: [
      {
        path: `lib/.flutter_preview_artifacts/initial_properties.dart`,
        content: __flutter_preview_artifacts__initial_properties,
      },
      {
        path: `lib/.flutter_preview_artifacts/preview.dart`,
        content: __flutter_preview_artifacts__preview,
      },
      {
        path: `lib/.flutter_preview_artifacts/properties_value_mapper.dart`,
        content: __flutter_preview_artifacts__properties_value_mapper,
      },
      {
        path: `lib/.flutter_preview_artifacts/properties_value_state.dart`,
        content: __flutter_preview_artifacts__properties_value_state,
      },
      {
        path: `lib/.flutter_preview_artifacts/properties_value.dart`,
        content: __flutter_preview_artifacts__properties_value,
      },
      {
        path: `lib/.flutter_preview_artifacts/target_widget.dart`,
        content: __flutter_preview_artifacts__target_widget,
      },
      // mappers
      {
        path: `lib/.flutter_preview_artifacts/mappers/mappers.dart`,
        content: __flutter_preview_artifacts__mappers__mappers,
      },
      {
        path: `lib/.flutter_preview_artifacts/mappers/flutter_enums_ext.dart`,
        content: __flutter_preview_artifacts__mappers__flutter_enums_ext,
      },
    ],
  };
}

function buildMainContent({ identifier }: FlutterTemplateArgs["target"]) {
  // render the template
  const main_dart_src = templates["lib/main.dart"]({
    title: dartstring("Preview - " + identifier),
  });

  return main_dart_src;
}

function buildInitialProperties() {
  // TODO:
  return "";
}

function buildPropertyConnectorsWithInstanciation() {
  // TODO:
  return {
    property_variable_declarations: "", // TODO:
    widget_instantiation: "", // TODO:
  };
}

//

function dartstring(string: string) {
  return JSON.stringify(string);
}
