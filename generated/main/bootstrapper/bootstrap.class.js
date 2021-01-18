"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var readlineSync = require("readline-sync");

var wallet_class_1 = require("../account/wallet.class");

var walletloader_class_1 = require("../account/walletloader.class");

var config_class_1 = require("../config/config.class");

var resource_enum_1 = require("../config/resource.enum");

var hospital_controller_1 = require("../controllers/hospital.controller");

var hospital_model_1 = require("../models/hospital.model");

var cryptoloader_function_1 = require("../utils/cryptoloader.function");

var Main =
/** @class */
function () {
  function Main() {}

  Main.main = function () {
    var config = new config_class_1.default(resource_enum_1.RESOURCES.SYSTEM_CONFIG);
    var privateKey;
    var passphrase;
    console.log("Welcome to Treatment Chain - Thick Client");
    console.log("Enter your Choice (1 to 2) to become part of system:");
    var choice = parseInt(readlineSync.question("1.Already Registered\n2.Register in  Network\nEnter Choice:"), 10);

    if (choice === 1) {
      console.log('Searching your wallet in the system');

      try {
        var wallet = walletloader_class_1.default.loadWallet(Main.cryptoModule);
        console.log("*** WALLET FOUND ***");
        console.log("Your Signer:\n", wallet.privateKey.toString());
        console.log("Your Address:\n", wallet.publicKey.toString()); // contact any peer 
        // peer found
        // sending address
        // verifying address
        // address verified
        // updating peers list
        // downloading blocks
        // updating progress
        // Records are up to date.
        // show rest features.
      } catch (e) {
        console.log('Wallet not found!\nTry to enter the keys manually\n');
      }

      var signerPath = readlineSync.question('Enter Signer Path:');
      var passphrase_1 = readlineSync.question('Enter password:', {
        hideEchoBack: true
      });
      var address = walletloader_class_1.default.getAddress(Main.cryptoModule, signerPath);
      console.log('Your public key is ', address); // contact any peer 
      // peer found
      // sending address
      // verifying address
      // address verified
      // updating peers list
      // downloading blocks
      // updating progress
      // Records are up to date.
      // show rest features
    } else if (choice === 2) {
      // Register into the network freshly
      this.register();
    }
  };

  Main.register = function () {
    var _this = this;

    var id = readlineSync.question("Enter the id of the hospital:");
    var country = readlineSync.question("Enter the native country of hospital(IN UPPERCASE):");
    var passphrase = readlineSync.question("Enter the passphrase:", {
      'hideEchoBack': true
    });
    var hospital = new hospital_model_1.default(id, country);
    var hospitalController = new hospital_controller_1.default(hospital);
    hospitalController.registerHospital().then(function (result) {
      console.log(result);
      var wallet = new wallet_class_1.default(_this.cryptoModule, passphrase);
      var keys = wallet.getKeyPair();
      console.log('*** WALLET GENERATED ***');
      console.log(keys.privateKey);
      console.log(keys.publicKey);
      console.log('*** END ***');
      console.log('Storing wallet to local disc.');
      wallet.storeWallet();
      console.log('Wallet Stored!');
      console.log("Congratulations! " + result.name + " is registered!");
    }).catch(function (err) {
      console.error(err);
    });
  };

  Main.cryptoModule = cryptoloader_function_1.default() || require('crypto');
  return Main;
}();

exports.default = Main;
Main.main();