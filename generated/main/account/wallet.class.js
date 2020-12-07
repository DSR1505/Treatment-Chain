"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var config_class_1 = require("../config/config.class");

var resource_enum_1 = require("../config/resource.enum");

var shared_preferences_1 = require("../config/shared.preferences");

var pubkeycrypt_enum_1 = require("../utils/pubkeycrypt.enum");

var pubkeycryptkeygen_class_1 = require("../utils/pubkeycryptkeygen.class");

var Wallet =
/** @class */
function () {
  function Wallet(crypto, passphrase) {
    this.crypto = crypto;
    this.passphrase = passphrase;
    this.keyPairGen = new pubkeycryptkeygen_class_1.default(crypto, pubkeycrypt_enum_1.PUBKEYCRYPT_ALGORITHM.EC, passphrase);
  }

  Wallet.prototype.getKeyPair = function () {
    this.keyPair = this.keyPairGen.getKeyPair();
    return this.keyPair;
  };

  Wallet.prototype.storeWallet = function () {
    var preferences = new shared_preferences_1.default();
    var config = new config_class_1.default(resource_enum_1.RESOURCES.SYSTEM_CONFIG);
    var addr = this.keyPair.values().next().value;
    var sign = this.keyPair.keys().next().value;
    preferences.setPreference(config['WALLET_ADDR'], addr);
    preferences.setPreference(config['WALLET_SIGN'], sign);
  };

  return Wallet;
}();

exports.default = Wallet;