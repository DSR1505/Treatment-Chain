import Hospital from '../models/hospital.model';
import GeographicLocation from '../models/location.model';
import HospitalService from '../services/find-hospitals.service';
export default class HospitalController {
    private _hospital: Hospital;
    public set hospital(h: Hospital) {
        this._hospital = h;
    }
    public get hospital(): Hospital {
        return this._hospital;
    }
    public constructor(hospital: Hospital) { this.hospital = hospital }

    public async registerHospital(): Promise<Hospital> {
        const hospitalService: HospitalService = new HospitalService(this.hospital.country);
        const result = await hospitalService.findHospital(this.hospital.id);
        return new Promise<Hospital>((resolve, reject) => {
            const response = JSON.parse(result);
            this.hospital.name = response[0]['name'];
            this.hospital.location = new GeographicLocation(response[0]['latitude'], response[0]['longitude']);
            this.hospital.email = response[0]['email']
            if (this.hospital.name === undefined) {
                resolve(null);
            } else {
                resolve(this.hospital);
            }
            reject('Not Found');
        });
    }
}