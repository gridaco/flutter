// Type definitions for dart-style

interface AstNode {
  offset: number;
  end: number;
}

interface DartResult {
  file?: DartFile;
  errors?: Array<object>;
}

interface DartFile {
  path: string;
  classes: Array<DartClass>;
  enums: Array<DartEnum>;
  fields: Array<DartField>;
  imports: Array<DartImport>;
  methods: Array<DartMethod>;
}

interface DartImport extends AstNode {
  /**
   * @example
   * `import 'package:foo/foo.dart';`
   *
   * => `package:foo/foo.dart`
   */
  uri?: string;

  /**
   * @example
   * `import 'package:foo/foo.dart' as foo;`
   *
   * => `foo`
   */
  prefix?: string;

  /**
   * @example
   * `import 'package:foo/foo.dart' show Foo, Bar;`
   * => `['Foo', 'Bar']`
   *
   * If the show is falsy, it means that all the symbols are imported.
   * If the show is an empty array, it also means that all the symbols are imported.
   *
   * => `show?.length > 0`
   */
  show?: Array<string>;

  /**
   * @example
   * `import 'package:foo/foo.dart' hide Foo, Bar;`
   * => `['Foo', 'Bar']`
   *
   * If the hide is falsy, it means that no symbols are hidden.
   * If the hide is an empty array, it also means that no symbols are hidden.
   *
   * => `hide?.length > 0`
   */
  hide?: Array<string>;
}

interface DartClass extends AstNode {
  constructors: Array<DartConstructor>;
  comments: Array<DartComment>;
  fields: Array<DartField>;
  methods: Array<DartMethod>;
  name: string;
  isAbstract?: boolean;
  extendsClause?: string;
  implementsClause?: string;
  withClause?: string;
}

interface DartConstructor extends AstNode {
  name: string;
  properties: Array<DartProperty>;
}

interface DartProperty extends DartCore {
  /**
   * @default false
   */
  isOptional: boolean;

  /**
   * @default false
   */
  isNamed: boolean;

  isRequired: boolean;

  /**
   * @default false
   */
  isPositional: boolean;

  /**
   * @default false
   */
  isRequiredPositional: boolean;

  /**
   * @default false
   */
  isSynthetic: boolean;

  /**
   * @default false
   */
  isRequiredNamed: boolean;

  /**
   * @default false
   */
  isOptionalNamed: boolean;

  position?: number;
}

interface DartField extends DartCore {}

interface DartComment extends AstNode {
  lines: Array<string>;
}

interface DartEnum extends AstNode {
  name: string;
  values: Array<string>;
}

interface DartCore extends AstNode {
  name?: string;
  key?: string;
  type?: string;
  value?: DartCore;

  isFinal: boolean;
  isConst: boolean;
  isStatic: boolean;
}

interface DartMethod extends AstNode {
  name?: string;
  parameters?: Array<object>;
  body;
}

export function parse(source: string): DartResult;
