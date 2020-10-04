export class SnippetBuilder {
    _defaultSnippet: string
    constructor(defaultSnippet?: string) {
        this._defaultSnippet = defaultSnippet;
    }

    static fromStatic(snippet: string): SnippetBuilder {
        return new SnippetBuilder(snippet);
    }

    build(): any {
        return this;
    }

    lookup(): any {
        return this._defaultSnippet;
    }

    get constructorName(): string {
        return this.constructor.name;
    }
}