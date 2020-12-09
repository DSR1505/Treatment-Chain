import { PUBKEYCRYPT_ALGORITHM } from "./pubkeycrypt.enum";
import { HASH_ALGORITHM } from "./hash.enum";
import OneWayHash from './hash.class';
import IKeyPair from "./keypair.interface";

export default class AsymmetricKeysGenerator {
    private readonly format: 'pem' | 'der' = 'pem';
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
        this.key = k;

    }
    public getKeyPair(): IKeyPair {
        let keyPair: IKeyPair;
        if (this.algorithm == PUBKEYCRYPT_ALGORITHM.RSA) {
            keyPair = this.cryptoModule.generateKeyPairSync(this.algorithm, {
                modulusLength: 2048,
                publicKeyEncoding: {
                    type: 'spki',
                    format: this.format
                },
                privateKeyEncoding: {
                    type: 'pkcs8',
                    format: this.format,
                    cipher: 'aes-256-cbc',
                    passphrase: this.key
                }
            });

        } else if (this.algorithm == PUBKEYCRYPT_ALGORITHM.EC || this.algorithm == PUBKEYCRYPT_ALGORITHM.ED25519 || this.algorithm == PUBKEYCRYPT_ALGORITHM.ED448) {
            keyPair = this.cryptoModule.generateKeyPairSync(this.algorithm, {
                namedCurve: 'secp384r1',
                publicKeyEncoding: {
                    type: 'spki',
                    format: this.format
                },
                privateKeyEncoding: {
                    type: 'sec1',
                    format: this.format,
                }
            });
        } else if (this.algorithm == PUBKEYCRYPT_ALGORITHM.DH) {
            keyPair = this.cryptoModule.generateKeyPairSync(this.algorithm, {
                prime: Buffer.alloc(64),
                primeLength: 64,
                generator: 79,
                groupName: 'modp17',
                publicKeyEncoding: {
                    format: this.format
                },
                privateKeyEncoding: {
                    format: this.format,
                    passphrase: this.key
                }
            });
        } else if (this.algorithm == PUBKEYCRYPT_ALGORITHM.DSA) {
            keyPair = this.cryptoModule.generateKeyPairSync(this.algorithm, {
                modulusLength: 4096,
                divisorLength: 64,
                publicKeyEncoding: {
                    format: this.format
                },
                privateKeyEncoding: {
                    format: this.format,
                    passphrase: this.key
                }
            });
        }
        return keyPair;
    }
}