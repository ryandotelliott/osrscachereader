/**
 * @class FramemapDefinition
 * @category Definitions
 * @hideconstructor
 */
export class FramemapDefinition {
    id: any;
    /** @type {Byte} */
    length: Byte;
    /** @type {Array<number>} */
    types: Array<number>;
    /** @type {Array<number>} */
    frameMaps: Array<number>;
    /** @type {AnimayaSkeleton} */
    animayaSkeleton: AnimayaSkeleton;
}
export default class FramemapLoader {
    load(bytes: any, id: any): FramemapDefinition;
}
declare class AnimayaSkeleton {
    constructor(dataview: any, bonesCount: any);
    bones: any[];
    numMatrices: any;
    attachBones(): void;
    getBone(index: any): any;
    getAllBones(): any[];
}
export {};
