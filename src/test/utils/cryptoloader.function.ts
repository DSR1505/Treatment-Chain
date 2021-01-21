import { assert } from "console";
const tester = require('assert');
const crypto = require('crypto');
import checkCryptoModuleSupport from "../../main/utils/cryptoloader.function";
export default function testCryptoModule(): void {
    let test = checkCryptoModuleSupport();
    tester.strictEqual(typeof (crypto), typeof (test), "Crypto Module Support Passed!");
}
