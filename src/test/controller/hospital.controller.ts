import HospitalController from "../../main/controllers/hospital.controller";
import Hospital from "../../main/models/hospital.model";

export default class HospitalControllerTest {
    public static testModule(): void {
        const model = new Hospital('abc123', 'INDIA');
        const controller = new HospitalController(model);
        controller.registerHospital().then(result => {
            console.log(result);
        }).catch((err) => {
            console.error(err);
        })
    }
}