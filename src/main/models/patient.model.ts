import { IDisease } from "./disease.interface";
import Person from "./person.model";

export default class Patient extends Person {
    private _disease: IDisease;
    public get disease(): IDisease {
        return this._disease;
    }
    public constructor(readonly id: string, readonly country: string, disease: IDisease) {
        super(id, country);
        this._disease = disease;
    }

    public toString(): string {
        return JSON.stringify(this);
    }
}