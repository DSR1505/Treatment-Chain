import { KeyObject, sign } from 'crypto';
import filesytem = require('fs');
import Configuration from '../config/config.class';
import { RESOURCES } from '../config/resource.enum';
import IKeyPair from '../utils/keypair.interface';
export default class WalletLoader {
    public static loadWallet(crypto: any): IKeyPair {
        const config = new Configuration(RESOURCES.SYSTEM_CONFIG);
        let temp: string;
        let path: string;
        let keyPair: IKeyPair;
        if (process.platform === 'linux') {
            path = config['PLATFORM_LINUX'];
        } else if (process.platform === 'win32') {
            path = config['PLATFORM_WIN32'];
        }
        if (filesytem.existsSync(path + config['WALLET_SIGN'])) {
            temp = filesytem.readFileSync(path + config['WALLET_SIGN'], {
                encoding: 'hex'
            });
            keyPair.privateKey = crypto.createPrivateKey(temp);
        } else {
            throw new Error('Unable to find signer!');
        }
        if (filesytem.existsSync(path + config['WALLET_ADDR'])) {
            temp = filesytem.readFileSync(path + config['WALLET_SIGN'], {
                encoding: 'hex'
            });
            keyPair.publicKey = crypto.createPublicKey(temp);
        } else {
            throw new Error('Unable to find address!');
        }

        return keyPair;

    }
    public static getAddress(crypto: any, signerPath: string): string {
        const signer = filesytem.readFileSync(signerPath, { encoding: 'hex' });
        console.log(signer);
        const publicKey = crypto.createPublicKey(signer);
        return publicKey.toString();
    }
}