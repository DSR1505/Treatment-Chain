"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var filesytem = require("fs");

var config_class_1 = require("../config/config.class");

var resource_enum_1 = require("../config/resource.enum");

var cryptoloader_function_1 = require("../utils/cryptoloader.function");
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


  WalletLoader.loadWallet = function () {
    // configuration changes according the platform (Linux, Windows)
    var config = new config_class_1.default(resource_enum_1.RESOURCES.SYSTEM_CONFIG);
    var path = undefined; // Location of wallet(directory)

    var wallet = {
      privateKey: null,
      publicKey: null
    }; // Keypairs stored in wallet.
    // Identification of the platform. Updating path accordingly.

    if (process.platform == 'linux') {
      path = config.getValue('PLATFORM_LINUX');
    } else if (process.platform == 'win32') {
      path = config.getValue('PLATFORM_WIN32');
    } // Path for the key pair concentanated with filename


    var absoluteWalletAddrPath = path + config.getValue('WALLET_ADDR');
    var absoluteWalletSignPath = path + config.getValue('WALLET_SIGN'); // If key-pair exist return the wallet

    if (filesytem.existsSync(absoluteWalletAddrPath) && filesytem.existsSync(absoluteWalletSignPath)) {
      var addr = filesytem.readFileSync(absoluteWalletAddrPath, {
        encoding: 'hex'
      });
      wallet.publicKey = addr;
      var sign_1 = filesytem.readFileSync(absoluteWalletSignPath, {
        encoding: 'hex'
      });
      wallet.privateKey = sign_1;
      return wallet;
    }

    throw new Error('Unable to find the wallet. Either one or both keys are missing!');
  }; // Still unclear about the signer path, please confirm once.


  WalletLoader.getAddress = function (signerPath) {
    var signer = filesytem.readFileSync(signerPath, {
      encoding: 'hex'
    });
    return signer; // returns the public key converted to String.
  };

  WalletLoader.cryptoModule = cryptoloader_function_1.default();
  return WalletLoader;
}();

exports.default = WalletLoader;