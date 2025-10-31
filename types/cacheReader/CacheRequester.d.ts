export default class CacheRequester {
    constructor(datFile: any);
    workerPool: WorkerPool;
    promises: {};
    datData: any;
    setXteas(xteas: any): void;
    xteas: any;
    readDataThreaded(index: any, size: any, segment: any, archiveId?: number): any;
    readData(index: any, size: any, segment: any, archiveId: number, keys: any): Promise<any>;
    readSector(buffer: any, pos: any, archiveId: any): void;
    decrypt(data: any, len: any, key: any): any;
}
import WorkerPool from "./WorkerPool.js";
