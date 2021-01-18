"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var hash_enum_1 = require("./hash.enum");

var hash_class_1 = require("./hash.class");

var SymmetricKeyGenerator =
/** @class */
function () {
  function SymmetricKeyGenerator(cryptoObject, key) {
    this.SALT = 'trea1ment_chain';
    this.KEY_LENGTH = 64;
    this.ENCODING = 'hex';
    this.crypto = cryptoObject;
    this.hash = new hash_class_1.default(cryptoObject, hash_enum_1.HASH_ALGORITHM.SHA384).getMessageDigest(key);
  }

  SymmetricKeyGenerator.prototype.getSymmetricKey = function () {
    var symmetricKey = this.crypto.scryptSync(this.hash, this.SALT, this.KEY_LENGTH);
    return symmetricKey.toString(this.ENCODING);
  };

  return SymmetricKeyGenerator;
}();

exports.default = SymmetricKeyGenerator;