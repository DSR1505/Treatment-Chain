"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var c = require("crypto");

function checkCryptoModuleSupport() {
  try {
    var crypto_1 = c;
    return crypto_1;
  } catch (err) {
    // safe using --strictNullChecks now
    return undefined;
  }
}

exports.default = checkCryptoModuleSupport;