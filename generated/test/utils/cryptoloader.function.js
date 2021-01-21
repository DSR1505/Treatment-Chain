"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tester = require('assert');

var crypto = require('crypto');

var cryptoloader_function_1 = require("../../main/utils/cryptoloader.function");

function testCryptoModule() {
  var test = cryptoloader_function_1.default();
  tester.strictEqual(typeof crypto, typeof test, "Crypto Module Support Passed!");
}

exports.default = testCryptoModule;