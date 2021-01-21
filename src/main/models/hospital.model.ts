import GeographicLocation from "./location.model"; // getting the location and latitude of the hospital

/**
 * The Hospital Model Class
 */
export default class Hospital {

    private _name: string;                      // name of the hospital
    private _country: string;                   // country of the hospital
    private _id: string;                        // id of the hopital
    private _location: GeographicLocation;      // the location of the hospital | refer the location model
    private _email: string;                     // the email of the hospital

    /**
     * Getter function for ID.
     */
    public get id(): string {
        return this._id;
    }

    /**
     * Setter function for location
     * @param l location object (Longitude and Latitude)
     */
    public set location(l: GeographicLocation) {
        this._location = l;
    }

    /**
     * Getting the location.
     * @returns GeographicLocation location
     */
    public get location(): GeographicLocation {
        return this._location;
    }

    /**
     * Setter function for name
     * @param n name of the hospital
     */
    public set name(n: string) {
        this._name = n;
    }

    /**
     * getter function for name
     * @returns name of the hospital
     */
    public get name(): string {
        return this._name;
    }

    /**
     * Setter function for email
     * @param web  email
     */
    public set email(web: string) {
        this._email = web;
    }

    /**
     * getter function for email
     * @returns email as string
     */
    public get email(): string {
        return this._email;
    }

    /**
     * getter function for country
     * @returns country name
     */
    public get country(): string {
        return this._country;
    }

    /**
     * 
     * @param id the id of the hospital
     * @param country the name of the country
     */
    public constructor(id: string, country: string) {
        this._country = country;
        this._id = id;
    }

    // basically overwritten toString() function to stringyfy JSON
    public toString() {
        return JSON.stringify(this);
    }
}