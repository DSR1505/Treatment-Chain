"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var digital_signature_class_1 = require("../../main/utils/digital-signature.class");

var pubkeycrypt_enum_1 = require("../../main/utils/pubkeycrypt.enum");

var pubkeycryptkeygen_class_1 = require("../../main/utils/pubkeycryptkeygen.class");

var tester = require('assert');

var cryptoModule = require('crypto');

var DigitalSignatureTest =
/** @class */
function () {
  function DigitalSignatureTest() {}

  DigitalSignatureTest.testModule = function () {
    var passphrase = 'hello'; // Key Generation

    var keyPair = new pubkeycryptkeygen_class_1.default(cryptoModule, pubkeycrypt_enum_1.PUBKEYCRYPT_ALGORITHM.RSA, passphrase).getKeyPair();
    var signer = keyPair.privateKey.toString();
    var address = keyPair.publicKey.toString();
    var message = 'This is the plain text'; // Digital Signature

    var module = new digital_signature_class_1.default(cryptoModule, passphrase);
    console.log('Digital Signature Module');
    console.log('Passphrase:', passphrase);
    console.log('Private Key(Signer):', signer);
    console.log('Public Key(Address):', address);
    console.log('Message:', message);
    var signature = module.getSignature(message, signer);
    console.log('Signature:', signature);
    console.log('Verify signature:', module.verifySignature(message, address, signature));
  };

  return DigitalSignatureTest;
}();

exports.default = DigitalSignatureTest;