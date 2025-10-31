/**
 * @class ItemDefinition
 * @category Definitions
 * @hideconstructor
 */
export class ItemDefinition {
    /**
     * The ID of this Object
     * @type {number}
     */
    id: number;
    name: any;
    unknown1: any;
    resizeX: number;
    resizeY: number;
    resizeZ: number;
    /**
     * Used for 2d item rendering in inventories
     * @type {number}
     */
    xan2d: number;
    /**
     * Used for 2d item rendering in inventories
     * @type {number}
     */
    yan2d: number;
    /**
     * Used for 2d item rendering in inventories
     * @type {number}
     */
    zan2d: number;
    cost: number;
    /** @type {boolean} */
    isTradeable: boolean;
    /** @type {number} */
    stackable: number;
    /** @type {number} */
    inventoryModel: number;
    /** @type {number} */
    wearPos1: number;
    /** @type {number} */
    wearPos2: number;
    /** @type {number} */
    wearPos3: number;
    /** @type {boolean} */
    members: boolean;
    /** @type {Array} */
    recolorToFind: any[];
    /** @type {Array} */
    recolorToReplace: any[];
    /** @type {Array} */
    retextureToFind: any[];
    /** @type {Array} */
    retextureToReplace: any[];
    /** @type {number} */
    zoom2d: number;
    /** @type {number} */
    xOffset2d: number;
    /** @type {number} */
    yOffset2d: number;
    /**
     * Number from 0 to 255. Overrides Item model's ambient lighting
     * @type {Byte}
     */
    ambient: Byte;
    /**
     * Number from 0 to 255. Overrides Item model's contrast
     * @type {Byte}
     */
    contrast: Byte;
    /** @type {Array} */
    countCo: any[];
    /** @type {Array} */
    countObj: any[];
    /** @type {Array<string>} */
    options: Array<string>;
    /** @type {Array<string>} */
    interfaceOptions: Array<string>;
    /** @type {number} */
    maleModel0: number;
    /** @type {number} */
    maleModel1: number;
    /** @type {number} */
    maleModel2: number;
    /** @type {number} */
    maleOffset: number;
    /** @type {number} */
    maleHeadModel: number;
    /** @type {number} */
    maleHeadModel2: number;
    /** @type {number} */
    femaleModel0: number;
    /** @type {number} */
    femaleModel1: number;
    /** @type {number} */
    femaleModel2: number;
    /** @type {number} */
    femaleOffset: number;
    /** @type {number} */
    femaleHeadModel: number;
    /** @type {number} */
    femaleHeadModel2: number;
    /** @type {number} */
    category: number;
    /** @type {number} */
    notedID: number;
    /** @type {number} */
    notedTemplate: number;
    /** @type {number} */
    team: number;
    /** @type {number} */
    weight: number;
    /** @type {number} */
    shiftClickDropIndex: number;
    /** @type {number} */
    boughtId: number;
    /** @type {number} */
    boughtTemplateId: number;
    /** @type {number} */
    placeholderId: number;
    /** @type {number} */
    placeholderTemplateId: number;
    /** @type {Object} */
    params: any;
    /** @type {String} */
    examineText: string;
}
export default class ItemLoader {
    load(bytes: any, id: any): ItemDefinition;
    handleOpcode(def: any, opcode: any, dataview: any, lastOpCode: any): void;
}
