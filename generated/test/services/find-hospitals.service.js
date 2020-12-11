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
    var hospital = new hospital_model_1.default('NAME', 'INDIA', 'abc123');
    var module = new find_hospitals_service_1.default(hospital.country);
    module.findHospital(hospital).then(function (res) {
      console.log(res);
    }).catch(function (err) {
      console.error(err);
    });
  };

  return HospitalServiceTest;
}();

exports.default = HospitalServiceTest;