"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var hash_enum_1 = require("./hash.enum");

var hash_class_1 = require("./hash.class");
/**
 * SymmetricKeyGenerator Class.
 */


var SymmetricKeyGenerator =
/** @class */
function () {
  /**
   * Constructor
   * @param cryptoObject the object specifies the crypto.
   * @param key the key.
   */
  function SymmetricKeyGenerator(cryptoObject, key) {
    // created a salt for hashing of type string
    this.SALT = 'trea1ment_chain'; // key length is to be 64

    this.KEY_LENGTH = 64; // hexadecimal encoding

    this.ENCODING = 'hex';
    this.crypto = cryptoObject;
    this.hash = new hash_class_1.default(cryptoObject, hash_enum_1.HASH_ALGORITHM.SHA384).getMessageDigest(key);
  }
  /**
   * Get the generated symmetric key.
   */


  SymmetricKeyGenerator.prototype.getSymmetricKey = function () {
    var symmetricKey = this.crypto.scryptSync(this.hash, this.SALT, this.KEY_LENGTH);
    return symmetricKey.toString(this.ENCODING);
  };

  return SymmetricKeyGenerator;
}();

exports.default = SymmetricKeyGenerator;