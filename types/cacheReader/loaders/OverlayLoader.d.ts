/**
 * Used for Map tiles
 * @class ObjectDefinition
 * @category Definitions
 * @hideconstructor
 */
export class OverlayDefinition {
    /**
     * The ID of this Overlay
     * @type {number}
     */
    id: number;
    /**
     * RGB Colour
     * @type {number}
     */
    color: number;
    /**
     * Overlay texture
     * @type {number}
     */
    texture: number;
    /**
     * Hide UnderlayDefinition
     * @type {boolean}
     */
    hideUnderlay: boolean;
    /**
     * RGB Colour
     * @type {number}
     */
    secondaryColor: number;
}
export default class OverlayLoader {
    load(bytes: any, id: any): OverlayDefinition;
    handleOpcode(def: any, opcode: any, dataview: any): void;
    convertToHsl(var1: any): number;
}
