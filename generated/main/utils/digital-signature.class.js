"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var hash_enum_1 = require("./hash.enum");

var DigitalSignature =
/** @class */
function () {
  function DigitalSignature(crypto) {
    this.cryptoModule = crypto;
  }

  DigitalSignature.prototype.updateSignature = function (message, signer) {
    var signObject = this.cryptoModule.createSign(hash_enum_1.HASH_ALGORITHM.SHA384);
    signObject.update(message);
    signObject.end();
    this.signature = signObject.sign(signer);
  };

  DigitalSignature.prototype.getSignature = function () {
    return this.signature;
  };

  DigitalSignature.prototype.verifySignature = function (message, address) {
    var verifier = this.cryptoModule.createVerify(hash_enum_1.HASH_ALGORITHM.SHA384);
    verifier.update(message);
    verifier.end();
    return verifier.verify(address, this.getSignature());
  };

  return DigitalSignature;
}();

exports.default = DigitalSignature;