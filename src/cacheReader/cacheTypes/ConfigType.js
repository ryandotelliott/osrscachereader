import KitLoader from "../loaders/KitLoader.js";
import ObjectLoader from "../loaders/ObjectLoader.js";
import NpcLoader from "../loaders/NpcLoader.js";
import ItemLoader from "../loaders/ItemLoader.js";
import SequenceLoader from "../loaders/SequenceLoader.js";
import OverlayLoader from "../loaders/OverlayLoader.js";
import UnderlayLoader from "../loaders/UnderlayLoader.js";
import SpotAnimLoader from "../loaders/SpotAnimLoader.js";

/**
 * A single ConfigType entry
 * @typedef {Object} ConfigTypeEntry
 * @property {number} id Numeric config id
 * @property {any} loader Loader class for this config (if available)
 */

/**
 * All valid ConfigType keys
 * @typedef {(
 *  'UNDERLAY'|
 *  'UNKNOWN2'|
 *  'IDENTKIT'|
 *  'OVERLAY'|
 *  'INV'|
 *  'OBJECT'|
 *  'UNKNOWN7'|
 *  'ENUM'|
 *  'NPC'|
 *  'ITEM'|
 *  'PARAMS'|
 *  'SEQUENCE'|
 *  'SPOTANIM'|
 *  'VARBIT'|
 *  'VARCLIENTSTRING'|
 *  'VARPLAYER'|
 *  'UNKNOWN18'|
 *  'VARCLIENT'|
 *  'UNKNOWN20'|
 *  'UNKNOWN22'|
 *  'UNKNOWN24'|
 *  'UNKNOWN25'|
 *  'UNKNOWN26'|
 *  'UNKNOWN27'|
 *  'UNKNOWN28'|
 *  'UNKNOWN29'|
 *  'UNKNOWN30'|
 *  'UNKNOWN31'|
 *  'HITSPLAT'|
 *  'HEALTHBAR'|
 *  'STRUCT'|
 *  'AREA'|
 *  'UNKNOWN47'|
 *  'UNKNOWN54'|
 *  'UNKNOWN70'
 * )} ConfigTypeKey
 */

/**
 * Enum-like map of Config types.
 * @typedef {Object} ConfigType
 * @property {ConfigTypeEntry} UNDERLAY Underlay
 * @property {ConfigTypeEntry} UNKNOWN2 Unknown
 * @property {ConfigTypeEntry} IDENTKIT Kit
 * @property {ConfigTypeEntry} OVERLAY Overlay
 * @property {ConfigTypeEntry} INV Inventory
 * @property {ConfigTypeEntry} OBJECT Objects
 * @property {ConfigTypeEntry} UNKNOWN7 Unknown
 * @property {ConfigTypeEntry} ENUM Enum
 * @property {ConfigTypeEntry} NPC NPC
 * @property {ConfigTypeEntry} ITEM Items
 * @property {ConfigTypeEntry} PARAMS Params
 * @property {ConfigTypeEntry} SEQUENCE Sequence
 * @property {ConfigTypeEntry} SPOTANIM Spot Anim
 * @property {ConfigTypeEntry} VARBIT Varbit
 * @property {ConfigTypeEntry} VARCLIENTSTRING Varclientstring
 * @property {ConfigTypeEntry} VARPLAYER Varplayer
 * @property {ConfigTypeEntry} UNKNOWN18 Unknown
 * @property {ConfigTypeEntry} VARCLIENT Varclient
 * @property {ConfigTypeEntry} UNKNOWN20 Unknown
 * @property {ConfigTypeEntry} UNKNOWN22 Unknown
 * @property {ConfigTypeEntry} UNKNOWN24 Unknown
 * @property {ConfigTypeEntry} UNKNOWN25 Unknown
 * @property {ConfigTypeEntry} UNKNOWN26 Unknown
 * @property {ConfigTypeEntry} UNKNOWN27 Unknown
 * @property {ConfigTypeEntry} UNKNOWN28 Unknown
 * @property {ConfigTypeEntry} UNKNOWN29 Unknown
 * @property {ConfigTypeEntry} UNKNOWN30 Unknown
 * @property {ConfigTypeEntry} UNKNOWN31 Unknown
 * @property {ConfigTypeEntry} HITSPLAT Hitsplat
 * @property {ConfigTypeEntry} HEALTHBAR Healthbar
 * @property {ConfigTypeEntry} STRUCT Struct
 * @property {ConfigTypeEntry} AREA Area
 * @property {ConfigTypeEntry} UNKNOWN47 Unknown
 * @property {ConfigTypeEntry} UNKNOWN54 Unknown
 * @property {ConfigTypeEntry} UNKNOWN70 Unknown
 * @property {(id:number)=>ConfigTypeEntry|undefined} valueOf Get entry by numeric id
 */
