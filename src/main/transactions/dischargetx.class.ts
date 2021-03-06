import { IDisease } from "../models/disease.interface";
import transactionHeaderClass from "./transaction-header.class";
import ITransaction from "./transaction.interface";
import { Verifier } from "./verification/verifier.type";

export default class DischargeTransaction implements ITransaction {
    transactionHeader: transactionHeaderClass;
    transactionData: IDisease;
    verifiers: Verifier[];

}