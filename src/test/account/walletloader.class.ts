import cryptoModule = require('crypto');
import WalletLoader from '../../main/account/walletloader.class';
import Configuration from '../../main/config/config.class';
import { RESOURCES } from '../../main/config/resource.enum';
export default class WalletLoaderTest {
    public static testModule(): void {
        console.info("***WalletLoader Test Running***");
        const keyPair = WalletLoader.loadWallet();
        console.log('loadWallet method invoked!');
        console.log(keyPair);
        const config: Configuration = new Configuration(RESOURCES.SYSTEM_CONFIG);
        const address = WalletLoader.getAddress(config.getValue('PLATFORM_LINUX') + config.getValue('WALLET_ADDR'));
        console.log('getAddress method invoked!');
        console.log(address);
        console.info("***WalletLoader Test Finished***");
    }

}