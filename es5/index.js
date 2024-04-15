"use strict";

var _express = _interopRequireDefault(require("express"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _route = _interopRequireDefault(require("./route"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
require('dotenv').config();
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(_route["default"]);
_mongoose["default"].connect(process.env.MONGOOSE).then(function (e) {
  console.log("Mongoose Db Connected");
})["catch"](function (e) {
  return console.log("Connection Error");
});
app.listen(process.env.PORT, function () {
  console.log("server started at port number ".concat(process.env.PORT));
});