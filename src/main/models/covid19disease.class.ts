import { IDisease } from "./disease.interface";

export default class Covid19Disease implements IDisease {
    public readonly name = 'COVID-19';
    public readonly threshold: number = 120;
    public readonly readings: Array<number>;
    public readonly readingCount = 35;
    public constructor(readings: Array<number>) {
        this.readings = readings;
    }
    public isDiagnosed(): boolean {
        let count = 0;
        for (let i = 0; i < this.readingCount; ++i) {
            if (this.readings[i] >= this.threshold) count++;

        }
        if (count >= this.readingCount * 0.5) {
            return true;
        }
        return false;
    }
}