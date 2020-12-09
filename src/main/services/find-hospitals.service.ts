import Configuration from "../config/config.class";
import { RESOURCES } from "../config/resource.enum";
import Hospital from "../models/hospital.model";
import * as https from 'https';
import { IncomingMessage } from "http";
import GeographicLocation from "../models/location.model";
export default class HospitalService {
    private serviceUrl: string;
    public constructor(country: string) {
        const config = new Configuration(RESOURCES.SYSTEM_CONFIG);
        this.serviceUrl = config.getValue(country);
    }
    public findHospital(hospital: Hospital): void {
        // TODO: write logic to extract found hospital data using HTTPS request

    }
}