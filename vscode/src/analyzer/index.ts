import * as vscode from "vscode";

export class Analyzer {
  constructor(readonly document: vscode.TextDocument) {}

  async widgets(): Promise<WidgetAnalysis[]> {
    const text = await this.document.getText();
    // StatefulWidget or StatelessWidget
    const re = /class\s+(\w+)\s+extends\s+(StatelessWidget|StatefulWidget)/;
    const matches = text.match(re);

    if (!matches) {
      return [];
    }

    const name = matches[1];
    const start = matches.index ?? 0;

    return [
      {
        start,
        id: "1",
        name,
      },
    ];
  }
}

interface WidgetAnalysis {
  start: number;
  id: string;
  name: string;
}
