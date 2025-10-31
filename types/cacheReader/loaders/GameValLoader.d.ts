/**
 * @class GameValDefinition
 * @category Definitions
 * @hideconstructor
 */
export class GameValDefinition {
    /**
     * @type {number}
     */
    id: number;
    /**
     * @type {number}
     */
    gameValId: number;
    /**
     * @type {String}
     */
    name: string;
    /**
     * @type {Array}
     */
    files: any[];
}
export default class KitLoader {
    load(bytes: any, id: any): any;
    handleOpcode(def: any, opcode: any, dataview: any): void;
}
