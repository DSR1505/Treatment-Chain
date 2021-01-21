import OneWayHash from "./hash.class";
import { HASH_ALGORITHM } from "./hash.enum";

export default class DigitalSignature {
    private readonly HASH_SIGN_ALGORITHM = 'RSA-SHA256';
    private readonly ENCODING: BufferEncoding = 'hex';
    private cryptoModule: any;
    private passphrase: string;
    public constructor(crypto: any, k: string) {
        this.cryptoModule = crypto;
        const hash = new OneWayHash(this.cryptoModule, HASH_ALGORITHM.SHA384);
        this.passphrase = k;

    }
    public getSignature(message: string, signer: string): string {
        const signObject = this.cryptoModule.createSign(this.HASH_SIGN_ALGORITHM);
        signObject.update(message);
        signObject.end();
        const signature = signObject.sign({ key: signer, passphrase: this.passphrase }, this.ENCODING);
        return signature;
    }
    public verifySignature(message: string, address: string, signature: string): boolean {
        const verifier = this.cryptoModule.createVerify(this.HASH_SIGN_ALGORITHM);
        verifier.update(message);
        verifier.end();
        return verifier.verify(address, signature, this.ENCODING);
    }

}