/** @type {ConfigType} */
const ConfigType = {
    /** Underlay */
    UNDERLAY: { id: 1, loader: UnderlayLoader },
    /** */
    UNKNOWN2: { id: 2, loader: undefined },
    /** Kit */
    IDENTKIT: { id: 3, loader: KitLoader },
    /** Overlay */
    OVERLAY: { id: 4, loader: OverlayLoader },
    /** Inventory */
    INV: { id: 5, loader: undefined },
    /** Objects */
    OBJECT: { id: 6, loader: ObjectLoader },
    /** */
    UNKNOWN7: { id: 7, loader: undefined },
    /** Enum */
    ENUM: { id: 8, loader: undefined },
    /** NPC */
    NPC: { id: 9, loader: NpcLoader },
    /** Items */
    ITEM: { id: 10, loader: ItemLoader },
    /** Params */
    PARAMS: { id: 11, loader: undefined },
    /** Sequence */
    SEQUENCE: { id: 12, loader: SequenceLoader },
    /** Spot anim */
    SPOTANIM: { id: 13, loader: SpotAnimLoader },
    /** Varbit */
    VARBIT: { id: 14, loader: undefined },
    /** */
    VARCLIENTSTRING: { id: 15, loader: undefined },
    /** Varp */
    VARPLAYER: { id: 16, loader: undefined },
    UNKNOWN18: { id: 18, loader: undefined },
    /** Varc */
    VARCLIENT: { id: 19, loader: undefined },
    UNKNOWN20: { id: 20, loader: undefined },
    UNKNOWN22: { id: 22, loader: undefined },
    UNKNOWN24: { id: 24, loader: undefined },
    UNKNOWN25: { id: 25, loader: undefined },
    UNKNOWN26: { id: 26, loader: undefined },
    UNKNOWN27: { id: 27, loader: undefined },
    UNKNOWN28: { id: 28, loader: undefined },
    UNKNOWN29: { id: 29, loader: undefined },
    UNKNOWN30: { id: 30, loader: undefined },
    UNKNOWN31: { id: 31, loader: undefined },
    /** Hitsplats */
    HITSPLAT: { id: 32, loader: undefined },
    /** Healthbars */
    HEALTHBAR: { id: 33, loader: undefined },
    /** Struct */
    STRUCT: { id: 34, loader: undefined },
    /** Area */
    AREA: { id: 35, loader: undefined },

    /** Possible scripts? */
    UNKNOWN47: { id: 47, loader: undefined },
    /** Possible scripts? */
    UNKNOWN54: { id: 54, loader: undefined },
    UNKNOWN70: { id: 70, loader: undefined },
};
ConfigType.valueOf = (id) => {
    var values = Object.values(ConfigType);
    var keys = Object.keys(ConfigType);
    for (var i = 0; i < values.length; i++) {
        if (id == values[i].id) return ConfigType[keys[i]];
    }
    return undefined;
};

Object.freeze(ConfigType);

export default ConfigType;
