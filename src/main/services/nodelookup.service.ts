import HospitalNode from "../dnet/models/hospitalnode.class";

export default class NodeLookupService {

    getNodes(): Promise<Array<HospitalNode>> {
        //TODO: async http request to seed nodes on DNS server
        return null;
    }
    isNodeFound(hospital: string, nodes: Array<HospitalNode>): boolean {
        //TODO:find the hospital is already registered or not
        // using the found list
        return undefined;

    }
    updateNodeDirectory(hospital: string): void {

        //TODO: do a DNS server call to update the list of running seed
        // by adding the this node.
    }
}
