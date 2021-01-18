import { IDatabase } from "./database.interface";

export default class RedisDatabase implements IDatabase {
    connect(): boolean {
        throw new Error("Method not implemented.");
    }
    create(): boolean {
        throw new Error("Method not implemented.");
    }
    read() {
        throw new Error("Method not implemented.");
    }
    append(data: any): boolean {
        throw new Error("Method not implemented.");
    }
    close(): boolean {
        throw new Error("Method not implemented.");
    }

}