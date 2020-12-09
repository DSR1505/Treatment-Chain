export default class Patient {
    private _name: string;
    private
    public set name(n: string) {
        this._name = n;
    }
    public get name(): string {
        return this._name;
    }
    private age: number;
    public constructor(readonly id: string, readonly country: string) { }

}