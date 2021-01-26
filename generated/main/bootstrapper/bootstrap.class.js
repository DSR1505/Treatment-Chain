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
  function Main() {} // probably the main method


  Main.main = function () {
    var config = new config_class_1.default(resource_enum_1.RESOURCES.SYSTEM_CONFIG); // loading the configuration from the RESOURCES

    var privateKey; // PRIVATE KEY

    var passphrase; // PASSPHRASE

    console.log("Welcome to Treatment Chain - Thick Client");
    console.log("Enter your Choice (1 to 2) to become part of system:");
    var choice = parseInt(readlineSync.question("1.Already Registered\n2.Register in  Network\nEnter Choice:"), 10);

    if (choice === 1) {
      // The condition here is you are already registered and you already have a wallet in your OS.
      console.log('Searching your wallet in the system');

      try {
        var wallet = walletloader_class_1.default.loadWallet();
        console.log("*** WALLET FOUND ***");
        console.log("Your Signer:\n", wallet.privateKey);
        console.log("Your Address:\n", wallet.publicKey); // contact any peer 
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
        var signerPath = readlineSync.question('Enter Signer Path:');
        var passphrase_1 = readlineSync.question('Enter password:', {
          hideEchoBack: true
        });
        var address = walletloader_class_1.default.getAddress(signerPath);
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
      }
    } else if (choice === 2) {
      // Register into the network freshly
      this.register();
    }
  }; // The register method


  Main.register = function () {
    var _this = this; // getting the id of the hospital


    var id = readlineSync.question("Enter the id of the hospital:"); // getting the country of the hospital in UPPERCASE

    var country = readlineSync.question("Enter the native country of hospital(IN UPPERCASE):"); // getting the passphrase
    // passphrase here is basically used to access the wallet

    var passphrase = readlineSync.question("Enter the passphrase:", {
      'hideEchoBack': true
    }); // creating new hospital Object with given id and country

    var hospital = new hospital_model_1.default(id, country); // hospital controller checks whether the hospital exists with the given id or not

    var hospitalController = new hospital_controller_1.default(hospital);
    hospitalController.registerHospital().then(function (result) {
      console.log(result); // printing the result of hospital found or not
      // creating a new wallet for the hospital
      // passphrase is basically used to create and access the wallet

      var wallet = new wallet_class_1.default(_this.cryptoModule, passphrase); // getting the private and public key pairs for the wallet

      var keys = wallet.getKeyPair();
      console.log('*** WALLET GENERATED ***');
      console.log(keys.privateKey); // log private

      console.log(keys.publicKey); // log public

      console.log('*** END ***');
      console.log('Storing wallet to local disc.'); // storing the wallet to the local disk.

      try {
        wallet.storeWallet();
        console.log('Wallet Stored!');
        console.log("Congratulations! " + result.name + " is registered!");
      } catch (e) {
        // if there is an existing wallet in the system
        console.log('Wallet already exist!');
      }
    }).catch(function (err) {
      console.error(err);
    });
  };
  /**
   * allFeatures function
   * will display all the options to the users once wallet is created.
   */


  Main.prototype.allFeatures = function () {
    var choice;

    do {
      console.log('1.Register the Patient');
      console.log('2.Treat the patient');
      console.log('3.Discharge the patient.');
      console.log('4.Verify other Hospital\'s Electronic Medical Record Slice');
      console.log('5.Create the Electronic Medical Record.');
      console.log('6.Calculate your incentives.');
      console.log('7. View all Timestamped Electronic Medical Records');
      console.log('8.View all Electronic Medical Record Slices');
      console.log('9.Exit');
    } while (choice !== 9); // TODO: working with all the features after wallet creation

  };
  /**
   * registerPatient function.
   * Once the hospital successfull gets the wallet
   * we can start registering the patients
   */


  Main.prototype.registerPatient = function () {// TODO: Register Patient Functionality
  }; // loads the crypto module


  Main.cryptoModule = cryptoloader_function_1.default() || require('crypto');
  return Main;
}();

exports.default = Main;
Main.main();