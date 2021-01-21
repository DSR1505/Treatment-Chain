"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ResearchInstitute =
/** @class */
function () {
  function ResearchInstitute(id, country) {
    this.id = id;
    this.country = country;
  }

  Object.defineProperty(ResearchInstitute.prototype, "name", {
    get: function get() {
      return this._name;
    },
    set: function set(n) {
      this._name = n;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ResearchInstitute.prototype, "location", {
    get: function get() {
      return this._location;
    },
    set: function set(loc) {
      this._location = loc;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ResearchInstitute.prototype, "email", {
    get: function get() {
      return this._email;
    },
    set: function set(mail) {
      this._email = mail;
    },
    enumerable: false,
    configurable: true
  });

  ResearchInstitute.prototype.toString = function () {
    return JSON.stringify(this);
  };

  return ResearchInstitute;
}();

exports.default = ResearchInstitute;