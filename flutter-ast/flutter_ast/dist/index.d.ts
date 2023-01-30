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
  imports: Array<string>;
  methods: Array<DartMethod>;
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

interface DartProperty extends DartCore {}

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

  /**
   * @default true
   */
  isOptional: boolean;

  /**
   * @default false
   */
  isNamed: boolean;

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

interface DartMethod extends AstNode {
  name?: string;
  parameters?: Array<object>;
  body;
}

export function parse(source: string): DartResult;
