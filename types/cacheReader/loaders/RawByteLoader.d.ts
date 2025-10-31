/**
* @class RawBytesDefinition
* @category Definitions
* @hideconstructor
*/
export class RawBytesDefinition {
    /**
    * @type {number}
    */
    id: number;
    /**
     * @type {Array}
    */
    bytes: any[];
}
export default class RawBytesLoader {
    load(bytes: any, id: any): RawBytesDefinition;
}
