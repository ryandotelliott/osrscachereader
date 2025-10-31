export default class Bone {
    constructor(size: any, dataview: any);
    field1181: boolean;
    transformUpdated: boolean;
    field1178: Matrix;
    field1180: Matrix;
    field1174: Matrix;
    id: any;
    matricies: any[];
    field1176: any[];
    field1177: any[];
    field1187: any[];
    init(): void;
    rotations: any[][];
    translations: any[][];
    vectorMagnitudes: any[][];
    getMatrix(index: any): any;
    method684(var1: any): any;
    method685(var1: any): any;
    copy(var1: any): void;
    method681(): Matrix;
    getTransform(): Matrix;
    method687(var1: any): Matrix;
    getRotation(index: any): any[];
    getTranslation(index: any): any[];
    getVectorMagnitudes(index: any): any[];
}
import Matrix from "./Matrix.js";
