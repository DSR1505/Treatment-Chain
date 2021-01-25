"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var walletloader_class_1 = require("../../main/account/walletloader.class");

var config_class_1 = require("../../main/config/config.class");

var resource_enum_1 = require("../../main/config/resource.enum");

var WalletLoaderTest =
/** @class */
function () {
  function WalletLoaderTest() {}

  WalletLoaderTest.testModule = function () {
    console.info("***WalletLoader Test Running***");
    var keyPair = walletloader_class_1.default.loadWallet();
    console.log('loadWallet method invoked!');
    console.log(keyPair);
    var config = new config_class_1.default(resource_enum_1.RESOURCES.SYSTEM_CONFIG);
    var address = walletloader_class_1.default.getAddress(config.getValue('PLATFORM_LINUX') + config.getValue('WALLET_ADDR'));
    console.log('getAddress method invoked!');
    console.log(address);
    console.info("***WalletLoader Test Finished***");
  };

  return WalletLoaderTest;
}();

exports.default = WalletLoaderTest;