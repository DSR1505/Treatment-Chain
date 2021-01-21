export default class ResearchInstitute {
    private _name: string;
    private _location: Location;
    private _email: string;
    public set name(n: string) {
        this._name = n;
    }
    public get name(): string {
        return this._name;
    }
    public set location(loc: Location) {
        this._location = loc;
    }
    public get location(): Location {
        return this._location;
    }
    public set email(mail: string) {
        this._email = mail;
    }
    public get email(): string {
        return this._email;
    }
    constructor(readonly id: string, readonly country: string) { }
    public toString(): string {
        return JSON.stringify(this);
    }
}