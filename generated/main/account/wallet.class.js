"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var config_class_1 = require("../config/config.class");

var resource_enum_1 = require("../config/resource.enum");

var pubkeycrypt_enum_1 = require("../utils/pubkeycrypt.enum");

var pubkeycryptkeygen_class_1 = require("../utils/pubkeycryptkeygen.class");

var filesytem = require("fs");

var os = require("os");

var Wallet =
/** @class */
function () {
  function Wallet(crypto, passphrase) {
    this.crypto = crypto;
    this.keyPairGen = new pubkeycryptkeygen_class_1.default(crypto, pubkeycrypt_enum_1.PUBKEYCRYPT_ALGORITHM.RSA, passphrase);
  }

  Wallet.prototype.getKeyPair = function () {
    this.keyPair = this.keyPairGen.getKeyPair();
    return this.keyPair;
  };

  Wallet.prototype.storeWallet = function () {
    var config = new config_class_1.default(resource_enum_1.RESOURCES.SYSTEM_CONFIG);
    var addr = this.keyPair.publicKey.toString();
    var sign = this.keyPair.privateKey.toString();
    var path, temp;

    if (process.platform === 'linux') {
      path = '/home/' + os.userInfo()['username'] + config.getValue('PLATFORM_LINUX');
    } else if (process.platform === 'win32') {
      path = config.getValue('PLATFORM_WIN32');
    }

    if (!filesytem.existsSync(path)) {
      filesytem.mkdirSync(path, {
        recursive: true
      });
    }

    try {
      temp = filesytem.writeFileSync(path + config.getValue('WALLET_SIGN'), sign, {
        flag: 'wx'
      });
      temp = filesytem.writeFileSync(path + config.getValue('WALLET_ADDR'), addr, {
        flag: 'wx'
      });
    } catch (e) {
      console.error(e);
    }
  };

  return Wallet;
}();

exports.default = Wallet;