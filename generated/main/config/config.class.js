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
  // constructor
  // we are loading the config file from the resource path mentioned /res/resource.enum.*
  function Configuration(resource) {
    // defining the encoding as utf-8.
    this.ENCODING = 'utf8';
    this.config = this.loadConfigResource(resource); // this function is defined in the below line.
  }

  Object.defineProperty(Configuration.prototype, "config", {
    // getter function for config
    get: function get() {
      return this._config;
    },
    // setter function for config
    set: function set(c) {
      this._config = c;
    },
    enumerable: false,
    configurable: true
  }); // the loadConfigResource function performs the task of reading the config file in the 
  // mentioned path.

  Configuration.prototype.loadConfigResource = function (resource) {
    var temp = fileSystem.readFileSync(resource, {
      encoding: this.ENCODING
    });
    return JSON.parse(String(temp));
  }; // commiting the resource usually means writing the config file


  Configuration.prototype.commitResource = function (resource) {
    fileSystem.writeFileSync(resource, JSON.stringify(this.config));
  }; // getter function for config key


  Configuration.prototype.getValue = function (key) {
    return this.config[key];
  }; // setter function for config key


  Configuration.prototype.setValue = function (resource, key, value) {
    this.config[key] = value; // after the config key value is set we need to write this value to the config file

    this.commitResource(resource);
  };

  return Configuration;
}();

exports.default = Configuration;