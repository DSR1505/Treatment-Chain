"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var SharedPreferences =
/** @class */
function () {
  function SharedPreferences() {}

  SharedPreferences.prototype.setPreference = function (key, value) {
    localStorage.setItem(key, value);
  };

  SharedPreferences.prototype.getPreference = function (key) {
    return localStorage.getItem(key);
  };

  return SharedPreferences;
}();

exports.default = SharedPreferences;