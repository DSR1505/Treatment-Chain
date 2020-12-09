import Configuration from "../config/config.class";
import { RESOURCES } from "../config/resource.enum";
import SharedPreferences from "../config/shared.preferences";
import IKeyPair from "../utils/keypair.interface";
import { PUBKEYCRYPT_ALGORITHM } from "../utils/pubkeycrypt.enum";
import AsymmetricKeysGenerator from "../utils/pubkeycryptkeygen.class";

export default class Wallet {
    private keyPairGen: AsymmetricKeysGenerator;
    private keyPair: IKeyPair;
    constructor(readonly crypto: any, readonly passphrase: string) {
        this.keyPairGen = new AsymmetricKeysGenerator(crypto, PUBKEYCRYPT_ALGORITHM.EC, passphrase);
    }

    public getKeyPair(): IKeyPair {
        this.keyPair = this.keyPairGen.getKeyPair();
        return this.keyPair;
    }
    public storeWallet() {
        const preferences = new SharedPreferences();
        const config = new Configuration(RESOURCES.SYSTEM_CONFIG);
        const addr = this.keyPair.publicKey.toString();
        const sign = this.keyPair.privateKey.toString();
        preferences.setPreference(config['WALLET_ADDR'], addr);
        preferences.setPreference(config['WALLET_SIGN'], sign);
    }
    public loadWallet(): boolean {
        return true;

    }
}