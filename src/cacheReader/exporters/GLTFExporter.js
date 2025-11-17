import * as base64 from "../helpers/base64.js";

import { createCanvas } from "canvas";

const BRIGHTNESS_MAX = 0.6;
const HUE_OFFSET = 0.5 / 64;
const SATURATION_OFFSET = 0.5 / 8;

function unpackHue(hsl) {
    return (hsl >> 10) & 63;
}

function unpackSaturation(hsl) {
    return (hsl >> 7) & 7;
}

function unpackLuminance(hsl) {
    return hsl & 127;
}

function HSLtoRGB(hsl, brightness) {
    let hue = unpackHue(hsl) / 64 + HUE_OFFSET;
    let saturation = unpackSaturation(hsl) / 8 + SATURATION_OFFSET;
    let luminance = unpackLuminance(hsl) / 128;

    let chroma = (1 - Math.abs(2 * luminance - 1)) * saturation;
    let x = chroma * (1 - Math.abs(((hue * 6) % 2) - 1));
    let lightness = luminance - chroma / 2;

    let r = lightness,
        g = lightness,
        b = lightness;

    switch (parseInt(hue * 6)) {
        case 0:
            r += chroma;
            g += x;
            break;
        case 1:
            g += chroma;
            r += x;
            break;
        case 2:
            g += chroma;
            b += x;
            break;
        case 3:
            b += chroma;
            g += x;
            break;
        case 4:
            b += chroma;
            r += x;
            break;
        default:
            r += chroma;
            b += x;
            break;
    }

    let rgb = (parseInt(r * 256.0) << 16) | (parseInt(g * 256.0) << 8) | parseInt(b * 256.0);

    rgb = adjustForBrightness(rgb, brightness);

    if (rgb == 0) {
        rgb = 1;
    }
    return rgb;
}

function adjustForBrightness(rgb, brightness) {
    let r = (rgb >> 16) / 256.0;
    let g = ((rgb >> 8) & 255) / 256.0;
    let b = (rgb & 255) / 256.0;

    r = Math.pow(r, brightness);
    g = Math.pow(g, brightness);
    b = Math.pow(b, brightness);

    return (parseInt(r * 256.0) << 16) | (parseInt(g * 256.0) << 8) | parseInt(b * 256.0);
}

class GLTFFile {
    //Basically just setting it up for 1 model
    scene = 0;
    scenes = [{ nodes: [0] }];

    nodes = [{ mesh: 0 }];

    meshes = [{ primitives: [] }];

    textures = [];
    images = [];
    samplers = [];
    materials = [];
    animations;

    buffers = [];
    bufferViews = [];

    accessors = [];

    asset = {
        version: "2.0",
    };

    addIndicies(indicies) {
        let indicesBytes = new Uint8Array(new Uint16Array(indicies.flat()).buffer);
        let buffersAmount = this.buffers.length;
        this.buffers.push({
            uri: "data:application/octet-stream;base64," + base64.bytesToBase64(indicesBytes),
            byteLength: indicesBytes.length,
        });

        this.bufferViews.push({
            buffer: buffersAmount,
            byteOffset: 0,
            byteLength: indicesBytes.length,
            target: 34963,
        });

        let max = indicies.flat().reduce((max, current) => Math.max(max, current), 0);
        this.accessors.push({
            bufferView: buffersAmount,
            byteOffset: 0,
            componentType: 5123,
            count: indicesBytes.length / 2,
            type: "SCALAR",
            max: [max],
            min: [0],
        });
    }

