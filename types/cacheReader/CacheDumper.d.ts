export default class CacheDumper {
    constructor(rscache: any, outFolder: any, ignoreList: any, progressFunction?: () => void);
    ignoreList: any[];
    cache: any;
    outFolder: any;
    progressFunction: () => void;
    completedJobs: number;
    failedJobs: number;
    totalJobs: number;
    outFolderCheck(): void;
    dumpAll(): Promise<void>;
    updateProgress(jobSuccess: any): void;
    dumpConfig(configInfo: any, name: any): Promise<void>;
    dumpIndex(indexInfo: any, name: any): Promise<void>;
    dumpArchives(indexInfo: any, name: any, archiveId: any): Promise<void>;
}
