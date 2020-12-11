import { rejects } from 'assert';
import Wallet from '../account/wallet.class';
import Hospital from '../models/hospital.model';
import HospitalService from '../services/find-hospitals.service';
import IKeyPair from '../utils/keypair.interface';
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
        const temp = await hospitalService.findHospital(this.hospital);
        console.log(temp);
        return new Promise<Hospital>((resolve, reject) => {
            if (temp.email !== undefined) {
                resolve(temp);
            }
            reject('Not Found');
        });

    }
}