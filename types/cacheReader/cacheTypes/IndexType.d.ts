export default IndexType;
/**
 * A single IndexType entry
 */
export type IndexTypeEntry = {
    /**
     * Numeric index id
     */
    id: number;
    /**
     * Loader class for this index (if available)
     */
    loader: any;
};
/**
 * All valid IndexType keys
 */
export type IndexTypeKey = ('FRAMES' | 'FRAMEMAPS' | 'CONFIGS' | 'INTERFACES' | 'SOUNDEFFECTS' | 'MAPS' | 'TRACK1' | 'MODELS' | 'SPRITES' | 'TEXTURES' | 'BINARY' | 'TRACK2' | 'CLIENTSCRIPT' | 'FONTS' | 'VORBIS' | 'INSTRUMENTS' | 'WORLDMAP' | 'UKNOWN1' | 'UKNOWN2' | 'UKNOWN3' | 'UKNOWN4' | 'KEYFRAMES');
/**
 * Enum-like map of Index types.
 */
export type IndexType = {
    /**
     * Animations
     */
    FRAMES: IndexTypeEntry;
    /**
     * Skeletons
     */
    FRAMEMAPS: IndexTypeEntry;
    /**
     * Configs
     */
    CONFIGS: IndexTypeEntry;
    /**
     * Interfaces
     */
    INTERFACES: IndexTypeEntry;
    /**
     * Sound FX
     */
    SOUNDEFFECTS: IndexTypeEntry;
    /**
     * Maps
     */
    MAPS: IndexTypeEntry;
    /**
     * Music Tracks
     */
    TRACK1: IndexTypeEntry;
    /**
     * Models
     */
    MODELS: IndexTypeEntry;
    /**
     * Sprites
     */
    SPRITES: IndexTypeEntry;
    /**
     * Textures
     */
    TEXTURES: IndexTypeEntry;
    /**
     * Title screen & Huffman?
     */
    BINARY: IndexTypeEntry;
    /**
     * Music Jingles
     */
    TRACK2: IndexTypeEntry;
    /**
     * Interface Scripts
     */
    CLIENTSCRIPT: IndexTypeEntry;
    /**
     * Interface Fonts
     */
    FONTS: IndexTypeEntry;
    /**
     * Music Samples
     */
    VORBIS: IndexTypeEntry;
    /**
     * Music Patches
     */
    INSTRUMENTS: IndexTypeEntry;
    /**
     * World Locations
     */
    WORLDMAP: IndexTypeEntry;
    /**
     * Sprite IDs?
     */
    UKNOWN1: IndexTypeEntry;
    /**
     * World Map Geography?
     */
    UKNOWN2: IndexTypeEntry;
    /**
     * World Map?
     */
    UKNOWN3: IndexTypeEntry;
    /**
     * World Map Ground?
     */
    UKNOWN4: IndexTypeEntry;
    /**
     * Animation Keyframes
     */
    KEYFRAMES: IndexTypeEntry;
    /**
     * Get entry by numeric id
     */
    valueOf: (id: number) => IndexTypeEntry | undefined;
    /**
     * Get key by numeric id
     */
    keyOf: (id: number) => IndexTypeKey | undefined;
};
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
declare const IndexType: IndexType;
