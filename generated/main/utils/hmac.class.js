"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var HMAC =
/** @class */
function () {
  function HMAC(crypt, algo) {
    this.crypt = crypt;
    this.algo = algo;
    this.ENCODING = 'hex';
    this.cryptoModule = crypt;
    this.algorithm = algo;
  }

  HMAC.prototype.getMessageDigest = function (key, message) {
    var hmac = this.cryptoModule.createHmac(this.algorithm, key);
    hmac.update(message);
    return hmac.digest(this.ENCODING);
  };

  return HMAC;
}();

exports.default = HMAC;