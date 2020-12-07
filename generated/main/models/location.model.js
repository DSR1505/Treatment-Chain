"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var GeographicLocation =
/** @class */
function () {
  function GeographicLocation(la, lo) {
    this.la = la;
    this.lo = lo;
    this.latitude = la;
    this.longitude = lo;
  }

  Object.defineProperty(GeographicLocation.prototype, "latitude", {
    get: function get() {
      return this._latitude;
    },
    set: function set(l) {
      this._latitude = l;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(GeographicLocation.prototype, "longitude", {
    get: function get() {
      return this._longitude;
    },
    set: function set(l) {
      this._longitude = l;
    },
    enumerable: false,
    configurable: true
  });
  return GeographicLocation;
}();

exports.default = GeographicLocation;