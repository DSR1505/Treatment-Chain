import Hospital from '../models/hospital.model';
import GeographicLocation from '../models/location.model';
import HospitalService from '../services/find-hospitals.service';
export default class HospitalController {

    private _hospital: Hospital;        // hospital local object

    // setter function
    public set hospital(h: Hospital) {
        this._hospital = h;
    }
    // getter function
    public get hospital(): Hospital {
        return this._hospital;
    }

    /**
     * The Constructor
     * @param hospital passing hospital object
     */
    public constructor(hospital: Hospital) { this.hospital = hospital }


    // The registerHospital Function.
    // this is an asynchronous function.
    // returns a Promise of Type Hospital
    public async registerHospital(): Promise<Hospital> {

        // Creating instance of hospitalService and passing the hospital country 
        // find this service inside the line 11 in service folder in this same folder
        const hospitalService: HospitalService = new HospitalService(this.hospital.country);

        // checking if an hospital exists with given id.
        // save it into result variable
        const result = await hospitalService.findHospital(this.hospital.id);

        // returning the new Promise
        return new Promise<Hospital>((resolve, reject) => {
            
            // parsing the entire result into JSON and storing it in response
            const response = JSON.parse(result);

            // getting back individual values using arrays
            this.hospital.name = response[0]['name'];
            this.hospital.location = new GeographicLocation(response[0]['latitude'], response[0]['longitude']);
            this.hospital.email = response[0]['email']

            // if there is no hospital name for that id
            if (this.hospital.name === undefined) {
                resolve(null);
            } else {
                // if there exists a hospital name for the id.
                resolve(this.hospital);
            }
            reject('Not Found'); // if hospital not found for that id
        });
    }
}