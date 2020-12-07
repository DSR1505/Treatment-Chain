"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var fileSystem = require("fs");
/**
 * It will read files and return the value.
 */


var Configuration =
/** @class */
function () {
  function Configuration(resource) {
    this.ENCODING = 'utf8';
    this.config = this.loadConfigResource(resource);
  }

  Object.defineProperty(Configuration.prototype, "config", {
    get: function get() {
      return this._config;
    },
    set: function set(c) {
      this._config = c;
    },
    enumerable: false,
    configurable: true
  });

  Configuration.prototype.loadConfigResource = function (resource) {
    var temp = fileSystem.readFileSync(resource, {
      encoding: this.ENCODING
    });
    return JSON.parse(String(temp));
  };

  Configuration.prototype.commitResource = function (resource) {
    fileSystem.writeFileSync(resource, JSON.stringify(this.config));
  };

  Configuration.prototype.getValue = function (key) {
    return this.config[key];
  };

  Configuration.prototype.setValue = function (resource, key, value) {
    this.config[key] = value;
    this.commitResource(resource);
  };

  return Configuration;
}();

exports.default = Configuration;