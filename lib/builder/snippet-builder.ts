export class SnippetBuilder {
    _defaultSnippet: string
    constructor(defaultSnippet?: string) {
        this._defaultSnippet = defaultSnippet;
    }

    static fromStatic(snippet: string): SnippetBuilder {
        return new SnippetBuilder(snippet);
    }

    build() {
        return this._defaultSnippet;
    }

    get widgetClassName(): string {
        return this.constructor.name;
    }
}