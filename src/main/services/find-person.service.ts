import Person from "../models/person.model";
import https = require('https');
export default class PersonService {
    private readonly options: https.RequestOptions = {
        hostname: "treatmentchain-8a14.restdb.io",
        path: "/rest/citizen-india?q={\"uid\":\"" + this.id + "\"}",
        headers: {
            'x-apikey': 'cf0ccee45de3036fdb005d2048b8ea4b21203',
        },
    };
    public constructor(readonly id: string, readonly country: string) { }
    public findPerson(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            const request = https.get(this.options, (res) => {
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });
                res.on('end', () => {
                    resolve(data);
                });
            });
            request.on('error', (err) => {
                reject(err);
            });
        })
    }
}