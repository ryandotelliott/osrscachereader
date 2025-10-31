export default class NpcLoader {
    rev210HeadIcons: boolean;
    configureForRevision(revision: any): void;
    load(bytes: any, id: any): NpcDefinition;
    handleOpcode(def: any, opcode: any, dataview: any): void;
    widthScale: any;
}
/**
 * @class NpcDefinition
 * @category Definitions
 * @hideconstructor
 */
export class NpcDefinition {
    /**
     * The ID of this NPC
     * @type {number}
     */
    id: number;
    /**
     * The models that compose the NPC
     * @type {Array}
     */
    models: any[];
    /**
     * Name of the NPC
     * @type {string}
     */
    name: string;
    /**
     * Tile size
     * @type {number}
     */
    size: number;
    /**
     * Idle animation
     * @type {number}
     */
    standingAnimation: number;
    /**
     * Walking animation
     * @type {number}
     */
    walkingAnimation: number;
    /** @type {number} */
    rotateLeftAnimation: number;
    /** @type {number} */
    rotateRightAnimation: number;
    /** @type {number} */
    rotate180Animation: number;
    /** @type {number} */
    rotate90LeftAnimation: number;
    /** @type {number} */
    rotate90RightAnimation: number;
    /** @type {number} */
    category: number;
    /** @type {Array} */
    actions: any[];
    /**
     * Color values to find to be replaced for this NPC
     * @type {Array}
     */
    recolorToFind: any[];
    /**
     * What the color values will be replaced with
     * @type {Array}
     */
    recolorToReplace: any[];
    /**
     * Textures to find to be replaced for this NPC
     * @type {Array}
     */
    retextureToFind: any[];
    /**
     * What the texture will be replaced with
     * @type {Array}
     */
    retextureToReplace: any[];
    /**
     * The models that will compose this NPC's chathead
     * @type {Array}
     */
    chatheadModels: any[];
    /**
     * If this NPC will show on the minimap
     * @type {boolean}
     */
    isMinimapVisible: boolean;
    /**
     * This NPC's combat level
     * @type {number}
     */
    combatLevel: number;
    /** @type {number} */
    heightScale: number;
    /** @type {boolean} */
    hasRenderPriority: boolean;
    /**
     * Number from 0 to 255. Overrides NPC model's ambient lighting
     * @type {Byte}
     */
    ambient: Byte;
    /**
     * Number from 0 to 255. Overrides NPC model's contrast
     * @type {Byte}
     */
    contrast: Byte;
    /** @type {Array} */
    headIconArchiveIds: any[];
    /** @type {Array} */
    headIconSpriteIndex: any[];
    /** @type {number} */
    rotationSpeed: number;
    /** @type {number} */
    varbitId: number;
    /** @type {number} */
    varpIndex: number;
    /** @type {Array} */
    configs: any[];
    /** @type {boolean} */
    isInteractable: boolean;
    /** @type {boolean} */
    rotationFlag: boolean;
    /** @type {boolean} */
    isFollower: boolean;
    /** @type {boolean} */
    lowPriorityFollowerOps: boolean;
    /** @type {number} */
    runAnimation: number;
    /** @type {number} */
    runRotate180Animation: number;
    /** @type {number} */
    runRotateLeftAnimation: number;
    /** @type {number} */
    runRotateRightAnimation: number;
    /** @type {number} */
    crawlAnimation: number;
    /** @type {number} */
    crawlRotate180Animation: number;
    /** @type {number} */
    crawlRotateLeftAnimation: number;
    /** @type {number} */
    crawlRotateRightAnimation: number;
    /** @type {Array} */
    params: any[];
    /** @type {number} */
    height: number;
    /** @type {Array} */
    stats: any[];
}
