import { Color, TextStyle } from "../";
const textStyle = new TextStyle().copyWith({
  color: Color.fromHex("#FFFFFF"),
});

console.log(textStyle.build().finalize());
