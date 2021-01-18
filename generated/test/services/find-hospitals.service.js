"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var hospital_model_1 = require("../../main/models/hospital.model");

var find_hospitals_service_1 = require("../../main/services/find-hospitals.service");

var HospitalServiceTest =
/** @class */
function () {
  function HospitalServiceTest() {}

  HospitalServiceTest.testModule = function () {
    var hospital = new hospital_model_1.default('abc123', 'INDIA');
    var module = new find_hospitals_service_1.default(hospital.country);
    module.findHospital(hospital.id).then(function (result) {
      console.log(JSON.parse(result));
    });
  };

  return HospitalServiceTest;
}();

exports.default = HospitalServiceTest;