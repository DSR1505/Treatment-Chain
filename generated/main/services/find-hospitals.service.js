"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var config_class_1 = require("../config/config.class");

var resource_enum_1 = require("../config/resource.enum");

var HospitalService =
/** @class */
function () {
  function HospitalService(country) {
    var config = new config_class_1.default(resource_enum_1.RESOURCES.SYSTEM_CONFIG);
    this.serviceUrl = config.getValue(country);
  }

  HospitalService.prototype.findHospital = function (hospital) {// TODO: write logic to extract found hospital data using HTTPS request
  };

  return HospitalService;
}();

exports.default = HospitalService;