    // assume the indices are added right before the vertices
    addVerticies(verticies) {
        this.meshes[0].primitives.push({
            attributes: {
                POSITION: this.buffers.length,
            },
            indices: this.buffers.length - 1,
        });
        let max = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
        let min = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
        for (let i = 0; i < verticies.length; i++) {
            max = [
                Math.max(max[0], verticies[i][0]),
                Math.max(max[1], verticies[i][1]),
                Math.max(max[2], verticies[i][2]),
            ];
            min = [
                Math.min(min[0], verticies[i][0]),
                Math.min(min[1], verticies[i][1]),
                Math.min(min[2], verticies[i][2]),
            ];
        }

        let verticiesBytes = new Uint8Array(new Float32Array(verticies.flat()).buffer);

        let buffersAmount = this.buffers.length;
        this.buffers.push({
            uri: "data:application/octet-stream;base64," + base64.bytesToBase64(verticiesBytes),
            byteLength: verticiesBytes.length,
        });

        this.bufferViews.push({
            buffer: buffersAmount,
            byteOffset: 0,
            byteLength: verticiesBytes.length,
        });

        this.accessors.push({
            bufferView: buffersAmount,
            byteOffset: 0,
            componentType: 5126,
            count: verticies.length,
            type: "VEC3",
            max,
            min,
        });
    }

    addMorphTarget(verticies, primitive) {
        let max = [verticies[0][0], verticies[0][1], verticies[0][2]];
        let min = [verticies[0][0], verticies[0][1], verticies[0][2]];
        for (let i = 0; i < verticies.length; i++) {
            max = [
                Math.max(max[0], verticies[i][0]),
                Math.max(max[1], verticies[i][1]),
                Math.max(max[2], verticies[i][2]),
            ];
            min = [
                Math.min(min[0], verticies[i][0]),
                Math.min(min[1], verticies[i][1]),
                Math.min(min[2], verticies[i][2]),
            ];
        }

        let verticiesBytes = new Uint8Array(new Float32Array(verticies.flat()).buffer);

        if (!("targets" in this.meshes[0].primitives[primitive])) {
            this.meshes[0].primitives[primitive].targets = [];
            if (primitive === 0) {
                this.meshes[0].weights = [];
            } else {
                this.meshes[0].weights = [1];
            }
        }

        let buffersAmount = this.buffers.length;

        if (primitive === 0) {
            this.meshes[0].weights.push(0);
        }
        this.meshes[0].primitives[primitive].targets.push({
            POSITION: this.accessors.length, // the one we're about to add
        });

        this.buffers.push({
            uri: "data:application/octet-stream;base64," + base64.bytesToBase64(verticiesBytes),
            byteLength: verticiesBytes.length,
        });
        this.bufferViews.push({
            buffer: buffersAmount,
            byteOffset: 0,
            byteLength: verticiesBytes.length,
            target: 34962,
        });

        this.accessors.push({
            bufferView: this.bufferViews.length - 1,
            byteOffset: 0,
            componentType: 5126,
            count: verticies.length,
            type: "VEC3",
            // max,
            // min,
        });
    }

    addAnimation(targets, lengths, morphTargetsAmount, name) {
        if (!this.animations) {
            this.animations = [];
        }
        targets = targets.map((x) => {
            let oneHot = new Array(morphTargetsAmount).fill(0);
            oneHot[x] = 1;
            return oneHot;
        }); //one hot encoding

        let targetBytes = new Uint8Array(new Float32Array(targets.flat()).buffer);
        let lengthsBytes = new Uint8Array(new Float32Array(lengths).buffer);

        let mergedBytes = new Uint8Array(lengthsBytes.length + targetBytes.length);
        mergedBytes.set(lengthsBytes);
        mergedBytes.set(targetBytes, lengthsBytes.length);

        let buffersAmount = this.buffers.length;
        this.buffers.push({
            uri: "data:application/octet-stream;base64," + base64.bytesToBase64(mergedBytes),
            byteLength: mergedBytes.length,
        });

        this.bufferViews.push({
            buffer: buffersAmount,
            byteOffset: 0,
            byteLength: lengthsBytes.length,
        });

        this.bufferViews.push({
            buffer: buffersAmount,
            byteOffset: lengthsBytes.length,
            byteLength: targetBytes.length,
        });

        let max = lengths[0];
        let min = lengths[0];
        for (let i = 0; i < lengths.length; i++) {
            max = Math.max(max, lengths[i]);
            min = Math.min(min, lengths[i]);
        }

        let accessorsLength = this.accessors.length;
        this.accessors.push({
            bufferView: this.bufferViews.length - 2,
            byteOffset: 0,
            componentType: 5126,
            count: targets.length,
            type: "SCALAR",
            max: [max],
            min: [min],
        });

        this.accessors.push({
            bufferView: this.bufferViews.length - 1,
            byteOffset: 0,
            componentType: 5126,
            count: morphTargetsAmount * targets.length,
            type: "SCALAR",
            max: [1.0],
            min: [0.0],
        });

        let animationsLength = this.animations.length;
        this.animations.push({
            name,
            samplers: [
                {
                    input: accessorsLength,
                    interpolation: "STEP",
                    output: accessorsLength + 1,
                },
            ],
            channels: [
                {
                    sampler: 0,
                    target: {
                        node: 0,
                        path: "weights",
                    },
                },
            ],
        });
    }

