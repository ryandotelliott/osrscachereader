export default class WorkerPool {
    constructor(size?: number);
    workers: {
        id: number;
        worker: Worker;
        active: boolean;
    }[];
    workQueue: any[];
    promises: any[];
    doWork(index: any, segment: any, archiveId: any, compressedData: any, key: any): any;
    finish(): void;
}
