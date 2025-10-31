/**
 * Union type of all known definitions produced by loaders
 * @typedef {(
 *  import("../loaders/ModelLoader.js").ModelDefinition |
 *  import("../loaders/FramesLoader.js").FramesDefinition |
 *  import("../loaders/FramemapLoader.js").FramemapDefinition |
 *  import("../loaders/TextureLoader.js").TextureDefinition |
 *  import("../loaders/SpriteLoader.js").Sprite |
 *  import("../loaders/SequenceLoader.js").SequenceDefinition |
 *  import("../loaders/SpotAnimLoader.js").SpotAnimDefinition |
 *  import("../loaders/UnderlayLoader.js").UnderlayDefinition |
 *  import("../loaders/OverlayLoader.js").OverlayDefinition |
 *  import("../loaders/ObjectLoader.js").ObjectDefinition |
 *  import("../loaders/NpcLoader.js").NpcDefinition |
 *  import("../loaders/ItemLoader.js").ItemDefinition |
 *  import("../loaders/MapLoader.js").MapDefinition |
 *  import("../loaders/MapLoader.js").LocationDefinition |
 *  import("../loaders/AnimayaLoader.js").AnimayaDefinition |
 *  import("../loaders/GameValLoader.js").GameValDefinition |
 *  import("../loaders/MusicTrackLoader.js").MusicTrackDefinition |
 *  import("../loaders/RawByteLoader.js").RawBytesDefinition |
 *  import("../loaders/KitLoader.js").KitDefinition
 * )} Definition
 */

/**
 * A file fom an archive
 * @category Cache Types
 * @property {Array} content Byte array of content to be loaded into a definition
 * @hideconstructor
 */
class File {
    constructor(id) {
        /**
         * The ID of the file
         * @type {number}
         */
        this.id = id;

        this.name = "";

        /**
         * The definition that is loaded from the content array
         * @type {Definition}
         */
        this.def = undefined;

        /**
         * @type {number}
         */
        this.nameHash = 0;

        /**
         * @type {number}
         */
        this.size = 0;

        /**
         * Byte array of content to be loaded into a definition
         * @type {Array}
         */
        this.content = [];
    }
}

export default File;
