"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Person =
/** @class */
function () {
  function Person(id, country) {
    this.id = id;
    this.country = country;
    this.details.set('id', id);
    this.details.set('country', country);
  }

  Person.prototype.updateDetail = function (key, value) {
    this.details.set(key, value);
  };

  Person.prototype.isEmpty = function () {
    return this.details.size === 0;
  };

  return Person;
}();

exports.default = Person;