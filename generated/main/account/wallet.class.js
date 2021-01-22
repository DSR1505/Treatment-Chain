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
/**
 * The ACTUAL WALLET CLASS
 */


var Wallet =
/** @class */
function () {
  /**
   * The Constructor
   * @param crypto basically the crypto module i.e. the thing that we write as import statement
   * @param passphrase the passphrase entered by the user.
   */
  function Wallet(crypto, passphrase) {
    this.crypto = crypto;
    this.keyPairGen = new pubkeycryptkeygen_class_1.default(crypto, pubkeycrypt_enum_1.PUBKEYCRYPT_ALGORITHM.RSA, passphrase);
  }
  /**
   * getKeyPair is reponsible to retrieve the private and public key
   * return type is of type IKeypair | again refer keypair.interface.ts in utils
   */


  Wallet.prototype.getKeyPair = function () {
    this.keyPair = this.keyPairGen.getKeyPair();
    return this.keyPair;
  };
  /**
   * Storing wallet on the user's system
   */


  Wallet.prototype.storeWallet = function () {
    // this configuration specifically changes for the type of OS (Windows, Linux)
    var config = new config_class_1.default(resource_enum_1.RESOURCES.SYSTEM_CONFIG); // converting the public key to string

    var addr = this.keyPair.publicKey.toString(); // converting the private key to string

    var sign = this.keyPair.privateKey.toString();
    var path, temp;

    if (process.platform === 'linux') {
      // checking for the platform
      // if the OS is Linux then wallet path is in home directory
      path = '/home/' + os.userInfo()['username'] + config.getValue('PLATFORM_LINUX');
    } else if (process.platform === 'win32') {
      // this is for windows.
      // path is not clear
      path = config.getValue('PLATFORM_WIN32');
    }

    if (!filesytem.existsSync(path)) {
      // if no path exists then create a new path.
      filesytem.mkdirSync(path, {
        recursive: true
      });
    } // Finally Writing the wallet to the system.
    // path depends on the type of OS used.


    try {
      temp = filesytem.writeFileSync(path + config.getValue('WALLET_SIGN'), sign, {
        flag: 'wx'
      });
      temp = filesytem.writeFileSync(path + config.getValue('WALLET_ADDR'), addr, {
        flag: 'wx'
      });
    } catch (e) {
      throw e;
    }
  };

  return Wallet;
}();

exports.default = Wallet;