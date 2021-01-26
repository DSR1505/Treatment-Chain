import { IDisease } from "../models/disease.interface";
import ITransaction from "./transaction.interface";

export default class TransactionHeaderBuilder {
    public readonly timestamp: number = new Date().getTime();
    private _transactionIdentifier: number;
    private _headerChecksum: string;
    private _dataChecksum: string;
    private _data: Array<ITransaction>;
    private _recipient: string;
    private _signer: string;
    private _type: IDisease;
}