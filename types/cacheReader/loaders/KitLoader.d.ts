/**
 * @class KitDefinition
 * @category Definitions
 * @hideconstructor
 */
export class KitDefinition {
    /**
     * The ID of this Kit
     * @type {number}
     */
    id: number;
    /**
     * Color values to find to be replaced for this Spot Anim
     * @type {Array}
     */
    recolorToFind: any[];
    /**
     * What the color values will be replaced with
     * @type {Array}
     */
    recolorToReplace: any[];
    /**
     * Textures to find to be replaced for this Object
     * @type {Array}
     */
    retextureToFind: any[];
    /**
     * What the texture will be replaced with
     * @type {Array}
     */
    retextureToReplace: any[];
    /**
     * What body part this kit represents
     * @type {number}
     */
    bodyPartId: number;
    /**
     * Models that compose this kit
     * @type {Array<number>}
     */
    models: Array<number>;
    /** @type {Array<number>} */
    chatheadModels: Array<number>;
    /** @type {boolean} */
    nonSelectable: boolean;
}
export default class KitLoader {
    load(bytes: any, id: any): KitDefinition;
    handleOpcode(def: any, opcode: any, dataview: any): void;
}
