import testCryptoModule from "./utils/cryptoloader.function";
import OneWayHashTest from "./utils/hash.class";

export default class TestSuite {
    public static runner(): void {
        testCryptoModule();
        OneWayHashTest.testModule();
    }
}
TestSuite.runner();