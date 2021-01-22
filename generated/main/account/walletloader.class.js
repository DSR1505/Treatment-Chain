"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var filesytem = require("fs");

var config_class_1 = require("../config/config.class");

var resource_enum_1 = require("../config/resource.enum");
/**
 * The WalletLoader Class
 */


var WalletLoader =
/** @class */
function () {
  function WalletLoader() {}
  /**
   * loads the wallet from the file system.
   * @param crypto the crypto module.
   */


  WalletLoader.loadWallet = function (crypto) {
    // configuration changes according the platform (Linux, Windows)
    var config = new config_class_1.default(resource_enum_1.RESOURCES.SYSTEM_CONFIG);
    var temp;
    var path;
    var keyPair; // the private and public key

    if (process.platform === 'linux') {
      // if the OS is Linux then path is basically in the home directory
      // refer to wallet.class.ts
      path = config['PLATFORM_LINUX'];
    } else if (process.platform === 'win32') {
      // if the OS is Windows then path is basically in the home directory
      // refer to wallet.class.ts
      path = config['PLATFORM_WIN32'];
    } // PS: This is the private key
    // refer the wallet.class.ts line 48 and 51


    if (filesytem.existsSync(path + config['WALLET_SIGN'])) {
      temp = filesytem.readFileSync(path + config['WALLET_SIGN'], {
        encoding: 'hex'
      });
      keyPair.privateKey = crypto.createPrivateKey(temp);
    } else {
      throw new Error('Unable to find signer!');
    } // PS: This is the public key
    // refer the wallet.class.ts line 48 and 51


    if (filesytem.existsSync(path + config['WALLET_ADDR'])) {
      temp = filesytem.readFileSync(path + config['WALLET_SIGN'], {
        encoding: 'hex'
      });
      keyPair.publicKey = crypto.createPublicKey(temp);
    } else {
      throw new Error('Unable to find address!');
    }

    return keyPair; // returning the keypairs
  }; // Still unclear about the signer path, please confirm once.


  WalletLoader.getAddress = function (crypto, signerPath) {
    var signer = filesytem.readFileSync(signerPath, {
      encoding: 'hex'
    });
    console.log(signer);
    var publicKey = crypto.createPublicKey(signer);
    return publicKey.toString(); // returns the public key converted to String.
  };

  return WalletLoader;
}();

exports.default = WalletLoader;