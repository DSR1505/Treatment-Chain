/**
 * The GeographicLocation Model Class
 */
export default class GeographicLocation {
    /**
     * The constructor
     * @param latitude the latitude of the hospital
     * @param longitude the longitude of the hospital
     */
    public constructor(readonly latitude: number, readonly longitude: number) { }
}