    addColors(uvs, colorPalettePng, primitive, transparent = false) {
        let uvBytes = new Uint8Array(new Float32Array(uvs.flat()).buffer);

        if (colorPalettePng) {
            const texturesAmount = this.textures.length;
            this.textures.push({
                source: texturesAmount,
                sampler: texturesAmount,
            });

            this.images.push({
                uri: colorPalettePng,
            });
        }

        this.samplers.push({
            magFilter: 9728,
            minFilter: 9987,
            wrapS: 33648,
            wrapT: 33648,
        });

        this.materials.push({
            ...(transparent && { alphaMode: "BLEND" }),
            pbrMetallicRoughness: {
                baseColorTexture: {
                    index: 0,
                },
                metallicFactor: 0.0,
                roughnessFactor: 1.0,
            },
        });

        let buffersAmount = this.buffers.length;
        this.buffers.push({
            uri: "data:application/gltf-buffer;base64," + base64.bytesToBase64(uvBytes),
            byteLength: uvBytes.length,
        });

        let bufferViewAmount = this.bufferViews.length;
        this.bufferViews.push({
            buffer: buffersAmount,
            byteOffset: 0,
            target: 34962,
            byteLength: uvBytes.length,
        });

        let min = [1.0, 1.0];
        let max = [0.0, 0.0];
        for (let i = 0; i < uvs.length; i++) {
            max = [Math.max(max[0], uvs[i][0]), Math.max(max[1], uvs[i][1])];
            min = [Math.min(min[0], uvs[i][0]), Math.min(min[1], uvs[i][1])];
        }
        this.accessors.push({
            bufferView: bufferViewAmount,
            byteOffset: 0,
            componentType: 5126,
            count: uvs.length,
            type: "VEC2",
            max,
            min,
        });

        this.meshes[0].primitives[primitive].attributes.TEXCOORD_0 = this.accessors.length - 1;
        this.meshes[0].primitives[primitive].material = this.materials.length - 1;
    }

