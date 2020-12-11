"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var config_class_1 = require("../config/config.class");

var resource_enum_1 = require("../config/resource.enum");

var https = require("https");

var location_model_1 = require("../models/location.model");

var HospitalService =
/** @class */
function () {
  function HospitalService(country) {
    var config = new config_class_1.default(resource_enum_1.RESOURCES.SYSTEM_CONFIG);
    this.serviceUrl = config.getValue("HOSPITAL_ENDPOINT") + config.getValue("COUNTRIES")[country];
  }

  HospitalService.prototype.findHospital = function (hospital) {
    return new Promise(function (resolve, reject) {
      var options = {
        hostname: "treatmentchain-8a14.restdb.io",
        path: "/rest/hospital-india?identification_number=" + hospital.id,
        headers: {
          'x-apikey': 'cf0ccee45de3036fdb005d2048b8ea4b21203',
          'cache-control': 'no-cache',
          'content-type': 'application/json'
        },
        method: 'GET'
      };
      var request = https.request(options, function (res) {
        console.log(res.statusCode);
        var found;
        res.on('data', function (chunk) {
          found = chunk.toString();
        });
        res.on('error', function (err) {
          reject(err);
        });
        res.on('close', function () {
          hospital.location = new location_model_1.default(found['latitude'], found['longitude']);
          hospital.email = found['email'];
          resolve(hospital);
        });
      });
    });
  };

  return HospitalService;
}();

exports.default = HospitalService;