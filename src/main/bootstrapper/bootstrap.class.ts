import readlineSync = require('readline-sync');
import Wallet from '../account/wallet.class';
import WalletLoader from '../account/walletloader.class';
import Configuration from '../config/config.class';
import { RESOURCES } from '../config/resource.enum';
import HospitalController from '../controllers/hospital.controller';
import Hospital from '../models/hospital.model';
import checkCryptoModuleSupport from '../utils/cryptoloader.function';


export default class Main {
    // loads the crypto module
    private static readonly cryptoModule = checkCryptoModuleSupport() || require('crypto');
    // probably the main method
    public static main(): void {
        const config = new Configuration(RESOURCES.SYSTEM_CONFIG); // loading the configuration from the RESOURCES
        let privateKey: string; // PRIVATE KEY
        let passphrase: string; // PASSPHRASE
        console.log("Welcome to Treatment Chain - Thick Client");
        console.log("Enter your Choice (1 to 2) to become part of system:");
        let choice: number = parseInt(readlineSync.question("1.Already Registered\n2.Register in  Network\nEnter Choice:"), 10);
        if (choice === 1) {
            // The condition here is you are already registered and you already have a wallet in your OS.
            console.log('Searching your wallet in the system');
            try {
                const wallet = WalletLoader.loadWallet();
                console.log("*** WALLET FOUND ***");
                console.log("Your Signer:\n", wallet.privateKey);
                console.log("Your Address:\n", wallet.publicKey);
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
            const address = WalletLoader.getAddress(signerPath);
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
    // The register method
    private static register(): void {
        // getting the id of the hospital
        let id = readlineSync.question("Enter the id of the hospital:");

        // getting the country of the hospital in UPPERCASE
        let country = readlineSync.question("Enter the native country of hospital(IN UPPERCASE):");

        // getting the passphrase
        // passphrase here is basically used to access the wallet
        let passphrase = readlineSync.question("Enter the passphrase:", { 'hideEchoBack': true })

        // creating new hospital Object with given id and country
        const hospital = new Hospital(id, country);

        // hospital controller checks whether the hospital exists with the given id or not
        const hospitalController = new HospitalController(hospital);

        hospitalController.registerHospital().then((result) => {
            console.log(result); // printing the result of hospital found or not

            // creating a new wallet for the hospital
            // passphrase is basically used to create and access the wallet
            const wallet = new Wallet(this.cryptoModule, passphrase);

            // getting the private and public key pairs for the wallet
            const keys = wallet.getKeyPair();

            console.log('*** WALLET GENERATED ***');
            console.log(keys.privateKey); // log private
            console.log(keys.publicKey); // log public
            console.log('*** END ***');
            console.log('Storing wallet to local disc.');

            // storing the wallet to the local disk.
            try {
                wallet.storeWallet();
                console.log('Wallet Stored!');
                console.log(`Congratulations! ${result.name} is registered!`);
            } catch (e) {
                // if there is an existing wallet in the system
                console.log('Wallet already exist!');
            }
        }).catch(err => {
            console.error(err);
        });
    }
    /**
     * allFeatures function
     * will display all the options to the users once wallet is created.
     */
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
        // TODO: working with all the features after wallet creation
    }

    /**
     * registerPatient function.
     * Once the hospital successfull gets the wallet
     * we can start registering the patients
     */
    private registerPatient(): void {
        // TODO: Register Patient Functionality
    }

}
Main.main();   