export default class GeographicLocation {
    private _latitude: number;
    private _longitude: number;
    public get latitude(): number {
        return this._latitude;
    }
    public set latitude(l: number) {
        this._latitude = l;
    }
    public get longitude(): number {
        return this._longitude;
    }
    public set longitude(l: number) {
        this._longitude = l;
    }
    public constructor(readonly la: number, readonly lo: number) {
        this.latitude = la;
        this.longitude = lo;
    }
}