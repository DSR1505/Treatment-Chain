"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var pubkeycrypt_enum_1 = require("./pubkeycrypt.enum");

var AsymmetricKeysGenerator =
/** @class */
function () {
  /**
   * Constructor
   * @param crytpo the crypto module
   * @param algo the algorithm selected
   * @param k the key
   */
  function AsymmetricKeysGenerator(crytpo, algo, k) {
    this.format = 'pem';
    this._crytoModule = crytpo;
    this.algorithm = algo;
    this.key = k;
  }

  Object.defineProperty(AsymmetricKeysGenerator.prototype, "algorithm", {
    // getter  function for algorithms
    get: function get() {
      return this._algorithm;
    },
    // setter  function for algorithm
    set: function set(algo) {
      this._algorithm = algo;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AsymmetricKeysGenerator.prototype, "cryptoModule", {
    // getter function for crypto module
    get: function get() {
      return this._crytoModule;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(AsymmetricKeysGenerator.prototype, "key", {
    // getter function for key
    get: function get() {
      return this._key;
    },
    // setter function for key
    set: function set(k) {
      this._key = k;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Get the private and public key pairs.
   * Depending on the ALGORITHM selected from the enum a key pair is generated and returned.
   */

  AsymmetricKeysGenerator.prototype.getKeyPair = function () {
    var keyPair;

    if (this.algorithm == pubkeycrypt_enum_1.PUBKEYCRYPT_ALGORITHM.RSA) {
      keyPair = this.cryptoModule.generateKeyPairSync(this.algorithm, {
        modulusLength: 2048,
        publicKeyEncoding: {
          type: 'spki',
          format: this.format
        },
        privateKeyEncoding: {
          type: 'pkcs8',
          format: this.format,
          cipher: 'aes-256-cbc',
          passphrase: this.key
        }
      });
    } else if (this.algorithm == pubkeycrypt_enum_1.PUBKEYCRYPT_ALGORITHM.EC || this.algorithm == pubkeycrypt_enum_1.PUBKEYCRYPT_ALGORITHM.ED25519 || this.algorithm == pubkeycrypt_enum_1.PUBKEYCRYPT_ALGORITHM.ED448) {
      keyPair = this.cryptoModule.generateKeyPairSync(this.algorithm, {
        namedCurve: 'secp384r1',
        publicKeyEncoding: {
          type: 'spki',
          format: this.format
        },
        privateKeyEncoding: {
          type: 'sec1',
          format: this.format
        }
      });
    } else if (this.algorithm == pubkeycrypt_enum_1.PUBKEYCRYPT_ALGORITHM.DH) {
      keyPair = this.cryptoModule.generateKeyPairSync(this.algorithm, {
        prime: Buffer.alloc(64),
        primeLength: 64,
        generator: 79,
        groupName: 'modp17',
        publicKeyEncoding: {
          format: this.format
        },
        privateKeyEncoding: {
          format: this.format,
          passphrase: this.key
        }
      });
    } else if (this.algorithm == pubkeycrypt_enum_1.PUBKEYCRYPT_ALGORITHM.DSA) {
      keyPair = this.cryptoModule.generateKeyPairSync(this.algorithm, {
        modulusLength: 4096,
        divisorLength: 64,
        publicKeyEncoding: {
          format: this.format
        },
        privateKeyEncoding: {
          format: this.format,
          passphrase: this.key
        }
      });
    }

    return keyPair;
  };

  return AsymmetricKeysGenerator;
}();

exports.default = AsymmetricKeysGenerator;