/**
 * @class FramesDefinition
 * @category Definitions
 * @hideconstructor
 */
export class FramesDefinition {
    /**
     * The file ID of this Frame
     * @type {number}
     */
    id: number;
    /**
     * Skeleton used for this frame
     * @type {FramemapDefinition}
     */
    framemap: FramemapDefinition;
    /** @type {Array<number>} */
    translator_x: Array<number>;
    /** @type {Array<number>} */
    translator_y: Array<number>;
    /** @type {Array<number>} */
    translator_z: Array<number>;
    /** @type {number} */
    translatorCount: number;
    /** @type {Array<number>} */
    indexFrameIds: Array<number>;
    /** @type {boolean} */
    showing: boolean;
    colorTransform: any;
    method727(var1: any, var2: any, var3: any): void;
    method728(var1: any, var2: any, var3: any, var4: any): void;
    method730(var1: any, var2: any, var3: any, var4: any): void;
    method726(var1: any, var2: any, var3: any, var4: any): void;
}
export default class FramesLoader {
    load(bytes: any, id: any, cache: any, options: any): any;
}
