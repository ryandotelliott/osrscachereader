/**
 * @class ModelDefinition
 * @category Definitions
 * @hideconstructor
 */
export class ModelDefinition {
    static normalMergeCount: number;
    static field1935: any[];
    static field1936: any[];
    static rotated(pos: any, degrees: any, size: any, posX?: number, posY?: number): any;
    static translated(pos: any, x: any, y: any, z: any): any;
    static mergeNormals(var0: any, var1: any, var2: any, var3: any, var4: any, var5: any): void;
    constructor(x: number, y: number, heightOffset: number, color: any);
    /**
     * The ID of this Model
     * @type {number}
     */
    id: number;
    /**
     * Used to offset vertices during merge
     * @type {number}
     */
    translation: number;
    /**
     * Used to rotate vertices during merge
     * @type {number}
     */
    rotation: number;
    /**
     * How many verticies this models has
     * @type {number}
     */
    vertexCount: number;
    /**
     * How many faces this models has
     * @type {number}
     */
    faceCount: number;
    /**
     * How many textured faces this models has
     * @type {number}
     */
    numTextureFaces: number;
    /**
     * Vertex X Position Array
     * @type {Array<number>}
     */
    vertexPositionsX: Array<number>;
    /**
     * Vertex Y Position Array
     * @type {Array<number>}
     */
    vertexPositionsY: Array<number>;
    /**
     * Vertex Z Position Array
     * @type {Array<number>}
     */
    vertexPositionsZ: Array<number>;
    /**
     * Which Vertex XYZ to use for the 1st index
     * @type {Array<number>}
     */
    faceVertexIndices1: Array<number>;
    /**
     * Which Vertex XYZ to use for the 2nd index
     * @type {Array<number>}
     */
    faceVertexIndices2: Array<number>;
    /**
     * Which Vertex XYZ to use for the 3rd index
     * @type {Array<number>}
     */
    faceVertexIndices3: Array<number>;
    /**
     * Used for animations
     * @type {Array<number>}
     */
    vertexSkins: Array<number>;
    /**
     * Changes how this face will render (lighting style, invisible, etc.)
     * @type {Array<number>}
     */
    faceRenderTypes: Array<number>;
    /**
     * Local render priority when combined with other models
     * @type {Array<number>}
     */
    faceRenderPriorities: Array<number>;
    /**
     * Overall priority
     * @type {number}
     */
    priority: number;
    /**
     * Used to set transparency of faces
     * @type {Array<Byte>}
     */
    faceAlphas: Array<Byte>;
    /**
     * Used for animations
     * @type {Array<number>}
     */
    faceSkins: Array<number>;
    /**
     * Texture IDs for faces
     * @type {Array<number>}
     */
    faceTextures: Array<number>;
    /**
     * Texture UV coords for mapping
     * @type {Array<number>}
     */
    textureCoords: Array<number>;
    /**
     * Used for new Animaya animations
     * @type {Array<number>}
     */
    animayaGroups: Array<number>;
    /**
     * Used for new Animaya animations
     * @type {Array<number>}
     */
    animayaScales: Array<number>;
    /**
     * Used to compute Texture UV coords
     * @type {Array<number>}
     */
    texIndices1: Array<number>;
    /**
     * Used to compute Texture UV coords
     * @type {Array<number>}
     */
    texIndices2: Array<number>;
    /**
     * Used to compute Texture UV coords
     * @type {Array<number>}
     */
    texIndices3: Array<number>;
    /**
     * Face color
     * @type {Array<number>}
     */
    faceColors: Array<number>;
    /**
     * Changes how this face's texture will render (lighting style, invisible, etc.)
     * @type {Array<number>}
     */
    textureRenderTypes: Array<number>;
    /** @type {Array<number>} */
    aShortArray2574: Array<number>;
    /** @type {Array<number>} */
    aShortArray2575: Array<number>;
    /** @type {Array<number>} */
    aShortArray2586: Array<number>;
    /** @type {Array<number>} */
    aShortArray2577: Array<number>;
    /** @type {Array<Byte>} */
    aByteArray2580: Array<Byte>;
    /** @type {Array<number>} */
    aShortArray2578: Array<number>;
    vertexGroups: any[];
    position: {
        x: number;
        y: number;
        z: number;
    };
    color: any;
    addVertex(x: any, y: any, z: any, color?: any, uvs?: number[]): void;
    vertexNormals: any[];
    faceTextureUCoordinates: any[];
    faceTextureVCoordinates: any[];
    rotate(degrees: any, size: any, posX?: number, posY?: number): void;
    translate(x: any, y: any, z: any): void;
    method1194(): void;
    method1206(degrees: any): void;
    changeOffset(var1: any, var2: any, var3: any): void;
    method1188(): void;
    method1190(): void;
    method1189(): void;
    resize(var1: any, var2: any, var3: any): void;
    invalidate(): void;
    vertexVertices: any[];
    faceNormals: any[];
    isBoundsCalculated: boolean;
    recolor(var1: any, var2: any): void;
    retexture(var1: any, var2: any): void;
    removeCommonVerticies(): void;
    overlapsWith(otherModel: any): boolean;
    overlapsWith2(otherModel: any): boolean;
    calculateBounds(): void;
    height: number;
    minY: number;
    maxY: number;
    minX: number;
    maxX: number;
    maxZ: number;
    minZ: number;
    mergeNormals2(otherModel: any, var5: any): void;
    /**
     * Merge this model with another model
     * @param {ModelDefinition} otherModel Other model to combine with this
     * @param {boolean} init initialise empty arrays if necessary. set to false if merging a model into a blank model
     * @returns ModelDefinition
     */
    mergeWith(otherModel: ModelDefinition, init?: boolean): ModelDefinition;
    loadSkeletonAnims(cache: any, model: any, id: any, invertZ?: boolean): Promise<any>;
    /**
     *
     * @param {RSCache} cache OSRSCache object used to grab other files for the animation
     * @param {number} animationId Animation ID you want to play on this model
     * @param {boolean} compress Perform run-length encoding on animations to compress the sequence. Useful for maya anims.
     * @returns AnimationData
     */
    loadAnimation(cache: RSCache, animationId: number, invertZ?: boolean, compress?: boolean): Promise<{
        vertexData: any;
        lengths: any;
    }>;
    loadFrame(model: any, frame: any, invertZ?: boolean): any;
    animate(vertexGroups: any, verticesX: any, verticesY: any, verticesZ: any, type: any, frameMap: any, dx: any, dy: any, dz: any, animOffsets: any): void;
    loadMayaAnimation(frameDef: any, sequenceDefinition: any, invertZ?: boolean): number[][][];
    /**
     *
     * @param {ModelDefinition} otherModel Check if this model is the same
     * @returns boolean
     */
    equals(otherModel: ModelDefinition): boolean;
    computeAnimationTables(): void;
    faceLabelsAlpha: any[];
    computeTextureUVCoordinates(def: any): void;
    computeNormalsOld(): void;
    computeNormals(): void;
}
export default class ModelLoader {
    configureForRevision(revision: any, indexRevision: any): void;
    rev229: boolean;
    load(bytes: any, id: any): ModelDefinition;
    load3(def: any, var1: any): void;
    load2(def: any, var1: any): void;
    load1(def: any, var1: any): void;
    loadOriginal(def: any, var1: any): void;
}
export type AnimationData = {
    /**
     * Vector3 is an array with 3 numbers
     */
    vertexData: Array<Vector3>;
    /**
     * Animation frame length
     */
    lengths: Array<number>;
};
