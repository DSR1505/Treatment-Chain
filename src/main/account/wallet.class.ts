import Configuration from "../config/config.class";
import { RESOURCES } from "../config/resource.enum";
import IKeyPair from "../utils/keypair.interface";
import { PUBKEYCRYPT_ALGORITHM } from "../utils/pubkeycrypt.enum";
import AsymmetricKeysGenerator from "../utils/pubkeycryptkeygen.class";
import filesytem = require('fs');
import os = require('os');
export default class Wallet {
    private keyPairGen: AsymmetricKeysGenerator;
    private keyPair: IKeyPair;
    constructor(readonly crypto: any, passphrase: string) {
        this.keyPairGen = new AsymmetricKeysGenerator(crypto, PUBKEYCRYPT_ALGORITHM.RSA, passphrase);
    }

    public getKeyPair(): IKeyPair {
        this.keyPair = this.keyPairGen.getKeyPair();
        return this.keyPair;
    }
    public storeWallet(): void {
        const config = new Configuration(RESOURCES.SYSTEM_CONFIG);
        const addr = this.keyPair.publicKey.toString();
        const sign = this.keyPair.privateKey.toString();
        let path: string, temp: any;
        if (process.platform === 'linux') {
            path = '/home/' + os.userInfo()['username'] + config.getValue('PLATFORM_LINUX');
        } else if (process.platform === 'win32') {
            path = config.getValue('PLATFORM_WIN32');
        }
        if (!filesytem.existsSync(path)) {
            filesytem.mkdirSync(path, { recursive: true });
        }
        try {
            temp = filesytem.writeFileSync(path + config.getValue('WALLET_SIGN'), sign, { flag: 'wx' });
            temp = filesytem.writeFileSync(path + config.getValue('WALLET_ADDR'), addr, { flag: 'wx' });
        } catch (e) {
            throw e;
        }
    }

}