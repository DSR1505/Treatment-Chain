import Configuration from "../config/config.class";
import { RESOURCES } from "../config/resource.enum";
import SharedPreferences from "../config/shared.preferences";
import { PUBKEYCRYPT_ALGORITHM } from "../utils/pubkeycrypt.enum";
import AsymmetricKeysGenerator from "../utils/pubkeycryptkeygen.class";

export default class Wallet {
    private keyPairGen: AsymmetricKeysGenerator;
    private keyPair: Map<string, string>;
    constructor(readonly crypto: any, readonly passphrase: string) {
        this.keyPairGen = new AsymmetricKeysGenerator(crypto, PUBKEYCRYPT_ALGORITHM.EC, passphrase);
    }

    public getKeyPair(): Map<string, string> {
        this.keyPair = this.keyPairGen.getKeyPair();
        return this.keyPair;
    }
    public storeWallet() {
        const preferences = new SharedPreferences();
        const config = new Configuration(RESOURCES.SYSTEM_CONFIG);
        const addr = this.keyPair.values().next().value;
        const sign = this.keyPair.keys().next().value;
        preferences.setPreference(config['WALLET_ADDR'], addr);
        preferences.setPreference(config['WALLET_SIGN'], sign);
    }
}