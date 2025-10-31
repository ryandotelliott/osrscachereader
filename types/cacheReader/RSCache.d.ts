export default RSCache;
export type options = {
    /**
     * Use a Web Worker to read from the cache. Slower than non-threaded since threading overhead is big. Useful for web apps to have a responsive UI
     */
    threaded: boolean;
    /**
     * Used while loading animations. Uses a different loading method for Animaya animations. OSRSCacheReader sets this internally on it's own if using ModelDefinition's loadAnimation method
     */
    isAnimaya: boolean;
    /**
     * Used while loading Animaya animations. Stops the reader early to just get the skeleton info
     */
    earlyStop: boolean;
    /**
     * Used while loading Texture defs. Automatically grabs the corresponding sprite file
     */
    loadSprites: boolean;
    /**
     * Save def on archive file after decompressing contents. Useful for quicker loading if loading the same thing multiple times but also can increase memory usage
     */
    cacheResults: boolean;
};
export type ItemDefinition = import("./loaders/ItemLoader.js").ItemDefinition;
export type NpcDefinition = import("./loaders/NpcLoader.js").NpcDefinition;
export type ObjectDefinition = import("./loaders/ObjectLoader.js").ObjectDefinition;
export type File = import("./cacheTypes/File.js").default;
export type Index = import("./cacheTypes/Index.js").default;
/**
 * Union type of all known definitions produced by loaders
 */
export type Definition = (import("./loaders/ModelLoader.js").ModelDefinition | import("./loaders/FramesLoader.js").FramesDefinition | import("./loaders/FramemapLoader.js").FramemapDefinition | import("./loaders/TextureLoader.js").TextureDefinition | import("./loaders/SpriteLoader.js").Sprite | import("./loaders/SequenceLoader.js").SequenceDefinition | import("./loaders/SpotAnimLoader.js").SpotAnimDefinition | import("./loaders/UnderlayLoader.js").UnderlayDefinition | import("./loaders/OverlayLoader.js").OverlayDefinition | import("./loaders/ObjectLoader.js").ObjectDefinition | import("./loaders/NpcLoader.js").NpcDefinition | import("./loaders/ItemLoader.js").ItemDefinition | import("./loaders/MapLoader.js").MapDefinition | import("./loaders/MapLoader.js").LocationDefinition | import("./loaders/AnimayaLoader.js").AnimayaDefinition | import("./loaders/GameValLoader.js").GameValDefinition | import("./loaders/MusicTrackLoader.js").MusicTrackDefinition | import("./loaders/RawByteLoader.js").RawBytesDefinition | import("./loaders/KitLoader.js").KitDefinition);
/**
 * @typedef options
 * @property {boolean} threaded Use a Web Worker to read from the cache. Slower than non-threaded since threading overhead is big. Useful for web apps to have a responsive UI
 * @property {boolean} isAnimaya Used while loading animations. Uses a different loading method for Animaya animations. OSRSCacheReader sets this internally on it's own if using ModelDefinition's loadAnimation method
 * @property {boolean} earlyStop Used while loading Animaya animations. Stops the reader early to just get the skeleton info
 * @property {boolean} loadSprites Used while loading Texture defs. Automatically grabs the corresponding sprite file
 * @property {boolean} cacheResults Save def on archive file after decompressing contents. Useful for quicker loading if loading the same thing multiple times but also can increase memory usage
 */
/** @typedef {import("./loaders/ItemLoader.js").ItemDefinition} ItemDefinition */
/** @typedef {import("./loaders/NpcLoader.js").NpcDefinition} NpcDefinition */
/** @typedef {import("./loaders/ObjectLoader.js").ObjectDefinition} ObjectDefinition */
/** @typedef {import("./cacheTypes/File.js").default} File */
/** @typedef {import("./cacheTypes/Index.js").default} Index */
/**
 * Union type of all known definitions produced by loaders
 * @typedef {(
 *  import("./loaders/ModelLoader.js").ModelDefinition |
 *  import("./loaders/FramesLoader.js").FramesDefinition |
 *  import("./loaders/FramemapLoader.js").FramemapDefinition |
 *  import("./loaders/TextureLoader.js").TextureDefinition |
 *  import("./loaders/SpriteLoader.js").Sprite |
 *  import("./loaders/SequenceLoader.js").SequenceDefinition |
 *  import("./loaders/SpotAnimLoader.js").SpotAnimDefinition |
 *  import("./loaders/UnderlayLoader.js").UnderlayDefinition |
 *  import("./loaders/OverlayLoader.js").OverlayDefinition |
 *  import("./loaders/ObjectLoader.js").ObjectDefinition |
 *  import("./loaders/NpcLoader.js").NpcDefinition |
 *  import("./loaders/ItemLoader.js").ItemDefinition |
 *  import("./loaders/MapLoader.js").MapDefinition |
 *  import("./loaders/MapLoader.js").LocationDefinition |
 *  import("./loaders/AnimayaLoader.js").AnimayaDefinition |
 *  import("./loaders/GameValLoader.js").GameValDefinition |
 *  import("./loaders/MusicTrackLoader.js").MusicTrackDefinition |
 *  import("./loaders/RawByteLoader.js").RawBytesDefinition |
 *  import("./loaders/KitLoader.js").KitDefinition
 * )} Definition
 */
