"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var OneWayHash =
/** @class */
function () {
  function OneWayHash(crypto, algo) {
    this.INPUT_ENCODING = 'hex';
    this.cryptoModule = crypto;
    this.hashObject = this.cryptoModule.createHash(algo);
  }

  Object.defineProperty(OneWayHash.prototype, "cryptoModule", {
    get: function get() {
      return this._cryptoModule;
    },
    set: function set(c) {
      this._cryptoModule = c;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(OneWayHash.prototype, "hashObject", {
    get: function get() {
      return this._hashObject;
    },
    set: function set(hash) {
      this._hashObject = hash;
    },
    enumerable: false,
    configurable: true
  });

  OneWayHash.prototype.getMessageDigest = function (message) {
    this.hashObject.update(message);
    return this.hashObject.digest(this.INPUT_ENCODING);
  };

  return OneWayHash;
}();

exports.default = OneWayHash;