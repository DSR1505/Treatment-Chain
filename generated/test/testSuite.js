"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var wallet_class_1 = require("./account/wallet.class");

var hospital_controller_1 = require("./controller/hospital.controller");

var find_hospitals_service_1 = require("./services/find-hospitals.service");

var cryptoloader_function_1 = require("./utils/cryptoloader.function");

var digital_signature_class_1 = require("./utils/digital-signature.class");

var hash_class_1 = require("./utils/hash.class");

var hmac_class_1 = require("./utils/hmac.class");

var pubkeycryptkeygen_class_1 = require("./utils/pubkeycryptkeygen.class");

var symkeycryptkeygen_class_1 = require("./utils/symkeycryptkeygen.class");

var TestSuite =
/** @class */
function () {
  function TestSuite() {}

  TestSuite.runner = function () {
    cryptoloader_function_1.default();
    hash_class_1.default.testModule();
    symkeycryptkeygen_class_1.default.testModule();
    pubkeycryptkeygen_class_1.default.testModule();
    hmac_class_1.default.testModule();
    digital_signature_class_1.default.testModule();
    wallet_class_1.default.testModule();
    find_hospitals_service_1.default.testModule();
    hospital_controller_1.default.testModule();
  };

  return TestSuite;
}();

exports.default = TestSuite;
TestSuite.runner();