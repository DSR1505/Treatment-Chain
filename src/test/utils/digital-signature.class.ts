import DigitalSignature from "../../main/utils/digital-signature.class";
import { PUBKEYCRYPT_ALGORITHM } from "../../main/utils/pubkeycrypt.enum";
import AsymmetricKeysGenerator from "../../main/utils/pubkeycryptkeygen.class";
const tester = require('assert');
const cryptoModule = require('crypto');
export default class DigitalSignatureTest {
    public static testModule(): void {
        const passphrase = 'hello';
        // Key Generation
        const keyPair = new AsymmetricKeysGenerator(cryptoModule, PUBKEYCRYPT_ALGORITHM.RSA, passphrase).getKeyPair();
        const signer = keyPair.privateKey.toString();
        const address = keyPair.publicKey.toString();
        const message = 'This is the plain text';
        // Digital Signature
        const module = new DigitalSignature(cryptoModule, passphrase);
        console.log('Digital Signature Module');
        console.log('Passphrase:', passphrase);
        console.log('Private Key(Signer):', signer);
        console.log('Public Key(Address):', address);
        console.log('Message:', message);
        const signature = module.getSignature(message, signer);
        console.log('Signature:', signature);
        console.log('Verify signature:', module.verifySignature(message, address, signature));
    }
}