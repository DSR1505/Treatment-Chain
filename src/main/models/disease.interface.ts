import { read } from "fs";

export interface IDisease {
    readonly name: string;
    readonly readings: Array<number>;
    readonly readingCount: number;
    readonly threshold: number;
    isDiagnosed(): boolean;
}