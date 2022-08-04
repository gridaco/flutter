import { Row, CrossAxisAlignment } from "../";
import { formatCode as format } from "dart-style";
const row = new Row({
  children: [],
  crossAxisAlignment: CrossAxisAlignment.baseline,
});

test("col", () => {
  expect(format(row.build().finalize()).code).toBe(
    `Row(
  children: [],
  crossAxisAlignment: CrossAxisAlignment.baseline,
);`
  );
});
