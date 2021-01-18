"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var readlineSync = require("readline-sync");

var covid19disease_class_1 = require("../models/covid19disease.class");

var patient_model_1 = require("../models/patient.model");

var PatientView =
/** @class */
function () {
  function PatientView() {}

  PatientView.admitView = function () {
    var id = readlineSync.question('Enter the id of patient:');
    var country = readlineSync.question('Enter the country of the patient:');
    var disease = new covid19disease_class_1.default(new Array());
    var model = new patient_model_1.default(id, country, disease);
    return model;
  };

  return PatientView;
}();

exports.default = PatientView;