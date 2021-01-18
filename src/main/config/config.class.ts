import { RESOURCES } from "./resource.enum";
import * as fileSystem from 'fs';
/**
 * It will read files and return the value.
 */
export default class Configuration {
    private readonly ENCODING: BufferEncoding = 'utf8';
    private _config: JSON;
    private set config(c: JSON) {
        this._config = c;
    }
    private get config(): JSON {
        return this._config;
    }
    public constructor(resource: RESOURCES) {
        this.config = this.loadConfigResource(resource);
    }
    private loadConfigResource(resource: RESOURCES): JSON {
        const temp = fileSystem.readFileSync(resource, { encoding: this.ENCODING });
        return JSON.parse(String(temp));
    }
    private commitResource(resource: RESOURCES): void {
        fileSystem.writeFileSync(resource, JSON.stringify(this.config));
    }
    public getValue(key: string): string {
        return this.config[key];
    }
    public setValue(resource: RESOURCES, key: string, value: string) {
        this.config[key] = value;
        this.commitResource(resource);
    }

}