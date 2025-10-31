/**
 * @typedef Tile
 * @property {number} height Used to construct a heightmap
 * @property {number} attrOpcode
 * @property {number} overlayId Overlay Definition ID
 * @property {number} overlayPath
 * @property {number} overlayRotation
 * @property {number} settings
 * @property {number} underlayId Underlay Definition ID
 */
/**
 * @typedef Location
 * @property {number} id ObjectDefinition ID
 * @property {number} type
 * @property {number} orientation Rotation
 * @property {{x,y,z}} position
 */
/**
 * @class MapDefinition
 * @category Definitions
 * @hideconstructor
 */
export class MapDefinition {
    /** @type {number} */
    id: number;
    /** @type {number} */
    regionX: number;
    /** @type {number} */
    regionY: number;
    /**
     * Tile info including Overlay/Underlay and height
     * @type {Tile}
     */
    tiles: Tile;
    heights: any;
    getHeights(): any;
}
/**
 * @class LocationDefinition
 * @category Definitions
 * @hideconstructor
 */
export class LocationDefinition {
    /** @type {number} */
    id: number;
    /** @type {number} */
    regionX: number;
    /** @type {number} */
    regionY: number;
    /**
     * Objects on the map
     * @type {Location}
     */
    locations: Location;
}
export class EmptyMapDefinition {
}
export default class MapLoader {
    hash(str: any): number;
    load(bytes: any, id: any, rscache: any): MapDefinition | LocationDefinition | EmptyMapDefinition;
    loadLocationDef(bytes: any, defId: any, x: any, y: any): LocationDefinition;
    loadMapDef(bytes: any, defId: any, x: any, y: any): MapDefinition;
}
export type Tile = {
    /**
     * Used to construct a heightmap
     */
    height: number;
    attrOpcode: number;
    /**
     * Overlay Definition ID
     */
    overlayId: number;
    overlayPath: number;
    overlayRotation: number;
    settings: number;
    /**
     * Underlay Definition ID
     */
    underlayId: number;
};
export type Location = {
    /**
     * ObjectDefinition ID
     */
    id: number;
    type: number;
    /**
     * Rotation
     */
    orientation: number;
    position: {
        x;
        y;
        z;
    };
};
