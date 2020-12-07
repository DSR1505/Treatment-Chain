"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var wallet_class_1 = require("../account/wallet.class");

var find_hospitals_service_1 = require("../services/find-hospitals.service");

var HospitalController =
/** @class */
function () {
  function HospitalController(hospital) {
    this.hospital = hospital;
  }

  Object.defineProperty(HospitalController.prototype, "hospital", {
    get: function get() {
      return this._hospital;
    },
    set: function set(h) {
      this._hospital = h;
    },
    enumerable: false,
    configurable: true
  });

  HospitalController.prototype.registerHospital = function (crypto, password) {
    var _this = this;

    var hospitalService = new find_hospitals_service_1.default("India");
    this.hospital = hospitalService.findHospital(this.hospital);
    return new Promise(function (resolve, reject) {
      if (_this.hospital.location == undefined) {
        reject("Unable to locate hospital");
      }

      var wallet = new wallet_class_1.default(crypto, password);
      resolve(wallet);
    });
  };

  return HospitalController;
}();

exports.default = HospitalController;