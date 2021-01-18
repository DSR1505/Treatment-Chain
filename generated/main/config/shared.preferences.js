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

  SharedPreferences.prototype.deletePreference = function (key) {
    localStorage.removeItem(key);

    if (this.getPreference(key) != undefined) {
      return false;
    }

    return true;
  };

  return SharedPreferences;
}();

exports.default = SharedPreferences;