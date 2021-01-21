"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var filesytem = require("fs");

var config_class_1 = require("../config/config.class");

var resource_enum_1 = require("../config/resource.enum");

var WalletLoader =
/** @class */
function () {
  function WalletLoader() {}
  // loadWallet function to retrieve existing wallet from the user's system. Probably Redis once again.
  WalletLoader.loadWallet = function (crypto) {
    var config = new config_class_1.default(resource_enum_1.RESOURCES.SYSTEM_CONFIG);
    var temp;
    var path;
    var keyPair;

    if (process.platform === 'linux') {
      path = config['PLATFORM_LINUX'];
    } else if (process.platform === 'win32') {
      path = config['PLATFORM_WIN32'];
    }

    if (filesytem.existsSync(path + config['WALLET_SIGN'])) {
      temp = filesytem.readFileSync(path + config['WALLET_SIGN'], {
        encoding: 'hex'
      });
      keyPair.privateKey = crypto.createPrivateKey(temp);
    } else {
      throw new Error('Unable to find signer!');
    }

    if (filesytem.existsSync(path + config['WALLET_ADDR'])) {
      temp = filesytem.readFileSync(path + config['WALLET_SIGN'], {
        encoding: 'hex'
      });
      keyPair.publicKey = crypto.createPublicKey(temp);
    } else {
      throw new Error('Unable to find address!');
    }

    return keyPair;
  };

  WalletLoader.getAddress = function (crypto, signerPath) {
    var signer = filesytem.readFileSync(signerPath, {
      encoding: 'hex'
    });
    console.log(signer);
    var publicKey = crypto.createPublicKey(signer);
    return publicKey.toString();
  };

  return WalletLoader;
}();

exports.default = WalletLoader;