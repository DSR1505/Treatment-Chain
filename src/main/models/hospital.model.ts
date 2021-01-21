import GeographicLocation from "./location.model";
export default class Hospital {
    private _name: string;
    private _country: string;
    private _id: string;
    private _location: GeographicLocation;
    private _email: string;
    public get id(): string {
        return this._id;
    }
    public set location(l: GeographicLocation) {
        this._location = l;
    }
    public get location(): GeographicLocation {
        return this._location;
    }
    public set name(n: string) {
        this._name = n;
    }
    public get name(): string {
        return this._name;
    }
    public set email(web: string) {
        this._email = web;
    }
    public get email(): string {
        return this._email;
    }
    public get country(): string {
        return this._country;
    }
    public constructor(id: string, country: string) {
        this._country = country;
        this._id = id;
    }
    public toString() {
        return JSON.stringify(this);
    }
}