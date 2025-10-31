/**
 * @class TextureDefinition
 * @category Definitions
 * @hideconstructor
 */
export class TextureDefinition {
    /**
     * The ID of this Texture
     * @type {number}
     */
    id: number;
    /** @type {number} */
    field1777: number;
    /** @type {boolean} */
    field1778: boolean;
    /**
     * The sprites that make up this texture
     * @type {Array<number>}
     */
    fileIds: Array<number>;
    /** @type {number} */
    field1780: number;
    /** @type {number} */
    field1781: number;
    /** @type {number} */
    field1786: number;
    /**
     * Used for animated textures like firecape or water fountains
     * @type {number}
     */
    animationSpeed: number;
    /**
     * Direction that the texture UVs will move
     * @type {number}
     * @example
     let angle = duration * (Math.PI / 2);
let vec = [Math.cos(angle) * animationSpeed, Math.sin(angle) * animationSpeed];
     */
    animationDirection: number;
}
export default class TextureLoader {
    load(bytes: any, id: any, cache: any, options: any): Promise<TextureDefinition>;
}
