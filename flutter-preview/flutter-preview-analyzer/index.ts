import ast from "flutter-ast";

export class Analyzer {
  constructor(readonly text: string) {}

  async widgets(): Promise<WidgetAnalysis[]> {
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
      };
    });
  }
}

interface WidgetAnalysis {
  start: number;
  id: string;
  name: string;
}
