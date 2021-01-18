import { Serializer } from "v8";

export default abstract class Person {
    private details: Map<string, string>;
    public constructor(readonly id: string, readonly country: string) {
        this.details.set('id', id);
        this.details.set('country', country);
    }
    public updateDetail(key: string, value: string): void {
        this.details.set(key, value);
    }
    public isEmpty(): boolean {
        return this.details.size === 0;
    }
}