    addVertexColors(colors, primitive, transparent = false) {
        const colorArray = colors.flat();
        const colorBytes = new Uint8Array(new Float32Array(colorArray).buffer);

        this.materials.push({
            ...(transparent && { alphaMode: "BLEND" }),
            pbrMetallicRoughness: {
                metallicFactor: 0.0,
                roughnessFactor: 1.0,
            },
        });

        const buffersAmount = this.buffers.length;
        this.buffers.push({
            uri: "data:application/gltf-buffer;base64," + base64.bytesToBase64(colorBytes),
            byteLength: colorBytes.length,
        });

        const bufferViewAmount = this.bufferViews.length;
        this.bufferViews.push({
            buffer: buffersAmount,
            byteOffset: 0,
            target: 34962,
            byteLength: colorBytes.length,
        });

        let min = [1.0, 1.0, 1.0];
        let max = [0.0, 0.0, 0.0];
        for (let i = 0; i < colors.length; i++) {
            const c = colors[i] || [1.0, 1.0, 1.0];
            max = [Math.max(max[0], c[0]), Math.max(max[1], c[1]), Math.max(max[2], c[2])];
            min = [Math.min(min[0], c[0]), Math.min(min[1], c[1]), Math.min(min[2], c[2])];
        }
        this.accessors.push({
            bufferView: bufferViewAmount,
            byteOffset: 0,
            componentType: 5126,
            count: colors.length,
            type: "VEC3",
            max,
            min,
        });

        this.meshes[0].primitives[primitive].attributes.COLOR_0 = this.accessors.length - 1;
        this.meshes[0].primitives[primitive].material = this.materials.length - 1;
    }
}

export default class GLTFExporter {
    // regular (non-alpha) vertices
    verticies = [];
    // regular (non-alpha) faces
    faces = [];
    alphaVertices = [];
    alphaFaces = [];
    morphTargetsAmount = 0;

    // every {vertex + color} pair is deduplicated so that combination only appears once in the vertex buffer
    indices = [];
    alphaIndices = [];

    morphVertices = [];
    alphaMorphVertices = [];

    animations = [];
    uvs = [];
    alphaUvs = [];
    colors = [];
    alphaColors = [];

    colorPalettePng = null;

    modelDef;
    morphTargetsMap = {};

    /**
     * mapping of original vertex ID to new vertex IDs
     * if alpha is true, it refers to the position in this.alphaVertices, otherwise this.verticies
     * @type {[originalIdx: number]: {[colorKey: number]: {idx: number, alpha: boolean}}}
     */
    remappedVertices = {};

    combineColorAndAlpha = (color, alpha) => (color & 0xffffff) | ((alpha & 0xff) << 24);

    constructor(def) {
        this.modelDef = def;
        this.verticies = [];
        this.alphaVertices = [];

        const vertexColorPairs = {};
        const alphaVertexColorPairs = {};
        for (let i = 0; i < def.faceVertexIndices1.length; i++) {
            const alpha = def.faceAlphas[i] ?? 0;
            const isAlpha = alpha !== 0;
            const dest = isAlpha ? this.alphaVertices : this.verticies;
            const destIndices = isAlpha ? this.alphaIndices : this.indices;
            const destPairs = isAlpha ? alphaVertexColorPairs : vertexColorPairs;
            if (isAlpha) {
                this.alphaFaces.push(i);
            } else {
                this.faces.push(i);
            }
            const v1 = def.faceVertexIndices1[i];
            const v2 = def.faceVertexIndices2[i];
            const v3 = def.faceVertexIndices3[i];
            const color = def.faceColors[i];
            // for deduplication
            const pairKey = this.combineColorAndAlpha(color, alpha);
            const faceVertices = [v1, v2, v3];
            faceVertices.forEach((idx, pos) => {
                if (!(idx in destPairs)) {
                    destPairs[idx] = {};
                }
                if (!(pairKey in destPairs[idx])) {
                    // encountering this vertex-color pair for the first time
                    destPairs[idx][pairKey] = dest.length;
                    dest.push([def.vertexPositionsX[idx], -def.vertexPositionsY[idx], -def.vertexPositionsZ[idx]]);
                }
                const vertexIndex = destPairs[idx][pairKey];
                destIndices.push(vertexIndex);
                if (!(idx in this.remappedVertices)) {
                    this.remappedVertices[idx] = {};
                }
                // maintain a multimap of original vertex ID to where they are now in the destination vertex array. It is further keyed
                // by the colour+alpha.
                this.remappedVertices[idx][pairKey] = {
                    idx: vertexIndex,
                    pairKey,
                    alpha: isAlpha,
                };
            });
        }
    }

