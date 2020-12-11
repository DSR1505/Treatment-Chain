import Hospital from "../../main/models/hospital.model";
import HospitalService from "../../main/services/find-hospitals.service";

export default class HospitalServiceTest {
    public static testModule(): void {
        const hospital = new Hospital('NAME', 'INDIA', 'abc123');
        const module = new HospitalService(hospital.country);
        module.findHospital(hospital).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.error(err);
        })
    }
}