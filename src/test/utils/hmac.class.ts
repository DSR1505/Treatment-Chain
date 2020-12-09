import { HASH_ALGORITHM } from "../../main/utils/hash.enum";
import HMAC from "../../main/utils/hmac.class";

const cryptoModule = require('crypto');
const tester = require('assert');
export default class HMACTest {
    public static testModule(): void {
        const module = new HMAC(cryptoModule, HASH_ALGORITHM.SHA256);
        const key = 'hello';
        const message = 'treatment chain';
        const actual = "5226cbe94adede3d0a56a0f175ca6015c11f87da2a1b30de65049e482c6d1499";
        const expected = module.getMessageDigest(key, message);
        console.log("hmac expected:", expected);
        console.log("hmac actual:", actual);
        try {
            tester.strictEqual(actual, expected, "HMAC Test Failed!");
        } catch (e) {
            console.log(e);
        }
    }
}