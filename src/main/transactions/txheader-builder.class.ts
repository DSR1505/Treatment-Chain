import { read } from "fs";

export default class transactionHeader {
    public readonly timestamp: number = new Date().getTime();
    private _transactionIdentifier: number;
    private _patientIdentifier: string;
}