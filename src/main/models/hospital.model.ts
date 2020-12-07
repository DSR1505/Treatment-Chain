import GeographicLocation from "./location.model";
export default class Hospital {
    private _name: string;
    private _country: string;
    private _id: string;
    private _location: GeographicLocation;
    private _website: string;
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
    public set website(web: string) {
        this._website = web;
    }
    public get website(): string {
        return this._website;
    }
    public set country(ctry: string) {
        this._country = ctry;
    }
    public get country(): string {
        return this._country;
    }
    public constructor(nm: string, cntry: string, i: string) {
        this.name = nm;
        this.country = cntry;
        this._id = i;
    }
    public toString() {
        return JSON.stringify(this);
    }
}