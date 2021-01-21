import Patient from "../models/patient.model";
import PersonService from "../services/find-person.service";
export default class PatientController {
    public constructor(readonly patient: Patient) { }
    private async findPatient(): Promise<Patient> {
        const response = await new PersonService(this.patient.id, this.patient.country).findPerson();
        return new Promise((resolve) => {
            if (response !== undefined) {
                for (let [key, value] of response) {
                    this.patient.updateDetail(key, value);
                    resolve(this.patient);
                }
            } else {
                resolve(undefined);
            }
        });
    }
    public admitPatient(): boolean {
        this.findPatient().then((patient) => {
            if (patient && patient.disease.isDiagnosed()) {
                // create the transaction with the data;
                
            }
        })
        return false;

    }

}