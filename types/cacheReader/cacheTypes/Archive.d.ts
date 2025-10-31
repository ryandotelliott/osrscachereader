export default Archive;
/**
 * An archive from an index
 * @category Cache Types
 * @hideconstructor
 */
declare class Archive {
    /**
     * The ID of the file
     * @type {number}
     */
    id: number;
    name: string;
    /** @type {number} */
    hash: number;
    /**
     * Hashed name of the archive. Hashes can be brute forced or cracked hashes can be found online
     * @type {number}
     */
    nameHash: number;
    /** @type {number} */
    crc: number;
    /** @type {number} */
    revision: number;
    filesLoaded: boolean;
    /**
     * The files containing definitions within the archive
     * @type {Array}
     */
    files: any[];
    loadFiles(data: any): void;
}
