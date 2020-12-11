import Configuration from "../config/config.class";
import { RESOURCES } from "../config/resource.enum";
import Hospital from "../models/hospital.model";
import https = require('https');
import { IncomingMessage } from "http";
import GeographicLocation from "../models/location.model";
export default class HospitalService {
    private serviceUrl: string;
    public constructor(country: string) {
        const config = new Configuration(RESOURCES.SYSTEM_CONFIG);
        this.serviceUrl = config.getValue("HOSPITAL_ENDPOINT") + config.getValue("COUNTRIES")[country];
    }
    public findHospital(hospital: Hospital): Promise<Hospital> {
        return new Promise<Hospital>((resolve, reject) => {
            const options: https.RequestOptions = {
                hostname: "treatmentchain-8a14.restdb.io",
                path: "/rest/hospital-india?identification_number=" + hospital.id,
                headers: {
                    'x-apikey': 'cf0ccee45de3036fdb005d2048b8ea4b21203',
                    'cache-control': 'no-cache',
                    'content-type': 'application/json'
                },
                method: 'GET'
            }
            const request = https.request(options, (res) => {
                console.log(res.statusCode);
                let found;
                res.on('data', (chunk) => {
                    found = chunk.toString();
                });
                res.on('error', (err: Error) => {
                    reject(err);
                });
                res.on('close', () => {
                    hospital.location = new GeographicLocation(found['latitude'], found['longitude']);
                    hospital.email = found['email'];
                    resolve(hospital);
                })
            });

        });
    }
}