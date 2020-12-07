"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PUBKEYCRYPT_ALGORITHM = void 0;
var PUBKEYCRYPT_ALGORITHM;

(function (PUBKEYCRYPT_ALGORITHM) {
  PUBKEYCRYPT_ALGORITHM["RSA"] = "rsa";
  PUBKEYCRYPT_ALGORITHM["RSA_PSS"] = "rsa-pss";
  PUBKEYCRYPT_ALGORITHM["DSA"] = "dsa";
  PUBKEYCRYPT_ALGORITHM["EC"] = "ec";
  PUBKEYCRYPT_ALGORITHM["X25519"] = "x25519";
  PUBKEYCRYPT_ALGORITHM["X448"] = "x448";
  PUBKEYCRYPT_ALGORITHM["ED25519"] = "ed25519";
  PUBKEYCRYPT_ALGORITHM["ED448"] = "ed448";
  PUBKEYCRYPT_ALGORITHM["DH"] = "dh";
})(PUBKEYCRYPT_ALGORITHM = exports.PUBKEYCRYPT_ALGORITHM || (exports.PUBKEYCRYPT_ALGORITHM = {}));