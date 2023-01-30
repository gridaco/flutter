import * as vscode from "vscode";
import { parse } from "flutter-ast";

export class Analyzer {
  constructor(readonly document: vscode.TextDocument) {}

  async widgets(): Promise<WidgetAnalysis[]> {
    const text = await this.document.getText();
    // StatefulWidget or StatelessWidget

    const res = parse(text);
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
