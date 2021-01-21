"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var wallet_class_1 = require("../../main/account/wallet.class");

var cryptoModule = require("crypto");

var WalletTest =
/** @class */
function () {
  function WalletTest() {}

  WalletTest.testModule = function () {
    var module = new wallet_class_1.default(cryptoModule, "hello");
    var keyPair = module.getKeyPair();
    console.log("Private Key:\n", keyPair.privateKey);
    console.log("Public Key:\n", keyPair.publicKey);
    module.storeWallet();
  };

  return WalletTest;
}();

exports.default = WalletTest;