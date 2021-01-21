import Wallet from "../../main/account/wallet.class";
import WalletLoader from "../../main/account/walletloader.class";

import cryptoModule = require('crypto');
export default class WalletTest {
    public static testModule(): void {

        const module = new Wallet(cryptoModule, "hello");
        const keyPair = module.getKeyPair();
        console.log("Private Key:\n", keyPair.privateKey);
        console.log("Public Key:\n", keyPair.publicKey);
        module.storeWallet();
    }
}