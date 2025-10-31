export default Index;
/**
 * An index from the cache
 * @category Cache Types
 * @hideconstructor
 */
declare class Index {
    constructor(id: any);
    /**
     * The ID of this Index
     * @type {number}
     */
    id: number;
    /** @type {number} */
    protocol: number;
    /** @type {number} */
    revision: number;
    /** @type {number} */
    flags: number;
    /** @type {number} */
    crc: number;
    /** @type {boolean} */
    sized: boolean;
    /** @type {boolean} */
    named: boolean;
    /**
     * Total amount of archives
     * @type {number}
     */
    archivesCount: number;
    /**
     * Dictionary containing archives. Key is the ID of the archive.
     * @type {Object}
     */
    archives: any;
    /**
     * Used for loading files for archives
     * @type {Array}
     */
    indexSegments: any[];
    loadIndexData(data: any): void;
    /**
     * Get an Archive from this Index
     * @param {Number} archive A number or can be a ConfigType if the IndexType is CONFIGS
     * @returns [Archive]{@link Archive}
     */
    getArchive(archive: number): number;
    toString(): number;
}
