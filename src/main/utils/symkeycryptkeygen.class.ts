import { HASH_ALGORITHM } from "./hash.enum";
import OneWayHash from './hash.class';
/**
 * SymmetricKeyGenerator Class.
 */
export default class SymmetricKeyGenerator {
    // created a salt for hashing of type string
    private readonly SALT: string = 'trea1ment_chain';

    // key length is to be 64
    private readonly KEY_LENGTH: number = 64;

    // hexadecimal encoding
    private readonly ENCODING: BufferEncoding = 'hex';

    // storing the hash in the string format
    private hash: string

    // crypto datatype will be same as the Object that is passed in the function below
    private crypto: any;

    /**
     * Constructor
     * @param cryptoObject the object specifies the crypto.
     * @param key the key.
     */
    public constructor(cryptoObject: any, key: string) {
        this.crypto = cryptoObject;
        this.hash = <string>new OneWayHash(cryptoObject, HASH_ALGORITHM.SHA384).getMessageDigest(key);
    }
    /**
     * Get the generated symmetric key.
     */
    public getSymmetricKey(): string {
        const symmetricKey = this.crypto.scryptSync(this.hash, this.SALT, this.KEY_LENGTH);
        return symmetricKey.toString(this.ENCODING);
    }
}