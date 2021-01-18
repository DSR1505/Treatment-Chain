import { PUBKEYCRYPT_ALGORITHM } from '../../main/utils/pubkeycrypt.enum';
import AsymmetricKeysGenerator from '../../main/utils/pubkeycryptkeygen.class';
const crytoModule = require('crypto');
export default class AsymmetricKeyGeneratorTest {
    public static testModule(): void {
        const passphrase = 'hello';
        const moduleEC = new AsymmetricKeysGenerator(crytoModule, PUBKEYCRYPT_ALGORITHM.EC, passphrase);
        console.log("EC:", moduleEC.getKeyPair());
        const moduleRSA = new AsymmetricKeysGenerator(crytoModule, PUBKEYCRYPT_ALGORITHM.RSA, passphrase);
        console.log("RSA:", moduleRSA.getKeyPair());
        const moduleDSA = new AsymmetricKeysGenerator(crytoModule, PUBKEYCRYPT_ALGORITHM.DSA, passphrase);
        console.log("DSA:", moduleDSA);
        const moduleDH = new AsymmetricKeysGenerator(crytoModule, PUBKEYCRYPT_ALGORITHM.DH, passphrase);
        console.log("DH:", moduleDH);
    }
}