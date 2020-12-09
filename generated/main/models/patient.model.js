"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Patient =
/** @class */
function () {
  function Patient(id, country) {
    this.id = id;
    this.country = country;
  }

  Object.defineProperty(Patient.prototype, "name", {
    get: function get() {
      return this._name;
    },
    set: function set(n) {
      this._name = n;
    },
    enumerable: false,
    configurable: true
  });
  return Patient;
}();

exports.default = Patient;