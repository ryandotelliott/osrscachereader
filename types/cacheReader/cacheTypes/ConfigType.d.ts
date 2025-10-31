export default ConfigType;
/**
 * A single ConfigType entry
 */
export type ConfigTypeEntry = {
    /**
     * Numeric config id
     */
    id: number;
    /**
     * Loader class for this config (if available)
     */
    loader: any;
};
/**
 * All valid ConfigType keys
 */
export type ConfigTypeKey = ('UNDERLAY' | 'UNKNOWN2' | 'IDENTKIT' | 'OVERLAY' | 'INV' | 'OBJECT' | 'UNKNOWN7' | 'ENUM' | 'NPC' | 'ITEM' | 'PARAMS' | 'SEQUENCE' | 'SPOTANIM' | 'VARBIT' | 'VARCLIENTSTRING' | 'VARPLAYER' | 'UNKNOWN18' | 'VARCLIENT' | 'UNKNOWN20' | 'UNKNOWN22' | 'UNKNOWN24' | 'UNKNOWN25' | 'UNKNOWN26' | 'UNKNOWN27' | 'UNKNOWN28' | 'UNKNOWN29' | 'UNKNOWN30' | 'UNKNOWN31' | 'HITSPLAT' | 'HEALTHBAR' | 'STRUCT' | 'AREA' | 'UNKNOWN47' | 'UNKNOWN54' | 'UNKNOWN70');
/**
 * Enum-like map of Config types.
 */
export type ConfigType = {
    /**
     * Underlay
     */
    UNDERLAY: ConfigTypeEntry;
    /**
     * Unknown
     */
    UNKNOWN2: ConfigTypeEntry;
    /**
     * Kit
     */
    IDENTKIT: ConfigTypeEntry;
    /**
     * Overlay
     */
    OVERLAY: ConfigTypeEntry;
    /**
     * Inventory
     */
    INV: ConfigTypeEntry;
    /**
     * Objects
     */
    OBJECT: ConfigTypeEntry;
    /**
     * Unknown
     */
    UNKNOWN7: ConfigTypeEntry;
    /**
     * Enum
     */
    ENUM: ConfigTypeEntry;
    /**
     * NPC
     */
    NPC: ConfigTypeEntry;
    /**
     * Items
     */
    ITEM: ConfigTypeEntry;
    /**
     * Params
     */
    PARAMS: ConfigTypeEntry;
    /**
     * Sequence
     */
    SEQUENCE: ConfigTypeEntry;
    /**
     * Spot Anim
     */
    SPOTANIM: ConfigTypeEntry;
    /**
     * Varbit
     */
    VARBIT: ConfigTypeEntry;
    /**
     * Varclientstring
     */
    VARCLIENTSTRING: ConfigTypeEntry;
    /**
     * Varplayer
     */
    VARPLAYER: ConfigTypeEntry;
    /**
     * Unknown
     */
    UNKNOWN18: ConfigTypeEntry;
    /**
     * Varclient
     */
    VARCLIENT: ConfigTypeEntry;
    /**
     * Unknown
     */
    UNKNOWN20: ConfigTypeEntry;
    /**
     * Unknown
     */
    UNKNOWN22: ConfigTypeEntry;
    /**
     * Unknown
     */
    UNKNOWN24: ConfigTypeEntry;
    /**
     * Unknown
     */
    UNKNOWN25: ConfigTypeEntry;
    /**
     * Unknown
     */
    UNKNOWN26: ConfigTypeEntry;
    /**
     * Unknown
     */
    UNKNOWN27: ConfigTypeEntry;
    /**
     * Unknown
     */
    UNKNOWN28: ConfigTypeEntry;
    /**
     * Unknown
     */
    UNKNOWN29: ConfigTypeEntry;
    /**
     * Unknown
     */
    UNKNOWN30: ConfigTypeEntry;
    /**
     * Unknown
     */
    UNKNOWN31: ConfigTypeEntry;
    /**
     * Hitsplat
     */
    HITSPLAT: ConfigTypeEntry;
    /**
     * Healthbar
     */
    HEALTHBAR: ConfigTypeEntry;
    /**
     * Struct
     */
    STRUCT: ConfigTypeEntry;
    /**
     * Area
     */
    AREA: ConfigTypeEntry;
    /**
     * Unknown
     */
    UNKNOWN47: ConfigTypeEntry;
    /**
     * Unknown
     */
    UNKNOWN54: ConfigTypeEntry;
    /**
     * Unknown
     */
    UNKNOWN70: ConfigTypeEntry;
    /**
     * Get entry by numeric id
     */
    valueOf: (id: number) => ConfigTypeEntry | undefined;
};
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
declare const ConfigType: ConfigType;
