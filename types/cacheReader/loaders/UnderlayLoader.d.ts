/**
 * Used the paint the heightmap of Map tiles
 * @class UnderlayDefinition
 * @category Definitions
 * @hideconstructor
 */
export class UnderlayDefinition {
    id: any;
    color: any;
    hue: any;
    saturation: any;
    lightness: any;
}
export default class UnderlayLoader {
    load(bytes: any, id: any): UnderlayDefinition;
    packHsl(def: any): void;
    handleOpcode(def: any, opcode: any, dataview: any): void;
    loadHsl(def: any): void;
}
