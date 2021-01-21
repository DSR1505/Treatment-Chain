"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * loading all configurations
 */
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

  // basically main function
  Main.main = function () {
    var config = new config_class_1.default(resource_enum_1.RESOURCES.SYSTEM_CONFIG);
    var privateKey; // private key
    var passphrase; // passphrase
    console.log("Welcome to Treatment Chain - Thick Client");
    console.log("Enter your Choice (1 to 2) to become part of system:");
    var choice = parseInt(readlineSync.question("1.Already Registered\n2.Register in  Network\nEnter Choice:"), 10);

    if (choice === 1) {
      console.log('Searching your wallet in the system');

      try {
        // Calling the loadWallet function from Wallet class and storing it.
        // Check walletLoader Class in accounts folder
        var wallet = walletloader_class_1.default.loadWallet(Main.cryptoModule); // loading existing wallet from the user's system. 
        console.log("*** WALLET FOUND ***");
        // log the signer key or (private key) and the public key
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
        // Unable to retrieve wallet from the user's machine. Try to write in manually
        console.log('Wallet not found!\nTry to enter the keys manually\n');
      }

      // getting the signers path from the user
      var signerPath = readlineSync.question('Enter Signer Path:');

      // getting the password
      var passphrase_1 = readlineSync.question('Enter password:', {
        hideEchoBack: true
      });

      // returning back the public key from the signerPath
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

  // the register function
  Main.register = function () {
    var _this = this;

    var id = readlineSync.question("Enter the id of the hospital:");
    var country = readlineSync.question("Enter the native country of hospital(IN UPPERCASE):");
    var passphrase = readlineSync.question("Enter the passphrase:", {
      'hideEchoBack': true
    });
    // Using the constructor of Hospital Class to set default values
    var hospital = new hospital_model_1.default(id, country);
    
    // setting the hospital controller to the hospital variable
    var hospitalController = new hospital_controller_1.default(hospital);

    // creating a promise, if registerHospital method is called
    // checks if hospital already exists with the given id.
    hospitalController.registerHospital().then(function (result) {
      console.log(result); // log the result
      // creating a new wallet for hospital
      var wallet = new wallet_class_1.default(_this.cryptoModule, passphrase);
      // getting the private and public key of the wallet
      var keys = wallet.getKeyPair();
      console.log('*** WALLET GENERATED ***');
      console.log(keys.privateKey); // log private
      console.log(keys.publicKey); // log public
      console.log('*** END ***');
      console.log('Storing wallet to local disc.'); 

      // Storing the Wallet to the local machine. Maybe Redis.
      try {
        wallet.storeWallet();
        console.log('Wallet Stored!');
        console.log("Congratulations! " + result.name + " is registered!");
      } catch (e) {
        console.log('Wallet already exist!');
      }
    }).catch(function (err) {
      // Catch any error if any
      console.error(err); 
    });
  };

  // allFeatures function using Object prototyping
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
    } while (choice !== 9);
  };
  // registerPatient function using Object prototyping
  Main.prototype.registerPatient = function () {};

  // loading the crypto module
  Main.cryptoModule = cryptoloader_function_1.default() || require('crypto');
  return Main;
}();

exports.default = Main; // exporting the main function.
Main.main(); // calling the main function