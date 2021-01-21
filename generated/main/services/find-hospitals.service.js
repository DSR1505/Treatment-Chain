"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var config_class_1 = require("../config/config.class");

var resource_enum_1 = require("../config/resource.enum");

var https = require("https");

var HospitalService =
/** @class */
function () {
  function HospitalService(country) {
    var config = new config_class_1.default(resource_enum_1.RESOURCES.SYSTEM_CONFIG);
    this.serviceUrl = config.getValue("HOSPITAL_ENDPOINT") + config.getValue("COUNTRIES")[country];
  }

  HospitalService.prototype.findHospital = function (id) {
    return new Promise(function (resolve, reject) {
      var options = {
        hostname: "treatmentchain-8a14.restdb.io",
        path: "/rest/hospital-india?q={\"identification_number\":\"" + id + "\"}",
        headers: {
          'x-apikey': 'cf0ccee45de3036fdb005d2048b8ea4b21203'
        }
      };
      var request = https.request(options, function (res) {
        var temp = '';
        res.on('data', function (chunk) {
          temp += chunk;
        });
        res.on('end', function () {
          resolve(temp);
        });
      });
      request.on('error', function (err) {
        reject(err);
      });
      request.end();
    });
  };

  return HospitalService;
}();

exports.default = HospitalService;