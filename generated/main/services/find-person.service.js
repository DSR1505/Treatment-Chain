"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var https = require("https");

var PersonService =
/** @class */
function () {
  function PersonService(id, country) {
    this.id = id;
    this.country = country;
    this.options = {
      hostname: "treatmentchain-8a14.restdb.io",
      path: "/rest/citizen-india?q={\"uid\":\"" + this.id + "\"}",
      headers: {
        'x-apikey': 'cf0ccee45de3036fdb005d2048b8ea4b21203'
      }
    };
  }

  PersonService.prototype.findPerson = function () {
    var _this = this;

    return new Promise(function (resolve, reject) {
      var request = https.get(_this.options, function (res) {
        var data = '';
        res.on('data', function (chunk) {
          data += chunk;
        });
        res.on('end', function () {
          resolve(data);
        });
      });
      request.on('error', function (err) {
        reject(err);
      });
    });
  };

  return PersonService;
}();

exports.default = PersonService;