import { KeyObject } from "crypto";
import { PUBKEYCRYPT_ALGORITHM } from "./pubkeycrypt.enum";
import { HASH_ALGORITHM } from "./hash.enum";
import OneWayHash from './hash.class';

export default class AsymmetricKeysGenerator {
    private _algorithm: PUBKEYCRYPT_ALGORITHM;
    private _crytoModule: any;
    private _key: string;
    public set algorithm(algo: PUBKEYCRYPT_ALGORITHM) {
        this._algorithm = algo;
    }
    public get algorithm(): PUBKEYCRYPT_ALGORITHM {
        return this._algorithm;
    }
    private get cryptoModule(): any {
        return this._crytoModule;
    }
    private set key(k: string) {
        this._key = k;
    }
    private get key(): string {
        return this._key;
    }
    public constructor(crytpo: any, algo: PUBKEYCRYPT_ALGORITHM, k: string) {
        this._crytoModule = crytpo;
        this.algorithm = algo;
        const hash = new OneWayHash(this.cryptoModule, HASH_ALGORITHM.SHA384);
        this.key = <string>hash.getMessageDigest(k);

    }
    public getKeyPair(): Map<string, string> {
        const publicKey: KeyObject = this.cryptoModule.createPublicKey(this.key);
        const privateKey: KeyObject = this.cryptoModule.createPrivateKey(this.key);
        if (publicKey.type !== 'public' || privateKey.type !== 'private') {
            throw new Error('Keypair haven\'t generated Successfully!');
        }
        let keyPair: Map<string, string>;
        let pubk: string, prk: string;
        if (this.algorithm === PUBKEYCRYPT_ALGORITHM.RSA || this.algorithm === PUBKEYCRYPT_ALGORITHM.RSA_PSS) {
            pubk = publicKey.export({
                format: "pem",
                type: 'pkcs1'
            }) as string;
            prk = privateKey.export({
                format: 'pem',
                type: 'pkcs1',
                cipher: this.key
            }) as string;
        } else {
            pubk = publicKey.export({
                format: 'pem',
                type: 'spki'
            }) as string;
            prk = privateKey.export({
                format: 'pem',
                type: 'pkcs8',
                cipher: this.key
            }) as string;
        }
        keyPair.set(prk, pubk);
        return keyPair;
    }
}