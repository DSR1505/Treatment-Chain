import { read } from 'fs';
import readlineSync = require('readline-sync');
import Configuration from '../config/config.class';
import { RESOURCES } from '../config/resource.enum';
import SharedPreferences from '../config/shared.preferences';
export default class Main {
    public static main(): void {
        const config = new Configuration(RESOURCES.SYSTEM_CONFIG);
        const preference = new SharedPreferences();
        let privateKey: string;
        let passphrase: string;
        console.log("Welcome to Treatment Chain - Thick Client");
        console.log("Enter your Choice (1 to 2) to become part of system:");
        let choice: number = parseInt(readlineSync.question("1.Already Registered\n2.Part of Network\n"), 10);
        if (choice === 1) {
            console.log('Searching your wallet in the system');
            // Not Found
            if (!preference.getPreference(config['WALLET_SIGN']) && !preference.getPreference(config['WALLET_ADDR'])) {
                console.log('Not Found in the system!');
                // Try to enter wallet manually 
            } else {
                // Found the keys print and do the next step

            }
        } else if (choice === 2) {
            // Register into the network freshly
        }
        /*  
        
        get the generated public key

        search through tx-mempool by sending
        request to the longest running node 
        in the network. 
        
        If node finds the the given public key signed or made
        the tx 
        
        Download the blocks it is behind.
        
        Else if choosen 2

        Follow the registration process

        If process follows happy path.

        Download the blocks.
        */

    }
}
Main.main();   