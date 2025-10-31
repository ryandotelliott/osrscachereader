/**
 * @class AnimayaDefinition
 * @category Definitions
 * @hideconstructor
 */
export class AnimayaDefinition {
    /** @type {Byte} */
    version: Byte;
    /**
     * Which framemap to load the skeleton info from
     * @type {boolean}
     */
    skeletonId: boolean;
    /**
     * Used for something related to matricies, translation and rotation
     * @type {Byte}
     */
    field1257: Byte;
    /**
     * Something to do with bones
     * @type {Array<number>}
     */
    field1265: Array<number>;
    /** @type {Array<number>} */
    field1258: Array<number>;
    /** @type {boolean} */
    field1259: boolean;
}
export class class129 {
    static values: number[][];
    static findEnumerated(val: any): class129;
    constructor(var1: any, var2: any, var3: any, var4: any, var5: any);
    field1253: any;
    field1251: any;
    field1252: any;
    method711(): any;
}
export class class128 {
    static values: number[][];
    static findEnumerated(val: any): class128;
    constructor(var1: any, var2: any, var3: any, var4: any);
    field1230: any;
    field1224: any;
    field1232: any;
    method707(): any;
}
export default class AnimayaLoader {
    load(bytes: any, id: any, cache: any, options: any): any;
}
