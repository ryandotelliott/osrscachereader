import FramemapLoader from "../loaders/FramemapLoader.js";
import FramesLoader from "../loaders/FramesLoader.js";
import MapLoader from "../loaders/MapLoader.js";
import ModelLoader from "../loaders/ModelLoader.js";
import SpriteLoader from "../loaders/SpriteLoader.js";
import TextureLoader from "../loaders/TextureLoader.js";
import MusicTrackLoader from "../loaders/MusicTrackLoader.js";
import AnimayaLoader from "../loaders/AnimayaLoader.js";

/**
 * A single IndexType entry
 * @typedef {Object} IndexTypeEntry
 * @property {number} id Numeric index id
 * @property {any} loader Loader class for this index (if available)
 */

/**
 * All valid IndexType keys
 * @typedef {(
 *  'FRAMES'|
 *  'FRAMEMAPS'|
 *  'CONFIGS'|
 *  'INTERFACES'|
 *  'SOUNDEFFECTS'|
 *  'MAPS'|
 *  'TRACK1'|
 *  'MODELS'|
 *  'SPRITES'|
 *  'TEXTURES'|
 *  'BINARY'|
 *  'TRACK2'|
 *  'CLIENTSCRIPT'|
 *  'FONTS'|
 *  'VORBIS'|
 *  'INSTRUMENTS'|
 *  'WORLDMAP'|
 *  'UKNOWN1'|
 *  'UKNOWN2'|
 *  'UKNOWN3'|
 *  'UKNOWN4'|
 *  'KEYFRAMES'
 * )} IndexTypeKey
 */

/**
 * Enum-like map of Index types.
 * @typedef {Object} IndexType
 * @property {IndexTypeEntry} FRAMES Animations
 * @property {IndexTypeEntry} FRAMEMAPS Skeletons
 * @property {IndexTypeEntry} CONFIGS Configs
 * @property {IndexTypeEntry} INTERFACES Interfaces
 * @property {IndexTypeEntry} SOUNDEFFECTS Sound FX
 * @property {IndexTypeEntry} MAPS Maps
 * @property {IndexTypeEntry} TRACK1 Music Tracks
 * @property {IndexTypeEntry} MODELS Models
 * @property {IndexTypeEntry} SPRITES Sprites
 * @property {IndexTypeEntry} TEXTURES Textures
 * @property {IndexTypeEntry} BINARY Title screen & Huffman?
 * @property {IndexTypeEntry} TRACK2 Music Jingles
 * @property {IndexTypeEntry} CLIENTSCRIPT Interface Scripts
 * @property {IndexTypeEntry} FONTS Interface Fonts
 * @property {IndexTypeEntry} VORBIS Music Samples
 * @property {IndexTypeEntry} INSTRUMENTS Music Patches
 * @property {IndexTypeEntry} WORLDMAP World Locations
 * @property {IndexTypeEntry} UKNOWN1 Sprite IDs?
 * @property {IndexTypeEntry} UKNOWN2 World Map Geography?
 * @property {IndexTypeEntry} UKNOWN3 World Map?
 * @property {IndexTypeEntry} UKNOWN4 World Map Ground?
 * @property {IndexTypeEntry} KEYFRAMES Animation Keyframes
 * @property {(id:number)=>IndexTypeEntry|undefined} valueOf Get entry by numeric id
 * @property {(id:number)=>IndexTypeKey|undefined} keyOf Get key by numeric id
 */
/** @type {IndexType} */
const IndexType = {
    /** Animations */
    FRAMES: { id: 0, loader: FramesLoader },
    /** Skeletons */
    FRAMEMAPS: { id: 1, loader: FramemapLoader },
    /** Configs */
    CONFIGS: { id: 2, loader: undefined },
    /** Interfaces */
    INTERFACES: { id: 3, loader: undefined },
    /** Sound FX */
    SOUNDEFFECTS: { id: 4, loader: undefined },
    /** Maps */
    MAPS: { id: 5, loader: MapLoader },
    /** Music Tracks */
    TRACK1: { id: 6, loader: MusicTrackLoader },
    /** Models */
    MODELS: { id: 7, loader: ModelLoader },
    /** Sprites */
    SPRITES: { id: 8, loader: SpriteLoader },
    /** Textures */
    TEXTURES: { id: 9, loader: TextureLoader },
    /** Title screen & Huffman? */
    BINARY: { id: 10, loader: undefined },
    /** Music Jingles */
    TRACK2: { id: 11, loader: MusicTrackLoader },
    /** Interface Scripts */
    CLIENTSCRIPT: { id: 12, loader: undefined },
    /** Interface Fonts */
    FONTS: { id: 13, loader: undefined },
    /** Music Samples */
    VORBIS: { id: 14, loader: undefined },
    /** Music Patches */
    INSTRUMENTS: { id: 15, loader: undefined },
    /** World Locations */
    WORLDMAP: { id: 16, loader: undefined },
    /** Sprite IDs? */
    UKNOWN1: { id: 17, loader: undefined },
    /** World Map Geography? */
    UKNOWN2: { id: 18, loader: undefined },
    /**World Map? */
    UKNOWN3: { id: 19, loader: undefined },
    /** World Map Ground? */
    UKNOWN4: { id: 20, loader: undefined },
    /** Animation Keyframes */
    KEYFRAMES: { id: 22, loader: AnimayaLoader },
};

IndexType.valueOf = (id) => {
    var values = Object.values(IndexType);
    var keys = Object.keys(IndexType);
    for (var i = 0; i < values.length; i++) {
        if (id == values[i].id) return IndexType[keys[i]];
    }
    return undefined;
};

IndexType.keyOf = (id) => {
    var values = Object.values(IndexType);
    var keys = Object.keys(IndexType);
    for (var i = 0; i < values.length; i++) {
        if (id == values[i].id) return keys[i];
    }
    return undefined;
};

Object.freeze(IndexType);

export default IndexType;
