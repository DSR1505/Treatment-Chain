import Hospital from "../../main/models/hospital.model";
import HospitalService from "../../main/services/find-hospitals.service";

export default class HospitalServiceTest {
    public static testModule(): void {
        const hospital = new Hospital('abc123', 'INDIA');
        const module = new HospitalService(hospital.country);
        module.findHospital(hospital.id).then((result) => {
            console.log(JSON.parse(result));
        })
    }
}