/**
 * Spot Anims are GFX effects such as teleporting spells
 * @class SpotAnimDefinition
 * @category Definitions
 * @hideconstructor
 */
export class SpotAnimDefinition {
    /**
     * The ID of this Spot Anim
     * @type {number}
     */
    id: number;
    /**
     * Name of the Spot Animation
     * @type {string}
     */
    name: string;
    /** @type {number} */
    rotation: number;
    /**
     * Textures to find to be replaced for this Spot Anim
     * @type {Array}
     */
    textureToFind: any[];
    /**
     * What the texture will be replaced with
     * @type {Array}
     */
    textureToReplace: any[];
    /**
     * Default animation
     * @type {number}
     */
    animationId: number;
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
    /** @type {number} */
    resizeX: number;
    /** @type {number} */
    resizeY: number;
    /**
     * Model to use for this Spot Anim
     * @type {number}
     */
    modelId: number;
    /**
     * Number from 0 to 255. Modifies the Spot Anim model's ambient lighting
     * @type {Byte}
     */
    ambient: Byte;
    /**
     * Number from 0 to 255. Modifies the Spot Anim model's contrast
     * @type {Byte}
     */
    contrast: Byte;
}
export default class SpotAnimLoader {
    load(bytes: any, id: any): SpotAnimDefinition;
    handleOpcode(def: any, opcode: any, dataview: any): void;
}
