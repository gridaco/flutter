# flutter-ast

Flutter ast parser for nodejs

```bash
npm install flutter-ast
yarn add flutter-ast
```

```ts
import { parse } from "flutter-ast";

const ast = parse(`<your dart file source here>`);

// example, see the class ast trees
console.log(ast.file.classes);
```

_LICENSE: MIT_