    /**
     *
     * @param {*} morphVertices array of vertices for the morph target
     * @returns the position of the morph target that was inserted
     */
    addMorphTarget(morphVertices, id = -1) {
        let newMorphVertices = [];
        let newAlphaMorphVertices = [];
        for (let i = 0; i < morphVertices.length; i++) {
            const realVertices = this.remappedVertices[i];
            // may end up reprocessing each vertex multiple times if it appears in multiple colours, but thats OK
            for (const { idx: newIdx, alpha } of Object.values(realVertices || {})) {
                const src = alpha ? this.alphaVertices : this.verticies;
                const dest = alpha ? newAlphaMorphVertices : newMorphVertices;
                dest[newIdx] = [];
                dest[newIdx][0] = morphVertices[i][0] - src[newIdx][0];
                dest[newIdx][1] = morphVertices[i][1] - src[newIdx][1];
                dest[newIdx][2] = morphVertices[i][2] - src[newIdx][2];
            }
        }

        if (!(id in this.morphTargetsMap)) {
            this.morphTargetsMap[id] = this.morphVertices.length;
        }

        this.morphVertices.push(newMorphVertices);
        if (this.alphaVertices.length > 0) {
            this.alphaMorphVertices.push(newAlphaMorphVertices);
        }

        return this.morphTargetsAmount++;
    }

    addAnimation(morphTargetIds, baseLengths, name) {
		let cumulative = 0;
		const lengths = new Array(baseLengths.length);
		for (let i = 0; i < baseLengths.length; i++) {
			lengths[i] = cumulative / 50;
			cumulative += baseLengths[i];
		}
		// include the last frame's duration by appending an end timestamp
		// and duplicating the final frame target so counts align
		if (baseLengths.length > 0 && morphTargetIds.length > 0) {
			lengths.push(cumulative / 50);
			morphTargetIds = morphTargetIds.concat(morphTargetIds[morphTargetIds.length - 1]);
		}
		this.animations.push({ morphTargetIds, lengths, name });
    }

    async addSequence(cache, def) {
        let targets;
        let frameIDs;
        let frameLengths;

        if (def.animMayaID != undefined && def.animMayaID != -1) {
            let anim = await this.modelDef.loadAnimation(cache, def.id, false, true);
            const id = def.animMayaID >> 16;
            targets = [[id, anim.vertexData]];

            frameIDs = new Array(anim.vertexData.length).fill().map((x, i) => (id << 16) + i + 1);
            frameLengths = anim.lengths;
        } else {
            targets = Array.from(new Set(def.frameIDs.map(id => id >> 16)));
            targets = await Promise.all(targets.map(async (targetId, i) => {
                let skeletonAnims = await this.modelDef.loadSkeletonAnims(cache, this.modelDef, targetId, false);
                return [targetId, skeletonAnims.map(x => x.vertices)];
            }));

            frameIDs = def.frameIDs;
            frameLengths = def.frameLengths;
        }


        targets.forEach(targetData => {
            const [targetId, frames] = targetData;
            if (targetId in this.morphTargetsMap) return;

            frames.forEach(frame => this.addMorphTarget(frame, targetId));
        });

        let frameIDsToIndex = (frameID) => {
            const skeletonId = frameID >> 16;
            const frame = (frameID & 65535) - 1;
            return this.morphTargetsMap[skeletonId] + frame;
        }

        this.addAnimation(frameIDs.map(frameIDsToIndex), frameLengths, def.name);
    }

