"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var symkeycryptkeygen_class_1 = require("../../main/utils/symkeycryptkeygen.class");

var cryptoModule = require("crypto");

var SymmetricKeyGeneratorTest =
/** @class */
function () {
  function SymmetricKeyGeneratorTest() {}

  SymmetricKeyGeneratorTest.testModule = function () {
    var module = new symkeycryptkeygen_class_1.default(cryptoModule, "hello");
    console.log("Symmetric Key:", module.getSymmetricKey());
  };

  return SymmetricKeyGeneratorTest;
}();

exports.default = SymmetricKeyGeneratorTest;