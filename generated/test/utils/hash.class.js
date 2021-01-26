"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cryptoModule = require('crypto');

var tester = require("assert");

var hash_class_1 = require("../../main/utils/hash.class");

var hash_enum_1 = require("../../main/utils/hash.enum");

var OneWayHashTest =
/** @class */
function () {
  function OneWayHashTest() {}

  OneWayHashTest.testModule = function () {
    var moduleSha384 = new hash_class_1.default(cryptoModule, hash_enum_1.HASH_ALGORITHM.SHA384);
    var plainText = "Hello, World!"; // console.log(moduleSha384.getMessageDigest(plainText));

    var cipherTextSha384 = "5485cc9b3365b4305dfb4e8337e0a598a574f8242bf17289e0dd6c20a3cd44a089de16ab4ab308f63e44b1170eb5f515";
    tester.strictEqual(cipherTextSha384, moduleSha384.getMessageDigest(plainText), "Result Unsuccessful Digest didn't match!");
  };

  return OneWayHashTest;
}();

exports.default = OneWayHashTest;