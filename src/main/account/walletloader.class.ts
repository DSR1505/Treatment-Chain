import { KeyObject, sign } from 'crypto';
import filesytem = require('fs');
import Configuration from '../config/config.class';
import { RESOURCES } from '../config/resource.enum';
import IKeyPair from '../utils/keypair.interface';

/**
 * The WalletLoader Class
 */
export default class WalletLoader {

    /**
     * loads the wallet from the file system.
     * @param crypto the crypto module.
     */
    public static loadWallet(crypto: any): IKeyPair {
        // configuration changes according the platform (Linux, Windows)
        const config = new Configuration(RESOURCES.SYSTEM_CONFIG);

        let temp: string;
        let path: string;
        let keyPair: IKeyPair; // the private and public key

        if (process.platform === 'linux') {
            // if the OS is Linux then path is basically in the home directory
            // refer to wallet.class.ts
            path = config['PLATFORM_LINUX'];
        } else if (process.platform === 'win32') {
            // if the OS is Windows then path is basically in the home directory
            // refer to wallet.class.ts
            path = config['PLATFORM_WIN32'];
        }

        // PS: This is the private key
        // refer the wallet.class.ts line 48 and 51
        if (filesytem.existsSync(path + config['WALLET_SIGN'])) {
            temp = filesytem.readFileSync(path + config['WALLET_SIGN'], {
                encoding: 'hex'
            });
            keyPair.privateKey = crypto.createPrivateKey(temp);
        } else {
            throw new Error('Unable to find signer!');
        }

        // PS: This is the public key
        // refer the wallet.class.ts line 48 and 51
        if (filesytem.existsSync(path + config['WALLET_ADDR'])) {
            temp = filesytem.readFileSync(path + config['WALLET_SIGN'], {
                encoding: 'hex'
            });
            keyPair.publicKey = crypto.createPublicKey(temp);
        } else {
            throw new Error('Unable to find address!');
        }

        return keyPair; // returning the keypairs

    }

    // Still unclear about the signer path, please confirm once.
    public static getAddress(crypto: any, signerPath: string): string {
        const signer = filesytem.readFileSync(signerPath, { encoding: 'hex' });
        console.log(signer);
        const publicKey = crypto.createPublicKey(signer);
        return publicKey.toString(); // returns the public key converted to String.
    }
}