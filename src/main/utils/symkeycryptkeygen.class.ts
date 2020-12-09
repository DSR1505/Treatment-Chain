import { HASH_ALGORITHM } from "./hash.enum";
import OneWayHash from './hash.class';
export default class SymmetricKeyGenerator {
    private readonly SALT: string = 'trea1ment_chain';
    private readonly KEY_LENGTH: number = 64;
    private readonly ENCODING: BufferEncoding = 'hex';
    private hash: string
    private crypto: any;
    public constructor(cryptoObject: any, key: string) {
        this.crypto = cryptoObject;
        this.hash = <string>new OneWayHash(cryptoObject, HASH_ALGORITHM.SHA384).getMessageDigest(key);
    }
    public getSymmetricKey(): string {
        const symmetricKey = this.crypto.scryptSync(this.hash, this.SALT, this.KEY_LENGTH);
        return symmetricKey.toString(this.ENCODING);
    }
}