    addColors() {
        // Create per-vertex RGB colors (COLOR_0) instead of palette UVs
        this.colors = new Array(this.verticies.length);
        this.alphaColors = new Array(this.alphaVertices.length);

        const colorToFloat3 = (rsColor /*, alphaByte*/) => {
            const rgb = HSLtoRGB(rsColor, BRIGHTNESS_MAX);
            const r = ((rgb >> 16) & 0xff) / 255.0;
            const g = ((rgb >> 8) & 0xff) / 255.0;
            const b = (rgb & 0xff) / 255.0;
            // decode sRGB -> linear, because glTF expects vertex colors in linear space
            const srgbToLinear = (c) => (c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
            return [srgbToLinear(r), srgbToLinear(g), srgbToLinear(b)];
        };

        for (let i = 0; i < this.faces.length; i++) {
            const faceId = this.faces[i];
            const faceColor = this.modelDef.faceColors[faceId];
            const faceAlpha = this.modelDef.faceAlphas[faceId] ?? 0;
            const lookupKey = this.combineColorAndAlpha(faceColor, faceAlpha);
            const c = colorToFloat3(faceColor, faceAlpha);
            const v1 = this.remappedVertices[this.modelDef.faceVertexIndices1[faceId]][lookupKey].idx;
            const v2 = this.remappedVertices[this.modelDef.faceVertexIndices2[faceId]][lookupKey].idx;
            const v3 = this.remappedVertices[this.modelDef.faceVertexIndices3[faceId]][lookupKey].idx;
            this.colors[v1] = c;
            this.colors[v2] = c;
            this.colors[v3] = c;
        }
        for (let i = 0; i < this.alphaFaces.length; i++) {
            const faceId = this.alphaFaces[i];
            const faceColor = this.modelDef.faceColors[faceId];
            const faceAlpha = this.modelDef.faceAlphas[faceId] ?? 0;
            const lookupKey = this.combineColorAndAlpha(faceColor, faceAlpha);
            const c = colorToFloat3(faceColor, faceAlpha);
            const v1 = this.remappedVertices[this.modelDef.faceVertexIndices1[faceId]][lookupKey].idx;
            const v2 = this.remappedVertices[this.modelDef.faceVertexIndices2[faceId]][lookupKey].idx;
            const v3 = this.remappedVertices[this.modelDef.faceVertexIndices3[faceId]][lookupKey].idx;
            this.alphaColors[v1] = c;
            this.alphaColors[v2] = c;
            this.alphaColors[v3] = c;
        }
        // Default any missing entries to white
        for (let i = 0; i < this.colors.length; i++) {
            if (!this.colors[i]) this.colors[i] = [1.0, 1.0, 1.0];
        }
        for (let i = 0; i < this.alphaColors.length; i++) {
            if (!this.alphaColors[i]) this.alphaColors[i] = [1.0, 1.0, 1.0];
        }
    }

    constructFile() {
        const file = new GLTFFile();
        let alphaPrimitiveIndex = 0;
        // add vertices
        if (this.verticies.length > 0) {
            file.addIndicies(this.indices);
            file.addVerticies(this.verticies);
            ++alphaPrimitiveIndex;
        }
        if (this.alphaVertices.length > 0) {
            file.addIndicies(this.alphaIndices);
            file.addVerticies(this.alphaVertices);
        }

        // add morph vertices
        for (let i = 0; i < this.morphVertices.length; ++i) {
            const morphVertices = this.morphVertices[i];
            if (morphVertices?.length > 0) {
                file.addMorphTarget(morphVertices, 0);
            }
            const alphaMorphVertices = this.alphaMorphVertices[i];
            if (alphaMorphVertices?.length > 0) {
                file.addMorphTarget(alphaMorphVertices, alphaPrimitiveIndex);
            }
        }

        // add animations
        this.animations.forEach(({ morphTargetIds, lengths, name }) => {
            file.addAnimation(morphTargetIds, lengths, this.morphTargetsAmount, name);
        });

        // add vertex colors instead of UV palette
        file.addVertexColors(this.colors, 0);
        if (this.alphaVertices.length > 0) {
            file.addVertexColors(this.alphaColors, alphaPrimitiveIndex, true);
        }
        return file;
    }

    export() {
        return JSON.stringify(this.constructFile());
    }
}
