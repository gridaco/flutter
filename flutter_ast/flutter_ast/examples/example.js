const path = require("path");
const fs = require("fs");
const ast = require("../dist");

const sample = fs.readFileSync(
  path.join(__dirname, "../samples/sample.dart"),
  "utf8"
);

// console.log("Parsing sample.dart", sample);

const res = ast.parse(sample);

console.log(JSON.stringify(res, null, 2));
// console.log(res.file.classes);

// run node example.js
