"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tester = require("assert");

var hash_class_1 = require("../../main/utils/hash.class");

var cryptoloader_function_1 = require("../../main/utils/cryptoloader.function");

var hash_enum_1 = require("../../main/utils/hash.enum");

var OneWayHashTest =
/** @class */
function () {
  function OneWayHashTest() {}

  OneWayHashTest.testModule = function () {
    var cryptoModule;

    if ((cryptoModule = cryptoloader_function_1.default()) != undefined) {
      var moduleSha384 = new hash_class_1.default(cryptoModule, hash_enum_1.HASH_ALGORITHM.SHA256);
      var plainText = "Hello, World!";
      var cipherTextSha384 = "d195483c9b554356ba50a855a605aaee134612dcfdd05988fc605181d93603f215a0d07812a0b333fc2ccc75025736f5";
      tester.strictEqual(cipherTextSha384, moduleSha384.getMessageDigest(plainText), "Result Unsuccessful Digest didn't match!");
    }
  };

  return OneWayHashTest;
}();

exports.default = OneWayHashTest;