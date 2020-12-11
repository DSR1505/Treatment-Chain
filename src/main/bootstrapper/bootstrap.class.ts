import readlineSync = require('readline-sync');
import Wallet from '../account/wallet.class';
import WalletLoader from '../account/walletloader.class';
import Configuration from '../config/config.class';
import { RESOURCES } from '../config/resource.enum';
import HospitalController from '../controller/hospital.controller';
import Hospital from '../models/hospital.model';
import checkCryptoModuleSupport from '../utils/cryptoloader.function';
import IKeyPair from '../utils/keypair.interface';
export default class Main {
    private static readonly cryptoModule = checkCryptoModuleSupport() || require('crypto');
    public static main(): void {
        const config = new Configuration(RESOURCES.SYSTEM_CONFIG);
        let privateKey: string;
        let passphrase: string;
        console.log("Welcome to Treatment Chain - Thick Client");
        console.log("Enter your Choice (1 to 2) to become part of system:");
        let choice: number = parseInt(readlineSync.question("1.Already Registered\n2.Register in  Network\nEnter Choice:"), 10);
        if (choice === 1) {
            console.log('Searching your wallet in the system');
            try {
                const wallet = WalletLoader.loadWallet(Main.cryptoModule);
                console.log("*** WALLET FOUND ***");
                console.log("Your Signer:\n", wallet.privateKey.toString());
                console.log("Your Address:\n", wallet.publicKey.toString());
                // contact any peer 
                // peer found
                // sending address
                // verifying address
                // address verified
                // updating peers list
                // downloading blocks
                // updating progress
                // Records are up to date.
                // show rest features.
            } catch (e) {
                console.log('Wallet not found!\nTry to enter the keys manually\n');
            }
            const signerPath = readlineSync.question('Enter Signer Path:');
            const passphrase = readlineSync.question('Enter password:', { hideEchoBack: true });
            const address = WalletLoader.getAddress(Main.cryptoModule, signerPath);
            console.log('Your public key is ', address);
            // contact any peer 
            // peer found
            // sending address
            // verifying address
            // address verified
            // updating peers list
            // downloading blocks
            // updating progress
            // Records are up to date.
            // show rest features
        } else if (choice === 2) {
            // Register into the network freshly
            this.register();
        }

    }
    private static register(): void {
        let id = readlineSync.question("Enter the id of the hospital:");
        let name = readlineSync.question("Enter the name of the hospital:");
        let country = readlineSync.question("Enter the native country of hospital(IN UPPERCASE):");
        let passphrase = readlineSync.question("Enter the passphrase for hospital:",)
        const hospital = new Hospital(name, country, id);
        const hospitalController = new HospitalController(hospital);
        hospitalController.registerHospital().then((result) => {
            console.log(result);
            // const wallet = new Wallet(this.cryptoModule, passphrase);
            // const keys = wallet.getKeyPair();
            // console.log(keys.privateKey);
            // console.log(keys.publicKey);
            // wallet.storeWallet();
        }).catch(err => {
            console.error(err);
        })
    }
}
Main.main();   