"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var pubkeycrypt_enum_1 = require("./pubkeycrypt.enum");

var hash_enum_1 = require("./hash.enum");

var hash_class_1 = require("./hash.class");

var AsymmetricKeysGenerator =
/** @class */
function () {
  function AsymmetricKeysGenerator(crytpo, algo, k) {
    this._crytoModule = crytpo;
    this.algorithm = algo;
    var hash = new hash_class_1.default(this.cryptoModule, hash_enum_1.HASH_ALGORITHM.SHA384);
    this.key = hash.getMessageDigest(k);
  }

  Object.defineProperty(AsymmetricKeysGenerator.prototype, "algorithm", {
    get: function get() {
      return this._algorithm;
    },
    set: function set(algo) {
      this._algorithm = algo;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AsymmetricKeysGenerator.prototype, "cryptoModule", {
    get: function get() {
      return this._crytoModule;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AsymmetricKeysGenerator.prototype, "key", {
    get: function get() {
      return this._key;
    },
    set: function set(k) {
      this._key = k;
    },
    enumerable: false,
    configurable: true
  });

  AsymmetricKeysGenerator.prototype.getKeyPair = function () {
    var publicKey = this.cryptoModule.createPublicKey(this.key);
    var privateKey = this.cryptoModule.createPrivateKey(this.key);

    if (publicKey.type !== 'public' || privateKey.type !== 'private') {
      throw new Error('Keypair haven\'t generated Successfully!');
    }

    var keyPair;
    var pubk, prk;

    if (this.algorithm === pubkeycrypt_enum_1.PUBKEYCRYPT_ALGORITHM.RSA || this.algorithm === pubkeycrypt_enum_1.PUBKEYCRYPT_ALGORITHM.RSA_PSS) {
      pubk = publicKey.export({
        format: "pem",
        type: 'pkcs1'
      });
      prk = privateKey.export({
        format: 'pem',
        type: 'pkcs1',
        cipher: this.key
      });
    } else {
      pubk = publicKey.export({
        format: 'pem',
        type: 'spki'
      });
      prk = privateKey.export({
        format: 'pem',
        type: 'pkcs8',
        cipher: this.key
      });
    }

    keyPair.set(prk, pubk);
    return keyPair;
  };

  return AsymmetricKeysGenerator;
}();

exports.default = AsymmetricKeysGenerator;