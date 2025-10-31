/**
 * Jingles and Tracks
 * @class MusicTrackDefinition
 * @category Definitions
 * @hideconstructor
 */
export class MusicTrackDefinition {
    /**
     * The ID of this Music Track
     * @type {number}
     */
    id: number;
    midi: any;
}
export default class MusicTrackLoader {
    load(bytes: any, id: any): MusicTrackDefinition;
}
