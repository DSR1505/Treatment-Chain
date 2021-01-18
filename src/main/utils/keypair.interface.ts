import { KeyObject } from "crypto";

export default interface IKeyPair {
    publicKey: KeyObject;
    privateKey: KeyObject;
}