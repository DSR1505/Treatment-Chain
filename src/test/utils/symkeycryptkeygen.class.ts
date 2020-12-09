import SymmetricKeyGenerator from "../../main/utils/symkeycryptkeygen.class";
import cryptoModule = require('crypto');
export default class SymmetricKeyGeneratorTest {
    public static testModule(): void {
        const module: SymmetricKeyGenerator = new SymmetricKeyGenerator(cryptoModule, "hello");
        console.log("Symmetric Key:", module.getSymmetricKey());
    }
}