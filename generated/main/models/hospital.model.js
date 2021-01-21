"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Hospital =
/** @class */
function () {
  function Hospital(id, country) {
    this._country = country;
    this._id = id;
  }

  Object.defineProperty(Hospital.prototype, "id", {
    get: function get() {
      return this._id;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Hospital.prototype, "location", {
    get: function get() {
      return this._location;
    },
    set: function set(l) {
      this._location = l;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Hospital.prototype, "name", {
    get: function get() {
      return this._name;
    },
    set: function set(n) {
      this._name = n;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Hospital.prototype, "email", {
    get: function get() {
      return this._email;
    },
    set: function set(web) {
      this._email = web;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Hospital.prototype, "country", {
    get: function get() {
      return this._country;
    },
    enumerable: false,
    configurable: true
  });

  Hospital.prototype.toString = function () {
    return JSON.stringify(this);
  };

  return Hospital;
}();

exports.default = Hospital;