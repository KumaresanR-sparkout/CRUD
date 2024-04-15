"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var user = new _mongoose["default"].Schema({
  name: {
    type: String,
    minlength: 5,
    maxlength: 30,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});
var _default = exports["default"] = _mongoose["default"].model('users', user);