import { KeyObject } from 'crypto';
export default interface IKeyPair {
    publicKey: KeyObject | string;
    privateKey: KeyObject | string;
}