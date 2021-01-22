"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var hash_enum_1 = require("../../main/utils/hash.enum");

var hmac_class_1 = require("../../main/utils/hmac.class");

var cryptoModule = require('crypto');

var tester = require('assert');

var HMACTest =
/** @class */
function () {
  function HMACTest() {}

  HMACTest.testModule = function () {
    var module = new hmac_class_1.default(cryptoModule, hash_enum_1.HASH_ALGORITHM.SHA256);
    var key = 'hello';
    var message = 'treatment chain';
    var actual = "5226cbe94adede3d0a56a0f175ca6015c11f87da2a1b30de65049e482c6d1499";
    var expected = module.getMessageDigest(key, message);
    console.log("hmac expected:", expected);
    console.log("hmac actual:", actual);

    try {
      tester.strictEqual(actual, expected, "HMAC Test Failed!");
    } catch (e) {
      console.log(e);
    }
  };

  return HMACTest;
}();

exports.default = HMACTest;