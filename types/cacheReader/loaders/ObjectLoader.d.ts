/**
 * @class ObjectDefinition
 * @category Definitions
 * @hideconstructor
 */
export class ObjectDefinition {
    /**
     * The ID of this Object
     * @type {number}
     */
    id: number;
    /**
     * Object types
     * @type {Array}
     */
    objectTypes: any[];
    /**
     * The models that compose the NPC
     * @type {Array}
     */
    objectModels: any[];
    /**
     * Name of the Object
     * @type {string}
     */
    name: string;
    /**
     * Tile size X
     * @type {number}
     */
    sizeX: number;
    /**
     * Tile size Y
     * @type {number}
     */
    sizeY: number;
    /**
     * Interact Type. Loader only ever sets it to 0 or 1. Defaults value is 2
     * @type {number}
     */
    interactType: number;
    /**
     * Blocks projectiles such as arrows and spells
     * @type {boolean}
     */
    blocksProjectile: boolean;
    /**
     * I think this allows other objects to be placed on the same tile
     * @type {number}
     */
    wallOrDoor: number;
    /** @type {number} */
    contouredGround: number;
    /**
     * Merge normals with objects nearby
     * @type {boolean}
     */
    mergeNormals: boolean;
    /** @type {boolean} */
    aBool2111: boolean;
    /**
     * Default animation
     * @type {number}
     */
    animationID: number;
    /** @type {number} */
    decorDisplacement: number;
    /**
     * Number from 0 to 255. Overrides Object model's ambient lighting
     * @type {Byte}
     */
    ambient: Byte;
    /**
     * Number from 0 to 255. Overrides Object model's contrast
     * @type {Byte}
     */
    contrast: Byte;
    /** @type {Array} */
    actions: any[];
    /**
     * Color values to find to be replaced for this Object
     * @type {Array}
     */
    recolorToFind: any[];
    /**
     * What the color values will be replaced with
     * @type {Array}
     */
    recolorToReplace: any[];
    /**
     * Textures to find to be replaced for this Object
     * @type {Array}
     */
    retextureToFind: any[];
    /**
     * What the texture will be replaced with
     * @type {Array}
     */
    textureToReplace: any[];
    /** @type {number} */
    category: number;
    /** @type {boolean} */
    rotated: boolean;
    /** @type {boolean} */
    shadow: boolean;
    /**
     * Model size X
     * @type {number}
     */
    modelSizeX: number;
    /**
     * Model size height
     * @type {number}
     */
    modelSizeHeight: number;
    /**
     * Model size Y
     * @type {number}
     */
    modelSizeY: number;
    /** @type {number} */
    mapSceneID: number;
    /** @type {number} */
    blockingMask: number;
    /** @type {number} */
    offsetX: number;
    /** @type {number} */
    offsetHeight: number;
    /** @type {number} */
    offsetY: number;
    /** @type {boolean} */
    obstructsGround: boolean;
    /** @type {number} */
    hollow: number;
    /** @type {number} */
    supportsItems: number;
    /** @type {number} */
    varbitID: number;
    /** @type {number} */
    varpID: number;
    /** @type {Array} */
    configChangeDest: any[];
    /** @type {number} */
    ambientSoundId: number;
    /** @type {number} */
    ambientSoundDistance: number;
    /** @type {number} */
    ambientSoundChangeTicksMin: number;
    /** @type {number} */
    ambientSoundChangeTicksMax: number;
    /** @type {Array<number>} */
    ambientSoundIds: Array<number>;
    /** @type {number} */
    ambientSoundRetain: number;
    /** @type {number} */
    mapAreaId: number;
    /** @type {boolean} */
    randomizeAnimStart: boolean;
    /** @type {Object} */
    params: any;
    getModel(cache: any, modelType: any, rotation: any): Promise<any>;
}
export default class ObjectLoader {
    rev220SoundData: boolean;
    configureForRevision(revision: any): void;
    load(bytes: any, id: any): ObjectDefinition;
    handleOpcode(def: any, opcode: any, dataview: any): void;
}