/**
 * Creates a RSCache reader
 * @category Base
 * @param {string} cacheRootDir This can either be a URL, local file path, version number, Date object, or the string 'latest'. If it is a URL or file path it should point to the root of the cache folder or a zip file containing a cache folder such as from https://archive.openrs2.org/
 * @param {function(number):void} progressFunc Progress function callback. Passes 1 parameter which is the amount of progress from the last step (not total progress)
 *
 * @example <caption>Load by URL</caption>
 * let cache = new RSCache("https://runemonk.com/cache/");
 *
 * @example <caption>Load by URL Zip</caption>
 * let cache = new RSCache("https://archive.openrs2.org/caches/runescape/1718/disk.zip");
 *
 * @example <caption>Load by File Path</caption>
 * let cache = new RSCache("./cache/");
 *
 * @example <caption>Load by File Path Zip</caption>
 * let cache = new RSCache("./cache.zip");
 *
 * @example <caption>Load by Version Number</caption>
 * let cache = new RSCache(220);
 *
 * @example <caption>Load latest</caption>
 * let cache = new RSCache('latest');
 *
 * @example <caption>Load by Date</caption>
 * let cache = new RSCache(new Date("Jan 1 2024"));
 */
declare class RSCache {
    constructor(cacheRootDir: any, progressFunc?: () => void);
    indicies: {};
    progressFunc: () => void;
    onload: Promise<void>;
    cacheRequester: CacheRequester;
    /**
     * Get a cache Index file.
     * @method
     * @param {(Number | IndexType)} index
     * @returns {Index}
     */
    getIndex(index: (number | import("./cacheTypes/IndexType.js").IndexType)): Index;
    readPromises: {};
    /**
     * Gets all of the files from an archive and loads their definitions if possible.
     * @param {(Number | IndexType)} indexId Can be a number or IndexType
     * @param {(Number)} archiveId Can be a number but also can be a ConfigType if IndexType is CONFIG
     * @param {options} options
     * @returns {Promise<File[]>}
     */
    getAllFiles(indexId: (number | import("./cacheTypes/IndexType.js").IndexType), archiveId: (number), options?: options): Promise<File[]>;
    /**
     * Gets a single file from an archive and load its definition if possible.
     * @param {(Number | IndexType)} indexId Can be a number or IndexType
     * @param {(Number)} archiveId Can be a number but also can be a ConfigType if IndexType is CONFIG
     * @param {Number} fileId Id of the file to get from the archive
     * @param {options} options
     * @returns {Promise<File>}
     */
    getFile(indexId: (number | import("./cacheTypes/IndexType.js").IndexType), archiveId: (number), fileId?: number, options?: options): Promise<File>;
    /**
     * Helper method to map getAllFiles results to definitions
     * @param {(Number | IndexType)} indexId Can be a number or IndexType
     * @param {(Number)} archiveId Can be a number but also can be a ConfigType if IndexType is CONFIG
     * @param {options} options
     * @returns {Promise<Definition[]>}
     */
    getAllDefs(indexId: (number | import("./cacheTypes/IndexType.js").IndexType), archiveId: (number), options?: options): Promise<Definition[]>;
    /**
     * Helper method to map getFile results to its definition
     * @param {(Number | IndexType)} indexId Can be a number or IndexType
     * @param {(Number)} archiveId Can be a number but also can be a ConfigType if IndexType is CONFIG
     * @param {Number} fileId Id of the definition to get from the archive
     * @param {options} options
     * @returns {Promise<Definition>}
     */
    getDef(indexId: (number | import("./cacheTypes/IndexType.js").IndexType), archiveId: (number), fileId?: number, options?: options): Promise<Definition>;
    /**
     * Helper method to get a NPC definition
     * @param {Number} id NPC Id
     * @param {options} options
     * @returns {Promise<NpcDefinition>}
     */
    getNPC(id: number, options?: options): Promise<NpcDefinition>;
    /**
     * Helper method to get an Item definition
     * @param {Number} id Item Id
     * @param {options} options
     * @returns {Promise<ItemDefinition>}
     */
    getItem(id: number, options?: options): Promise<ItemDefinition>;
    /**
     * Helper method to get an Object definition
     * @param {Number} id Object Id
     * @param {options} options
     * @returns {Promise<ObjectDefinition>}
     */
    getObject(id: number, options?: options): Promise<ObjectDefinition>;
    /**
     * Get map location definition for region
     * @returns {Promise<Definition>}
     */
    getLoc(x: any, y: any): Promise<Definition>;
    /**
     * Get map terrain definition for region
     * @returns {Promise<Definition>}
     */
    getMap(x: any, y: any): Promise<Definition>;
    /** Closes the cache and cleans up the web worker pool */
    close(): void;
    indexPromises: Promise<any>[];
    #private;
}
import CacheRequester from "./CacheRequester.js";
import Index from "./cacheTypes/Index.js";
