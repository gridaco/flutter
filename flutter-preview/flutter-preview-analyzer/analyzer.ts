import assert from "assert";
import ast from "flutter-ast";

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
        c.extendsClause === "extends StatefulWidget"
    );

    return widget_classes.map((c) => {
      return {
        start: c.offset,
        id: c.name,
        name: c.name,
        constructors: c.constructors.map((constr) => {
          return {
            start: constr.offset,
            name: constr.name,
            parameters: constr.properties,
            analysis: {
              requires_arguments:
                constr.properties.filter((p) => {
                  const {
                    name,
                    isOptional,
                    value: defaultValue,
                    isRequired,
                  } = p;

                  // [no-allow] to required properties
                  if (isRequired) {
                    return true;
                  }

                  // [allow] nullable properties
                  if (isOptional) {
                    return false;
                  }

                  // [allow] properties with default values
                  if (defaultValue) {
                    return false;
                  }

                  // [allow] "key" property (to be very safe, we have to check its type to be WidgetKey)
                  // but to do this, this requires full type analysis
                  if (name === "key") {
                    return false;
                  }

                  return true;
                }).length > 0,
            },
          };
        }),
      };
    });
  }
}

interface WidgetAnalysis {
  start: number;
  id: string;
  name: string;
  constructors: WidgetContructor[];
}

interface WidgetContructor {
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
    requires_arguments: boolean;
  };
}
