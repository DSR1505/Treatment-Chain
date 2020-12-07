const tester = require("assert");
import OneWayHash from "../../main/utils/hash.class";
import checkCryptoModuleSupport from "../../main/utils/cryptoloader.function";
import { HASH_ALGORITHM } from "../../main/utils/hash.enum";
export default class OneWayHashTest {
    public static testModule(): void {
        let cryptoModule: any;
        if ((cryptoModule = checkCryptoModuleSupport()) != undefined) {

            const moduleSha384: OneWayHash = new OneWayHash(cryptoModule, HASH_ALGORITHM.SHA256);
            const plainText = "Hello, World!";
            const cipherTextSha384 = "d195483c9b554356ba50a855a605aaee134612dcfdd05988fc605181d93603f215a0d07812a0b333fc2ccc75025736f5";
            tester.strictEqual(cipherTextSha384, moduleSha384.getMessageDigest(plainText), "Result Unsuccessful Digest didn't match!");
        }
    }
}
