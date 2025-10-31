export default class CacheDefinitionLoader {
    constructor(indexId: any, archive: any, options?: {});
    indexType: import("./cacheTypes/IndexType.js").IndexTypeEntry;
    archive: any;
    options: {};
    loader: any;
    loadAllFiles(rscache: any): Promise<any>;
    loadFile(fileId: any, rscache: any): Promise<any>;
    #private;
}
