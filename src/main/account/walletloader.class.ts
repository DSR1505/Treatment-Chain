import { KeyObject, sign } from 'crypto';
import filesytem = require('fs');
import Configuration from '../config/config.class';
import { RESOURCES } from '../config/resource.enum';
import checkCryptoModuleSupport from '../utils/cryptoloader.function';
import IKeyPair from '../utils/keypair.interface';

/**
 * The WalletLoader Class
 */
export default class WalletLoader {
    private static cryptoModule = checkCryptoModuleSupport();
    /**
     * loads the wallet from the file system.
     * @param crypto the crypto module.
     */
    public static loadWallet(): IKeyPair {
        // configuration changes according the platform (Linux, Windows)
        const config = new Configuration(RESOURCES.SYSTEM_CONFIG);
        let path: string = undefined; // Location of wallet(directory)
        let wallet: IKeyPair = { privateKey: null, publicKey: null }; // Keypairs stored in wallet.
        // Identification of the platform. Updating path accordingly.
        if (process.platform == 'linux') {
            path = config.getValue('PLATFORM_LINUX');

        } else if (process.platform == 'win32') {
            path = config.getValue('PLATFORM_WIN32');

        }
        // Path for the key pair concentanated with filename
        const absoluteWalletAddrPath = path + config.getValue('WALLET_ADDR');
        const absoluteWalletSignPath = path + config.getValue('WALLET_SIGN');
        // If key-pair exist return the wallet
        if (filesytem.existsSync(absoluteWalletAddrPath) && filesytem.existsSync(absoluteWalletSignPath)) {
            const addr = filesytem.readFileSync(absoluteWalletAddrPath, { encoding: 'hex' });
            wallet.publicKey = addr;
            const sign = filesytem.readFileSync(absoluteWalletSignPath, { encoding: 'hex' });
            wallet.privateKey = sign;
            return wallet;
        }
        throw new Error('Unable to find the wallet. Either one or both keys are missing!');
    }

    // Still unclear about the signer path, please confirm once.
    public static getAddress(signerPath: string): string {
        const signer = filesytem.readFileSync(signerPath, { encoding: 'hex' });
        return signer; // returns the public key converted to String.
    }
}