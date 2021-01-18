import readlineSync = require('readline-sync');
import Wallet from '../account/wallet.class';
import WalletLoader from '../account/walletloader.class';
import Configuration from '../config/config.class';
import { RESOURCES } from '../config/resource.enum';
import HospitalController from '../controllers/hospital.controller';
import Hospital from '../models/hospital.model';
import checkCryptoModuleSupport from '../utils/cryptoloader.function';
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
        let country = readlineSync.question("Enter the native country of hospital(IN UPPERCASE):");
        let passphrase = readlineSync.question("Enter the passphrase:", { 'hideEchoBack': true })
        const hospital = new Hospital(id, country);
        const hospitalController = new HospitalController(hospital);
        hospitalController.registerHospital().then((result) => {
            console.log(result);
            const wallet = new Wallet(this.cryptoModule, passphrase);
            const keys = wallet.getKeyPair();
            console.log('*** WALLET GENERATED ***');
            console.log(keys.privateKey);
            console.log(keys.publicKey);
            console.log('*** END ***');
            console.log('Storing wallet to local disc.');
            try {
                wallet.storeWallet();
                console.log('Wallet Stored!');
                console.log(`Congratulations! ${result.name} is registered!`);
            } catch (e) {
                console.log('Wallet already exist!');
            }
        }).catch(err => {
            console.error(err);
        });
    }
    private allFeatures(): void {
        let choice: number;
        do {
            console.log('1.Register the Patient');
            console.log('2.Treat the patient');
            console.log('3.Discharge the patient.');
            console.log('4.Verify other Hospital\'s Electronic Medical Record Slice');
            console.log('5.Create the Electronic Medical Record.');
            console.log('6.Calculate your incentives.');
            console.log('7. View all Timestamped Electronic Medical Records');
            console.log('8.View all Electronic Medical Record Slices');
            console.log('9.Exit');
        } while (choice !== 9);
    }
    private registerPatient(): void {

    }

}
Main.main();   