import Configuration from "../config/config.class";
import { RESOURCES } from "../config/resource.enum";
import IKeyPair from "../utils/keypair.interface";
import { PUBKEYCRYPT_ALGORITHM } from "../utils/pubkeycrypt.enum";
import AsymmetricKeysGenerator from "../utils/pubkeycryptkeygen.class";
import filesytem = require('fs');
import os = require('os')
import { Z_PARTIAL_FLUSH } from "zlib";

/**
 * The ACTUAL WALLET CLASS
 */
export default class Wallet {

    // REFER pubkeycryptkeygen.class.ts in utils
    private keyPairGen: AsymmetricKeysGenerator;

    // keyPair of datatype IKeyPair which stores the private and public key
    // refer keypair.interface.ts in utils
    private keyPair: IKeyPair;

    /**
     * The Constructor
     * @param crypto basically the crypto module i.e. the thing that we write as import statement
     * @param passphrase the passphrase entered by the user.
     */
    constructor(readonly crypto: any, passphrase: string) {
        this.keyPairGen = new AsymmetricKeysGenerator(crypto, PUBKEYCRYPT_ALGORITHM.RSA, passphrase);
    }

    /**
     * getKeyPair is reponsible to retrieve the private and public key 
     * return type is of type IKeypair | again refer keypair.interface.ts in utils
     */
    public getKeyPair(): IKeyPair {
        this.keyPair = this.keyPairGen.getKeyPair();
        return this.keyPair;
    }

    /**
     * Storing wallet on the user's system
     */
    public storeWallet(): void {

        // this configuration specifically changes for the type of OS (Windows, Linux)
        const config = new Configuration(RESOURCES.SYSTEM_CONFIG);

        // getting the current user
        const CURRENT_USER = require('os').userInfo().username;

        // converting the public key to string
        const addr = this.keyPair.publicKey.toString();

        // converting the private key to string
        const sign = this.keyPair.privateKey.toString();

        let path: string, temp: any;

        if (process.platform === 'linux') { // checking for the platform
            // if the OS is Linux then wallet path is in home directory
            path = config.getValue('PLATFORM_LINUX');
            path = '/home/' + CURRENT_USER + path;
            
        } else if (process.platform === 'win32') {
            // this is for windows.
            // path is not clear
            path = config.getValue('PLATFORM_WIN32');
        }
        if (!filesytem.existsSync(path)) {
            // if no path exists then create a new path.
            filesytem.mkdirSync(path, { recursive: true });
        }

        // Finally Writing the wallet to the system.
        // path depends on the type of OS used.
        try {
            temp = filesytem.writeFileSync(path + config.getValue('WALLET_SIGN'), sign, { flag: 'wx' });
            temp = filesytem.writeFileSync(path + config.getValue('WALLET_ADDR'), addr, { flag: 'wx' });
        } catch (e) {
            throw e;
        }
    }

}