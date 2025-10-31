/**
 * @class Sprite
 * @category Definitions
 * @hideconstructor
 */
export class Sprite {
    /**
     * The ID of this Sprite
     * @type {number}
     */
    id: number;
    /**
     * Frame index for this sprite
     * @type {number}
     */
    frame: number;
    /** @type {number} */
    offsetX: number;
    /** @type {number} */
    offsetY: number;
    /** @type {number} */
    width: number;
    /** @type {number} */
    height: number;
    /**
     * RGB Pixel data
     * @type {number}
     */
    pixels: number;
    /** @type {number} */
    maxWidth: number;
    /** @type {number} */
    maxHeight: number;
    /** @type {Array<number>} */
    pixelIdx: Array<number>;
    /** @type {Array<number>} */
    palette: Array<number>;
    getWidth(): number;
    getHeight(): number;
    setPixels(pixels: any): void;
    createImageUrl(width: any, height: any): Promise<any>;
    createImage(width: any, height: any): Promise<any>;
    createImageData(ctx: any): any;
}
/**
 * @class SpriteDefinition
 * @category Definitions
 * @hideconstructor
 */
export class SpriteDefinition {
    /**
     * The ID of this Sprite
     * @type {number}
     */
    id: number;
    /**
     * Sprites that make up this SpriteDefinition. There can be multiple sprites for animated SpriteDefinitions.
     * @type {Array<Sprite>}
     */
    sprites: Array<Sprite>;
}
export default class SpriteLoader {
    load(bytes: any, id: any): SpriteDefinition;
}
