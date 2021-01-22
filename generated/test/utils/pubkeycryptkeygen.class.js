"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var pubkeycrypt_enum_1 = require("../../main/utils/pubkeycrypt.enum");

var pubkeycryptkeygen_class_1 = require("../../main/utils/pubkeycryptkeygen.class");

var crytoModule = require('crypto');

var AsymmetricKeyGeneratorTest =
/** @class */
function () {
  function AsymmetricKeyGeneratorTest() {}

  AsymmetricKeyGeneratorTest.testModule = function () {
    var passphrase = 'hello';
    var moduleEC = new pubkeycryptkeygen_class_1.default(crytoModule, pubkeycrypt_enum_1.PUBKEYCRYPT_ALGORITHM.EC, passphrase);
    console.log("EC:", moduleEC.getKeyPair());
    var moduleRSA = new pubkeycryptkeygen_class_1.default(crytoModule, pubkeycrypt_enum_1.PUBKEYCRYPT_ALGORITHM.RSA, passphrase);
    console.log("RSA:", moduleRSA.getKeyPair());
    var moduleDSA = new pubkeycryptkeygen_class_1.default(crytoModule, pubkeycrypt_enum_1.PUBKEYCRYPT_ALGORITHM.DSA, passphrase);
    console.log("DSA:", moduleDSA);
    var moduleDH = new pubkeycryptkeygen_class_1.default(crytoModule, pubkeycrypt_enum_1.PUBKEYCRYPT_ALGORITHM.DH, passphrase);
    console.log("DH:", moduleDH);
  };

  return AsymmetricKeyGeneratorTest;
}();

exports.default = AsymmetricKeyGeneratorTest;