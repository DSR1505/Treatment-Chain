"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var readlineSync = require("readline-sync");

var config_class_1 = require("../config/config.class");

var resource_enum_1 = require("../config/resource.enum");

var shared_preferences_1 = require("../config/shared.preferences");

var Main =
/** @class */
function () {
  function Main() {}

  Main.main = function () {
    var config = new config_class_1.default(resource_enum_1.RESOURCES.SYSTEM_CONFIG);
    var preference = new shared_preferences_1.default();
    var privateKey;
    var passphrase;
    console.log("Welcome to Treatment Chain - Thick Client");
    console.log("Enter your Choice (1 to 2) to become part of system:");
    var choice = parseInt(readlineSync.question("1.Already Registered\n2.Part of Network\n"), 10);

    if (choice === 1) {
      console.log('Searching your wallet in the system'); // Not Found

      if (!preference.getPreference(config['WALLET_SIGN']) && !preference.getPreference(config['WALLET_ADDR'])) {
        console.log('Not Found in the system!'); // Try to enter wallet manually 
      } else {// Found the keys print and do the next step
        }
    } else if (choice === 2) {// Register into the network freshly
    }
    /*
    
    get the generated public key
     search through tx-mempool by sending
    request to the longest running node
    in the network.
    
    If node finds the the given public key signed or made
    the tx
    
    Download the blocks it is behind.
    
    Else if choosen 2
     Follow the registration process
     If process follows happy path.
     Download the blocks.
    */

  };

  return Main;
}();

exports.default = Main;
Main.main();