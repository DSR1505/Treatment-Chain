import Wallet from '../account/wallet.class';
import Hospital from '../models/hospital.model';
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
    public registerHospital(crypto: any, password: string): Promise<Wallet> {
        const hospitalService: HospitalService = new HospitalService("India");
        // this.hospital = hospitalService.findHospital(this.hospital);
        return new Promise<Wallet>((resolve, reject) => {
            if (this.hospital.location == undefined) {
                reject("Unable to locate hospital");
            }
            const wallet = new Wallet(crypto, password);
            resolve(wallet);
        })

    }

}