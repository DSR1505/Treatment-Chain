import { RESOURCES } from "./resource.enum";
import * as fileSystem from 'fs';
/**
 * It will read files and return the value.
 */
export default class Configuration {
    // defining the encoding as utf-8.
    private readonly ENCODING: BufferEncoding = 'utf8';

    // _config variable having datatype as JSON.
    private _config: JSON;

    // setter function for config
    private set config(c: JSON) {
        this._config = c;
    }

    // getter function for config
    private get config(): JSON {
        return this._config;
    }

    // constructor
    // we are loading the config file from the resource path mentioned /res/resource.enum.*
    public constructor(resource: RESOURCES) {
        this.config = this.loadConfigResource(resource); // this function is defined in the below line.
    }

    // the loadConfigResource function performs the task of reading the config file in the 
    // mentioned path.
    private loadConfigResource(resource: RESOURCES): JSON {
        const temp = fileSystem.readFileSync(resource, { encoding: this.ENCODING });
        return JSON.parse(String(temp));
    }

    // commiting the resource usually means writing the config file
    private commitResource(resource: RESOURCES): void {
        fileSystem.writeFileSync(resource, JSON.stringify(this.config));
    }

    // getter function for config key
    public getValue(key: string): string {
        return this.config[key];
    }

    // setter function for config key
    public setValue(resource: RESOURCES, key: string, value: string) {
        this.config[key] = value;
        // after the config key value is set we need to write this value to the config file
        this.commitResource(resource);
    }

}