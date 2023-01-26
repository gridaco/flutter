// Type definitions for dart-style

interface DartResult {
  file?: {
    path: string;
    imports: Array<string>;
    classes: Array<object>;
    methods: Array<object>;
    enums: Array<object>;
    fields: Array<object>;
  };
  errors?: Array<object>;
}

export function parse(source: string): DartResult;
