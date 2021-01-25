"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var walletloader_class_1 = require("./account/walletloader.class");

var cryptoloader_function_1 = require("./utils/cryptoloader.function");

var TestSuite =
/** @class */
function () {
  function TestSuite() {}

  TestSuite.runner = function () {
    cryptoloader_function_1.default(); // OneWayHashTest.testModule();
    // SymmetricKeyGeneratorTest.testModule();
    // AsymmetricKeyGeneratorTest.testModule();
    // HMACTest.testModule();
    // DigitalSignatureTest.testModule();
    // WalletTest.testModule();
    // HospitalServiceTest.testModule();
    // HospitalControllerTest.testModule();

    walletloader_class_1.default.testModule();
  };

  return TestSuite;
}();

exports.default = TestSuite;
TestSuite.runner();