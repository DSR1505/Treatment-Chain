import Configuration from "../config/config.class";
import { RESOURCES } from "../config/resource.enum";
import https = require('https');
export default class HospitalService {
    private serviceUrl: string;
    public constructor(country: string) {
        const config = new Configuration(RESOURCES.SYSTEM_CONFIG);
        this.serviceUrl = config.getValue("HOSPITAL_ENDPOINT") + config.getValue("COUNTRIES")[country];
    }
    public findHospital(id: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            const options: https.RequestOptions = {
                hostname: "treatmentchain-8a14.restdb.io",
                path: "/rest/hospital-india?q={\"identification_number\":\"" + id + "\"}",
                headers: {
                    'x-apikey': 'cf0ccee45de3036fdb005d2048b8ea4b21203',
                },
            }
            const request = https.request(options, (res) => {
                let temp = '';
                res.on('data', (chunk) => {
                    temp += chunk;
                });
                res.on('end', () => {
                    resolve(temp);
                });
            });
            request.on('error', (err) => {
                reject(err);
            });
            request.end();
        });
    }
}