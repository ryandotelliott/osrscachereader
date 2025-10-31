export default class Matrix {
    static field3746: any[];
    static field3747: Matrix;
    constructor(var1: any, var2: any);
    matrixVals: any[];
    initFromBuffer(buffer: any, var2: any): void;
    getRotation(): number[];
    identity(): void;
    zero(): void;
    copy(otherMatrix: any): void;
    setScale(var1: any): void;
    setScaleXYZ(var1: any, var2: any, var3: any): void;
    add(var1: any): void;
    multiply(var1: any): void;
    rotate(var1: any): void;
    determinant(): number;
    inverse(): void;
    getVectorMagnitudes(): any[];
    equals(var1: any): boolean;
}
