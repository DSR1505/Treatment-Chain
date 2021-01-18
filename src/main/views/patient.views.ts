import readlineSync = require('readline-sync');
import Covid19Disease from '../models/covid19disease.class';
import { IDisease } from '../models/disease.interface';
import Patient from '../models/patient.model';
import PersonService from '../services/find-person.service';
export default class PatientView {
    public static admitView(): Patient {
        const id: string = readlineSync.question('Enter the id of patient:');
        const country: string = readlineSync.question('Enter the country of the patient:');
        const disease: IDisease = new Covid19Disease(new Array<number>());
        const model = new Patient(id, country, disease);

        return model;
    }

}