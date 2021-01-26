"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * The GeographicLocation Model Class
 */

var GeographicLocation =
/** @class */
function () {
  /**
   * The constructor
   * @param latitude the latitude of the hospital
   * @param longitude the longitude of the hospital
   */
  function GeographicLocation(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  return GeographicLocation;
}();

exports.default = GeographicLocation;