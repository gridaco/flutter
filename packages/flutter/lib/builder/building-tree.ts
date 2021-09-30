// import { formatCode } from "dart-style"
import { BuildableTree } from "./buildable-tree";
import { endsWithSemicolon, exportDuplicatedCommas } from "../utils";
import { Buildable } from "./buildable";
import { Snippet } from "./buildable-tree";

export class BuildingTree implements Buildable {
  readonly defaultArguments: Array<string> = Array<string>();
  readonly namedArguments: Map<string, string> = new Map();
  readonly name: string;
  readonly depth: number;
  readonly extensions: Array<BuildableTree>;
  readonly overrideSnippet?: Snippet;
  readonly comments: Array<string>;

  pushDefaultArgument(value: string) {
    this.defaultArguments.push(value);
  }

  pushNamedArgument(key: string, value: string) {
    this.namedArguments.set(key, value);
  }

  /**
   * register named parameter that holds type of array.
   * @param key
   * @param array
   */
  pushNamedArray(key: string, array: Array<string>) {
    let content = "";
    array.forEach((el) => {
      content += `${el},\n`;
    });
    const code = `[\n${content}]`;
    this.namedArguments.set(key, code);
  }

  /**
   *
   * @param containerName the name of the container, usually class name.
   * @param depth the depth of the building tree. 0 by default
   * @param extensions the extension fuction of this building tree. this adds to the final build of current building tree, as a new building tree.
   * e.g. extension -- .copyWith(values: [1, 2, 3]) should be added to the final build of this building tree.
   */
  constructor(props?: {
    name?: string;
    depth?: number;
    overrideSnippet?: Snippet;
    extensions?: Array<BuildableTree>;
    comments: Array<string>;
  }) {
    this.name = props?.name;
    this.depth = props?.depth;
    this.extensions = props?.extensions;
    this.overrideSnippet = props?.overrideSnippet;
    this.comments = props?.comments;
  }

  get isRootTree() {
    return this.depth == 0;
  }

  get hasExtension() {
    return this.extensions && this.extensions.length >= 1;
  }

  get isSnippetOverriden(): boolean {
    return this.overrideSnippet !== undefined;
  }

  code: string;

  build(): BuildingTree {
    if (this.isSnippetOverriden) {
      const comment = buildComments(this.overrideSnippet.comments, {
        forceSingleLine: true,
      });
      this.code = `${this.overrideSnippet
        .build()
        .lookup({ withComma: false })}${comment}`;
    } else {
      const comment = buildComments(this.comments);

      let kvContents = "";
      this.defaultArguments.forEach((v) => {
        kvContents += `${v},\n`;
      });
      this.namedArguments.forEach((v, k) => {
        kvContents += `${k}: ${v},\n`;
      });

      /**
       * the code with constructor and it's parameter.
       * usually in this format.
       * ```dart
       * Text('label', align: TextAlign.left)
       * Button.flat(label: Text('label'))
       * ```
       */
      this.code = `${comment}${this.name}(
    ${kvContents}
)`;
    }

    /**
     * add extension if exists.
     * e.g.
     * ```dart
     * Theme.of(context).textTheme.headline1
     * .copyWith(color: Colors.white) // this part "copyWith"
     * ```
     */
    if (this.hasExtension) {
      this.extensions.forEach((ext) => {
        this.code = this.code + `.${ext.build().lookup()}`;
      });
    }

    // safe logic
    this.code = `${exportDuplicatedCommas(this.code)}`;

    return this;
  }

  finalize() {
    if (this.isRootTree) {
      if (!endsWithSemicolon(this.code)) {
        this.code += ";";
      }
    }
    this.format();
    return this.lookup();
  }

  format(): string {
    // this.code = formatCode(this.code).code;
    // const dart = require("dart-style")
    // this.code = dart.formatCode(this.code).code;
    return this.lookup();
  }

  lookup(options?: { withComma?: boolean }): string {
    if (options?.withComma && canAddComma(this.code)) {
      return addComma({ code: this.code, safetyCheck: true });
    }

    return this.code;
  }
}

function canAddComma(code: string): boolean {
  const trimmed = code.trimEnd();
  if (trimmed.endsWith(";")) {
    return false;
  }
  if (trimmed.endsWith(",")) {
    return false;
  }
  if (trimmed.endsWith(")")) {
    return true;
  }
  return false;
}

function addComma({
  code,
  safetyCheck = false,
}: {
  code: string;
  safetyCheck?: boolean;
}): string {
  function add() {
    code = code + ",";
  }

  if (safetyCheck) {
    if (canAddComma(code)) {
      add();
    }
  } else {
    add();
  }

  return code;
}

function buildComments(
  comments: Array<string>,
  options?: {
    forceSingleLine: boolean;
  }
): string {
  const empty = "";
  if (comments) {
    const rawComment = comments.join("\n");
    if (rawComment.length == 0) {
      return empty;
    }

    if (options?.forceSingleLine) {
      return `/*${rawComment}*/`;
    }

    let finalComment = "";
    comments.forEach((v, i) => {
      const linebreak = i === 0 ? "" : "\n";
      finalComment += linebreak + `/// ` + v;
    });
    return finalComment + "\n";
  }
  return empty;
}
