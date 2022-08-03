import { EdgeInsets } from "../";

const insets = EdgeInsets.symmetric({
  horizontal: undefined,
  vertical: 1,
});

console.log(insets.build().finalize());
