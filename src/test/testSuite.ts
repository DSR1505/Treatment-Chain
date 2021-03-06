import HospitalController from "../main/controllers/hospital.controller";
import DigitalSignature from "../main/utils/digital-signature.class";
import WalletTest from "./account/wallet.class";
import WalletLoaderTest from "./account/walletloader.class";
import HospitalControllerTest from "./controller/hospital.controller";
import HospitalServiceTest from "./services/find-hospitals.service";
import testCryptoModule from "./utils/cryptoloader.function";
import DigitalSignatureTest from "./utils/digital-signature.class";
import OneWayHashTest from "./utils/hash.class";
import HMACTest from "./utils/hmac.class";
import AsymmetricKeyGeneratorTest from "./utils/pubkeycryptkeygen.class";
import SymmetricKeyGeneratorTest from "./utils/symkeycryptkeygen.class";

export default class TestSuite {
    public static runner(): void {
        testCryptoModule();
        // OneWayHashTest.testModule();
        // SymmetricKeyGeneratorTest.testModule();
        // AsymmetricKeyGeneratorTest.testModule();
        // HMACTest.testModule();
        // DigitalSignatureTest.testModule();
        // WalletTest.testModule();
        // HospitalServiceTest.testModule();
        // HospitalControllerTest.testModule();
        WalletLoaderTest.testModule();
    }
}
TestSuite.runner();