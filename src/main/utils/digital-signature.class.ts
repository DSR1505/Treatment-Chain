import { HASH_ALGORITHM } from "./hash.enum";

export default class DigitalSignature {
    private cryptoModule: any;
    private signature: string;
    public constructor(crypto: any) {
        this.cryptoModule = crypto;
    }
    public updateSignature(message: string, signer: string): void {
        const signObject = this.cryptoModule.createSign(HASH_ALGORITHM.SHA384);
        signObject.update(message);
        signObject.end();
        this.signature = signObject.sign(signer);
    }
    public getSignature(): string {
        return this.signature;
    }
    public verifySignature(message: string, address: string): boolean {
        const verifier = this.cryptoModule.createVerify(HASH_ALGORITHM.SHA384);
        verifier.update(message);
        verifier.end();
        return verifier.verify(address, this.getSignature());
    }

}