export interface IDatabase {
    connect(): boolean;
    create(): boolean;
    read(): any;
    append(data: any): boolean;
    close(): boolean;
}