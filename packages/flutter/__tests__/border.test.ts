import { Border, Color } from "../";
const border = Border.all({
  color: Color.fromHex("#BBBBBB"),
  width: 12,
});

console.log(border.build().finalize());
