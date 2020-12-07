"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var hash_enum_1 = require("./hash.enum");

var hash_class_1 = require("./hash.class");

var SymmetricKeyGenerator =
/** @class */
function () {
  function SymmetricKeyGenerator(cryptoObject, k) {
    this.crypto = cryptoObject;
    var hash = new hash_class_1.default(this.crypto, hash_enum_1.HASH_ALGORITHM.SHA384);
    this.key = hash.getMessageDigest(k);
  }

  Object.defineProperty(SymmetricKeyGenerator.prototype, "key", {
    get: function get() {
      return this._key;
    },
    set: function set(k) {
      this._key = k;
    },
    enumerable: false,
    configurable: true
  });

  SymmetricKeyGenerator.prototype.getSymmetricKey = function () {
    return this.crypto.createSecret(this.key);
  };

  SymmetricKeyGenerator.ENCODING = 'hex';
  return SymmetricKeyGenerator;
}();

exports.default = SymmetricKeyGenerator;