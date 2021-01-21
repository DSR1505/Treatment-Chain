"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var hash_class_1 = require("./hash.class");

var hash_enum_1 = require("./hash.enum");

var DigitalSignature =
/** @class */
function () {
  function DigitalSignature(crypto, k) {
    this.HASH_SIGN_ALGORITHM = 'RSA-SHA256';
    this.ENCODING = 'hex';
    this.cryptoModule = crypto;
    var hash = new hash_class_1.default(this.cryptoModule, hash_enum_1.HASH_ALGORITHM.SHA384);
    this.passphrase = k;
  }

  DigitalSignature.prototype.getSignature = function (message, signer) {
    var signObject = this.cryptoModule.createSign(this.HASH_SIGN_ALGORITHM);
    signObject.update(message);
    signObject.end();
    var signature = signObject.sign({
      key: signer,
      passphrase: this.passphrase
    }, this.ENCODING);
    return signature;
  };

  DigitalSignature.prototype.verifySignature = function (message, address, signature) {
    var verifier = this.cryptoModule.createVerify(this.HASH_SIGN_ALGORITHM);
    verifier.update(message);
    verifier.end();
    return verifier.verify(address, signature, this.ENCODING);
  };

  return DigitalSignature;
}();

exports.default = DigitalSignature;