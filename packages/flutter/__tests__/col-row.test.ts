import { Row, CrossAxisAlignment } from "../";

const row = new Row({
  children: [],
  crossAxisAlignment: CrossAxisAlignment.baseline,
});

console.log(row.build().lookup());
