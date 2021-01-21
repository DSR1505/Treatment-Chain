import Configuration from "../config/config.class";
import { RESOURCES } from "../config/resource.enum";
import https = require('https');
export default class HospitalService {

    private serviceUrl: string;
    /**
     * The constructor
     * @param country the country name
     */
    public constructor(country: string) {
        const config = new Configuration(RESOURCES.SYSTEM_CONFIG);
        this.serviceUrl = config.getValue("HOSPITAL_ENDPOINT") + config.getValue("COUNTRIES")[country];
    }
    /**
     * Finding Hospital by id in the network
     * @param id id of the hospital
     */
    public findHospital(id: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            
            // setting header and other options along with the requests
            const options: https.RequestOptions = {
                hostname: "treatmentchain-8a14.restdb.io",
                path: "/rest/hospital-india?q={\"identification_number\":\"" + id + "\"}",
                headers: {
                    'x-apikey': 'cf0ccee45de3036fdb005d2048b8ea4b21203',
                },
            }
            // sending request to the given path to validate the hospital id
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