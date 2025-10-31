export default class GLTFExporter {
    constructor(def: any);
    verticies: any[];
    faces: any[];
    alphaVertices: any[];
    alphaFaces: any[];
    morphTargetsAmount: number;
    indices: any[];
    alphaIndices: any[];
    morphVertices: any[];
    alphaMorphVertices: any[];
    animations: any[];
    uvs: any[];
    alphaUvs: any[];
    colorPalettePng: any;
    modelDef: any;
    morphTargetsMap: {};
    /**
     * mapping of original vertex ID to new vertex IDs
     * if alpha is true, it refers to the position in this.alphaVertices, otherwise this.verticies
     * @type {[originalIdx: number]: {[colorKey: number]: {idx: number, alpha: boolean}}
     */
    remappedVertices: [originalIdx: number];
    combineColorAndAlpha: (color: any, alpha: any) => number;
    /**
     *
     * @param {*} morphVertices array of vertices for the morph target
     * @returns the position of the morph target that was inserted
     */
    addMorphTarget(morphVertices: any, id?: number): number;
    addAnimation(morphTargetIds: any, baseLengths: any, name: any): void;
    addSequence(cache: any, def: any): Promise<void>;
    addColors(): void;
    constructFile(): GLTFFile;
    export(): string;
}
declare class GLTFFile {
    scene: number;
    scenes: {
        nodes: number[];
    }[];
    nodes: {
        mesh: number;
    }[];
    meshes: {
        primitives: any[];
    }[];
    textures: any[];
    images: any[];
    samplers: any[];
    materials: any[];
    animations: any;
    buffers: any[];
    bufferViews: any[];
    accessors: any[];
    asset: {
        version: string;
    };
    addIndicies(indicies: any): void;
    addVerticies(verticies: any): void;
    addMorphTarget(verticies: any, primitive: any): void;
    addAnimation(targets: any, lengths: any, morphTargetsAmount: any, name: any): void;
    addColors(uvs: any, colorPalettePng: any, primitive: any, transparent?: boolean): void;
}
export {};
