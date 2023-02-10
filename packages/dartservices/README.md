# dart service api wrapper

> This is a ts wrapper for aclling dartservies api, which remotely compiles dart code to js - executable for flutter

Install

```
yarn add dart-services
```

```ts
// default usage
import DartServices from "dart-services";
const service = DartServices.create();

// or with custom channel
const beta = DartServices.create({
  channel: "beta",
});

// or with custom backend
const myserver = DartServices.create({
  baseUrl: "http://localhost:8080",
});

// using dedicated channels
import { stable } from "dart-services";
import { beta } from "dart-services";

// compile apis
const maindartsrc = "...";
// compile ddc
service.compileDDC(maindartsrc);
// compile
service.compile(maindartsrc);
// compile complete
service.compileComplete(maindartsrc);
// analyze
service.analyze(maindartsrc);

// or simply use this simple function.
import { compileComplete } from "dart-services";
compileComplete(maindartsrc);
```

## Difference between compileDDC and compileComplete

see - https://github.com/dart-lang/dart-pad/blob/master/lib/services/execution_iframe.dart

The iframe source, https://dartpad.dev/scripts/frame_dark.html requires compiled js with compiledDDC and it needs to be transformed statically following the `execution_iframe.dart`'s logic.

## References

- [dart-pad](https://github.com/dart-lang/dart-pad)
- [dart-services](https://github.com/dart-lang/dart-services)
