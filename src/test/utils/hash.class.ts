const cryptoModule = require('crypto');
const tester = require("assert");
import OneWayHash from "../../main/utils/hash.class";
import { HASH_ALGORITHM } from "../../main/utils/hash.enum";
export default class OneWayHashTest {
    public static testModule(): void {
        const moduleSha384: OneWayHash = new OneWayHash(cryptoModule, HASH_ALGORITHM.SHA384);
        const plainText = "Hello, World!";
        // console.log(moduleSha384.getMessageDigest(plainText));
        const cipherTextSha384 = "5485cc9b3365b4305dfb4e8337e0a598a574f8242bf17289e0dd6c20a3cd44a089de16ab4ab308f63e44b1170eb5f515"
        tester.strictEqual(cipherTextSha384, moduleSha384.getMessageDigest(plainText), "Result Unsuccessful Digest didn't match!");
    }
}
