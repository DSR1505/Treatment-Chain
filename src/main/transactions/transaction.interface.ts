import { IDisease } from "../models/disease.interface";
import TransactionHeader from "./transaction-header.class";
import { Verifier } from "./verification/verifier.type";

export default interface ITransaction {
    transactionHeader: TransactionHeader;
    transactionData: IDisease;
    readonly verifiers: Array<Verifier>;
}