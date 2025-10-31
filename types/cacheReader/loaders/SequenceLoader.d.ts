/**
 * Sequences are animations
 * @class SequenceDefinition
 * @category Definitions
 * @hideconstructor
 */
export class SequenceDefinition {
    /**
     * The ID of this Animation
     * @type {number}
     */
    id: number;
    /**
     * Name of the Animation
     * @type {string}
     */
    name: string;
    /**
     * How long each frame will take
     * @type {Array<number>}
     */
    frameLengths: Array<number>;
    /**
     * These IDs are used to find the corresponding Skeleton and Frame information
     * @type {Array<number>}
     */
    frameIDs: Array<number>;
    /**  @type {number} */
    frameStep: number;
    /**  @type {Array} */
    interleaveLeave: any[];
    /**  @type {boolean} */
    stretches: boolean;
    /**  @type {number} */
    forcedPriority: number;
    /**  @type {number} */
    leftHandItem: number;
    /**  @type {number} */
    rightHandItem: number;
    /**  @type {number} */
    maxLoops: number;
    /**  @type {number} */
    precedenceAnimating: number;
    /**  @type {number} */
    priority: number;
    /**  @type {number} */
    replyMode: number;
    /**  @type {Array} */
    chatFrameIds: any[];
    /**  @type {Array<Sound>} */
    frameSounds: Array<Sound>;
    /**
     * If this ID is set then it uses Animaya animations. This ID works the same as a frameID
     * @type {number}
     */
    animMayaID: number;
    /**  @type {number} */
    animMayaStart: number;
    /**  @type {number} */
    animMayaEnd: number;
    /**  @type {Array<boolean>} */
    animMayaMasks: Array<boolean>;
}
export default class SequenceLoader {
    rev220FrameSounds: boolean;
    rev226: boolean;
    configureForRevision(revision: any): void;
    load(bytes: any, id: any): SequenceDefinition;
    handleOpcode(def: any, opcode: any, dataview: any): void;
    readFrameSound(stream: any): Sound;
}
declare class Sound {
    constructor(id: any, loops: any, location: any, retain: any, weight: any);
    id: any;
    loops: any;
    location: any;
    retain: any;
    weight: any;
}
export {};
