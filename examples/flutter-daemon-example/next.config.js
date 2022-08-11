const withTM = require("next-transpile-modules")([
  //
  "@flutter-daemon/client",
  "@flutter-daemon/server",
]);
module.exports = withTM({});
