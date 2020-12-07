import Configuration from "../config/config.class";
import { RESOURCES } from "../config/resource.enum";
import Hospital from "../models/hospital.model";
import * as https from 'https';
import { IncomingMessage } from "http";
import GeographicLocation from "../models/location.model";
export default class HospitalService {
    private serviceUrl: string;
    public constructor(country: string) {
        const config = new Configuration(RESOURCES.HOSPITAL_FINDER);
        this.serviceUrl = config.getValue(country);
    }
    public findHospital(hospital: Hospital): Hospital {
        // TODO: write logic to extract found hospital data using HTTPS request
        https.get(this.serviceUrl, (res: IncomingMessage) => {
            res.on("data", (chunk: any) => {
                const data: JSON = JSON.parse(chunk);
                if (data[hospital.id] !== undefined) {
                    hospital.location = new GeographicLocation(data['latitude'], data['longitude']);
                    hospital.website = data['website'];
                }
            });
        })
        return hospital;
    }
}