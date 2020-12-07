"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cryptoloader_function_1 = require("./utils/cryptoloader.function");

var hash_class_1 = require("./utils/hash.class");

var TestSuite =
/** @class */
function () {
  function TestSuite() {}

  TestSuite.runner = function () {
    cryptoloader_function_1.default();
    hash_class_1.default.testModule();
  };

  return TestSuite;
}();

exports.default = TestSuite;
TestSuite.runner();