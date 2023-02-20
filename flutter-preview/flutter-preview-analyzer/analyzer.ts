import assert from "assert";
import ast from "flutter-ast";
import { isTypeSupportedByFlutterPreview } from "./analyze-type";

export class Analyzer {
  constructor(readonly text: string) {}

  widgets(): WidgetAnalysis[] {
    assert(this.text, "Analyzer: text is empty");

    // StatefulWidget or StatelessWidget
    const res = ast.parse(this.text);
    if (res.errors?.length || !res.file) {
      return [];
    }

    const { classes } = res.file;

    const widget_classes = classes.filter(
      (c) =>
        c.extendsClause === "extends StatelessWidget" ||
        c.extendsClause === "extends StatefulWidget" ||
        c.extendsClause === "extends ImplicitlyAnimatedWidget"
    );

    return widget_classes.map((c) => {
      return {
        start: c.offset,
        id: c.name,
        name: c.name,
        constructors: c.constructors.map((constr) => {
          const an = new WidgetAnalyzer(constr);
          const { required, supported, unsupported } = an.analyzeProperties();
          const required_and_unsupported: Array<ast.DartProperty> =
            required.filter((p) =>
              // with id (name)
              unsupported.some((u) => u.name === p.name)
            );

          const contains_required_unsupported_properties =
            required_and_unsupported.length > 0;

          return <WidgetContructor>{
            start: constr.offset,
            name: constr.name,
            parameters: constr.properties,
            analysis: {
              requires_properties: required.length > 0,
              required_properties: required,
              contains_unsupported_properties: unsupported.length > 0,
              required_and_unsupported_properties: required_and_unsupported,
              contains_required_unsupported_properties,
            },
          };
        }),
      };
    });
  }
}

class WidgetAnalyzer {
  constructor(readonly widget: ast.DartConstructor) {
    //
  }

  analyzeProperties() {
    const result = this.widget.properties.reduce(
      (acc, p) => {
        const { type } = p;
        if (isPropertyRequired(p)) {
          acc.required.push(p);
        }

        if (type) {
          if (isTypeSupportedByFlutterPreview(type)) {
            acc.supported.push(p);
          } else {
            acc.unsupported.push(p);
          }
        }

        return acc;
      },
      {
        required: [],
        supported: [],
        unsupported: [],
      }
    );

    return result;
  }
}

function isPropertyRequired(p: ast.DartProperty) {
  const { name, isOptional, value: defaultValue, isRequired, type } = p;

  // [no-allow] to required properties
  if (isRequired) {
    return true;
  }

  // [allow] nullable properties
  const isNullable = type?.endsWith("?");
  if (isNullable) {
    return false;
  }

  // [allow] optional properties
  if (isOptional) {
    return false;
  }

  // [allow] properties with default values
  if (defaultValue) {
    return false;
  }

  // [allow] "key" property (to be very safe, we have to check its type to be WidgetKey)
  // but to do this, this requires full type analysis
  // if (name === "key") {
  //   return false;
  // }

  return true;
}

export interface WidgetAnalysis {
  start: number;
  id: string;
  name: string;
  constructors: WidgetContructor[];
}

export interface PropertyMetadata {
  name: string;
  type: string;
  required: boolean;
  default: string;
}

export interface WidgetContructor {
  start: number;

  /**
   * if the constructor is default constructor, the name will match the class name (dart)
   */
  name: string;

  parameters: any[];

  analysis: {
    /**
     * rather if explicit arguments are required to be successfully instanciated, compiled.
     */
    requires_properties: boolean;

    required_properties: ast.DartProperty[];

    unsupported_properties: ast.DartProperty[];

    contains_unsupported_properties: boolean;

    required_and_unsupported_properties: ast.DartProperty[];

    contains_required_unsupported_properties: boolean;
  };
}
