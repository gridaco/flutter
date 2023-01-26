// Type definitions for dart-style

interface DartResult {
  file?: object;
  errors?: Array<object>;
}

export function parse(source: string): DartResult;
