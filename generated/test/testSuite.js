"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var find_hospitals_service_1 = require("./services/find-hospitals.service");

var TestSuite =
/** @class */
function () {
  function TestSuite() {}

  TestSuite.runner = function () {
    // testCryptoModule();
    // OneWayHashTest.testModule();
    // SymmetricKeyGeneratorTest.testModule();
    // AsymmetricKeyGeneratorTest.testModule();
    // HMACTest.testModule();
    // DigitalSignatureTest.testModule();
    // WalletTest.testModule();
    find_hospitals_service_1.default.testModule();
  };

  return TestSuite;
}();

exports.default = TestSuite;
TestSuite.runner();