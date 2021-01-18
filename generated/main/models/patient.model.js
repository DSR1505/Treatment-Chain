"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var person_model_1 = require("./person.model");

var Patient =
/** @class */
function (_super) {
  __extends(Patient, _super);

  function Patient(id, country, disease) {
    var _this = _super.call(this, id, country) || this;

    _this.id = id;
    _this.country = country;
    _this._disease = disease;
    return _this;
  }

  Object.defineProperty(Patient.prototype, "disease", {
    get: function get() {
      return this._disease;
    },
    enumerable: false,
    configurable: true
  });

  Patient.prototype.toString = function () {
    return JSON.stringify(this);
  };

  return Patient;
}(person_model_1.default);

exports.default = Patient;