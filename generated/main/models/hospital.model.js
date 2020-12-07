"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Hospital =
/** @class */
function () {
  function Hospital(nm, cntry, i) {
    this.name = nm;
    this.country = cntry;
    this._id = i;
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
  Object.defineProperty(Hospital.prototype, "website", {
    get: function get() {
      return this._website;
    },
    set: function set(web) {
      this._website = web;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Hospital.prototype, "country", {
    get: function get() {
      return this._country;
    },
    set: function set(ctry) {
      this._country = ctry;
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