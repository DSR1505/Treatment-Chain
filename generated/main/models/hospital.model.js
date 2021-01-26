"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * The Hospital Model Class
 */

var Hospital =
/** @class */
function () {
  /**
   *
   * @param id the id of the hospital
   * @param country the name of the country
   */
  function Hospital(id, country) {
    this._country = country;
    this._id = id;
  }

  Object.defineProperty(Hospital.prototype, "id", {
    /**
     * Getter function for ID.
     */
    get: function get() {
      return this._id;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Hospital.prototype, "location", {
    /**
     * Getting the location.
     * @returns GeographicLocation location
     */
    get: function get() {
      return this._location;
    },

    /**
     * Setter function for location
     * @param l location object (Longitude and Latitude)
     */
    set: function set(l) {
      this._location = l;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Hospital.prototype, "name", {
    /**
     * getter function for name
     * @returns name of the hospital
     */
    get: function get() {
      return this._name;
    },

    /**
     * Setter function for name
     * @param n name of the hospital
     */
    set: function set(n) {
      this._name = n;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Hospital.prototype, "email", {
    /**
     * getter function for email
     * @returns email as string
     */
    get: function get() {
      return this._email;
    },

    /**
     * Setter function for email
     * @param web  email
     */
    set: function set(web) {
      this._email = web;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Hospital.prototype, "country", {
    /**
     * getter function for country
     * @returns country name
     */
    get: function get() {
      return this._country;
    },
    enumerable: false,
    configurable: true
  }); // basically overwritten toString() function to stringyfy JSON

  Hospital.prototype.toString = function () {
    return JSON.stringify(this);
  };

  return Hospital;
}();

exports.default = Hospital;