import { HASH_ALGORITHM } from "./hash.enum";
export default class HMAC {
    private readonly ENCODING: BufferEncoding = 'hex';
    private cryptoModule: any;
    private algorithm: HASH_ALGORITHM;
    public constructor(readonly crypt: any, readonly algo: HASH_ALGORITHM) {
        this.cryptoModule = crypt;
        this.algorithm = algo;
    }
    public getMessageDigest(key: string, message: string): string {
        const hmac = this.cryptoModule.createHmac(this.algorithm, key);
        hmac.update(message);
        return hmac.digest(this.ENCODING);
    }
}