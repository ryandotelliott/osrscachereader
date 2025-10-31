export default class ModelGroup {
    constructor(models?: any[]);
    position: {
        x: number;
        y: number;
        z: number;
    };
    needsUpdate: boolean;
    models: any[];
    addModel(model: any): void;
    removeModel(): void;
    mergeModels(): void;
    mergedModel: ModelDefinition;
    getMergedModel(): ModelDefinition;
    getAllModels(): any[];
}
import { ModelDefinition } from "../loaders/ModelLoader.js";
