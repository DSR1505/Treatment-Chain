import { HASH_ALGORITHM } from "./hash.enum";
import { Hash, HexBase64Latin1Encoding, Utf8AsciiLatin1Encoding } from "crypto";
export default class OneWayHash {
    private readonly INPUT_ENCODING: HexBase64Latin1Encoding = 'hex';
    private _cryptoModule: any;
    private _hashObject: Hash;
    private set cryptoModule(c: any) {
        this._cryptoModule = c;
    }
    private get cryptoModule(): any {
        return this._cryptoModule;
    }
    private set hashObject(hash: Hash) {
        this._hashObject = hash;
    }
    private get hashObject(): Hash {
        return this._hashObject;
    }
    constructor(crypto: any, algo: HASH_ALGORITHM) {
        this.cryptoModule = crypto;
        this.hashObject = this.cryptoModule.createHash(algo);

    }
    public getMessageDigest(message: string): Buffer | string {
        this.hashObject.update(message);
        return this.hashObject.digest(this.INPUT_ENCODING) as string;
    }

}