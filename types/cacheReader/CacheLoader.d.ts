export default class CacheLoader {
    constructor(path: any, onDownloadProgress: any);
    onDownloadProgress: any;
    datFile: string;
    indexFiles: string[];
    promises: {
        datFile: any;
        indexFiles: any[];
        xteas: any;
    };
    cachePromise: Promise<any>;
    cachePromiseResolve: any;
    getResults(): Promise<any>;
    isValidHttpUrl(path: any): boolean;
    handleZip(zipBufferPromise: any): void;
    loadByVersion(version: any): void;
    loadByTimestamp(timestamp: any): void;
    fetchURL(url: any): void;
    loadFile(path: any): void;
    readXteas(xteasData: any): {};
}
