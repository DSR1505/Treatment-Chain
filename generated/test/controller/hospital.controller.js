"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var hospital_controller_1 = require("../../main/controllers/hospital.controller");

var hospital_model_1 = require("../../main/models/hospital.model");

var HospitalControllerTest =
/** @class */
function () {
  function HospitalControllerTest() {}

  HospitalControllerTest.testModule = function () {
    var model = new hospital_model_1.default('abc123', 'INDIA');
    var controller = new hospital_controller_1.default(model);
    controller.registerHospital().then(function (result) {
      console.log(result);
    }).catch(function (err) {
      console.error(err);
    });
  };

  return HospitalControllerTest;
}();

exports.default = HospitalControllerTest;