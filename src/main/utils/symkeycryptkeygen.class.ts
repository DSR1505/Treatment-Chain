import { KeyObject } from "crypto";
import { HASH_ALGORITHM } from "./hash.enum";
import OneWayHash from './hash.class';
export default class SymmetricKeyGenerator {
    private static readonly ENCODING: BufferEncoding = 'hex';
    private crypto: any;
    private _key: string;
    private set key(k: string) {
        this._key = k;
    }
    private get key(): string {
        return this._key;
    }
    public constructor(cryptoObject: any, k: string) {
        this.crypto = cryptoObject;
        const hash = new OneWayHash(this.crypto, HASH_ALGORITHM.SHA384);
        this.key = <string>hash.getMessageDigest(k);
    }
    public getSymmetricKey(): KeyObject {
        return this.crypto.createSecret(this.key);
    }
}