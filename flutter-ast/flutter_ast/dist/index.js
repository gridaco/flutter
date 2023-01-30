const ast = require("./ast");

function parse(source) {
  const _ = ast.parse(source);
  return {
    file: JSON.parse(_.file),
    errors: _.errors,
  };
}

module.exports = {
  parse,
};
