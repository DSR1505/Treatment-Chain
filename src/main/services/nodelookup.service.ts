import Configuration from "../config/config.class";
import { RESOURCES } from "../config/resource.enum";
import HospitalNode from "../dnet/models/hospitalnode.class";

export default class NodeLookupService {
    private serviceUrl: string;
    public constructor() {
        const config = new Configuration(RESOURCES.SYSTEM_CONFIG);
        this.serviceUrl = config.getValue('NODE_DNS');
    }
    public getNodes(): Promise<Array<HospitalNode>> {
        //TODO: async http request to seed nodes on DNS server
        return null;
    }
    public isNodeFound(hospital: string, nodes: Array<HospitalNode>): boolean {
        //TODO:find the hospital is already registered or not
        // using the found list
        return undefined;

    }
    public updateNodeDirectory(hospital: string): void {

        //TODO: do a DNS server call to update the list of running seed
        // by adding the this node.
    }
}
