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
  /**
   * The constructor
   * @param country the country name
   */
  function HospitalService(country) {
    var config = new config_class_1.default(resource_enum_1.RESOURCES.SYSTEM_CONFIG);
    this.serviceUrl = config.getValue("HOSPITAL_ENDPOINT") + config.getValue("COUNTRIES")[country];
  }
  /**
   * Finding Hospital by id in the network
   * @param id id of the hospital
   */


  HospitalService.prototype.findHospital = function (id) {
    return new Promise(function (resolve, reject) {
      // setting header and other options along with the requests
      var options = {
        hostname: "treatmentchain-8a14.restdb.io",
        path: "/rest/hospital-india?q={\"identification_number\":\"" + id + "\"}",
        headers: {
          'x-apikey': 'cf0ccee45de3036fdb005d2048b8ea4b21203'
        }
      }; // sending request to the given path to validate the hospital id

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