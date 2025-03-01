// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "nnextractor.proto" (package "nnextractor", syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
/**
 * nntensor
 *
 * @generated from protobuf message nnextractor.NNTensor
 */
export interface NNTensor {
    /**
     * @generated from protobuf field: repeated sint32 shape = 1;
     */
    shape: number[];
    /**
     * @generated from protobuf field: bytes the_bytes = 2;
     */
    theBytes: Uint8Array;
}
/**
 * Primitive is used for information not in the nn.
 * Used in inputs, preprocess, postprocess, and outputs.
 *
 * For primitives, it is better to directly encoded in meta.
 *
 * @generated from protobuf message nnextractor.Primitive
 */
export interface Primitive {
    /**
     * @generated from protobuf field: nnextractor.PrimitiveType the_type = 1;
     */
    theType: PrimitiveType;
    /**
     * @generated from protobuf field: optional bool b = 2;
     */
    b?: boolean;
    /**
     * @generated from protobuf field: optional string s = 3;
     */
    s?: string;
    /**
     * @generated from protobuf field: optional double f64 = 4;
     */
    f64?: number;
    /**
     * @generated from protobuf field: optional float f32 = 5;
     */
    f32?: number;
    /**
     * @generated from protobuf field: optional sint64 i64 = 6;
     */
    i64?: bigint;
    /**
     * @generated from protobuf field: optional sint32 i32 = 7;
     */
    i32?: number;
}
/**
 * @generated from protobuf message nnextractor.NII
 */
export interface NII {
    /**
     * @generated from protobuf field: nnextractor.NNTensor tensor = 1;
     */
    tensor?: NNTensor;
    /**
     * @generated from protobuf field: repeated double origin = 2;
     */
    origin: number[];
    /**
     * flattened [[0, 1, 2],
     *            [3, 4, 5],
     *            [6, 7, 8]]
     *
     * @generated from protobuf field: repeated double direction = 3;
     */
    direction: number[];
    /**
     * @generated from protobuf field: repeated double spacing = 4;
     */
    spacing: number[];
    /**
     * optional
     * flattened [[ 0,  1,  2,  3],
     *            [ 4,  5,  6,  7],
     *            [ 8,  9, 10, 11],
     *            [12, 13, 14, 15]]
     *
     * @generated from protobuf field: repeated double affine = 5;
     */
    affine: number[];
}
/**
 * Item is presented as either single item,
 * [same-kind] (list of same-kind items),
 * or map<str, same-kind> (dictionary of same-kind items).
 *
 * @generated from protobuf message nnextractor.Item
 */
export interface Item {
    /**
     * name
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * type
     *
     * @generated from protobuf field: nnextractor.ItemType the_type = 2;
     */
    theType: ItemType;
    /**
     * other type
     *
     * @generated from protobuf field: optional string other_type = 3;
     */
    otherType?: string;
    /**
     * @generated from protobuf field: optional nnextractor.Primitive primitive = 4;
     */
    primitive?: Primitive;
    /**
     * @generated from protobuf field: optional nnextractor.NNTensor tensor = 5;
     */
    tensor?: NNTensor;
    /**
     * @generated from protobuf field: optional nnextractor.NII nii = 6;
     */
    nii?: NII;
    /**
     * @generated from protobuf field: repeated nnextractor.Item the_list = 7;
     */
    theList: Item[];
    /**
     * @generated from protobuf field: map<string, nnextractor.Item> the_map = 8;
     */
    theMap: {
        [key: string]: Item;
    };
    /**
     * @generated from protobuf field: optional nnextractor.OpType op_type = 9;
     */
    opType?: OpType;
    /**
     * @generated from protobuf field: optional nnextractor.Item op_params = 10;
     */
    opParams?: Item;
}
/**
 * @generated from protobuf message nnextractor.Items
 */
export interface Items {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: repeated nnextractor.Item items = 2;
     */
    items: Item[];
}
/**
 * @generated from protobuf message nnextractor.NNRecordMeta
 */
export interface NNRecordMeta {
    /**
     * @generated from protobuf field: repeated sint32 shape = 1;
     */
    shape: number[];
    /**
     * @generated from protobuf field: nnextractor.NNTensorType the_type = 2;
     */
    theType: NNTensorType;
}
/**
 * NNRecord
 *
 * The very fundamental object representing record using np.ndarray,
 * NNRecord[], or {key: NNRecord}.
 *
 * By default. the OpType of the NNRecord is to scale from the input-images.
 *    (The scaling is supposed to be from previous layer, but there are
 *    floating-point precision issue.)
 *
 * @generated from protobuf message nnextractor.NNRecord
 */
export interface NNRecord {
    /**
     * name of the record
     * optionally already named in the parent class. (NNNode or Parameter)
     *
     * @generated from protobuf field: optional string name = 1;
     */
    name?: string;
    /**
     * @generated from protobuf field: nnextractor.NNRecordType the_type = 2;
     */
    theType: NNRecordType;
    /**
     * nntensor
     *
     * @generated from protobuf field: optional nnextractor.NNTensor tensor = 3;
     */
    tensor?: NNTensor;
    /**
     * NNRecord[]
     *
     * @generated from protobuf field: repeated nnextractor.NNRecord records = 4;
     */
    records: NNRecord[];
    /**
     * {key: NNRecord}
     *
     * @generated from protobuf field: map<string, nnextractor.NNRecord> the_map = 5;
     */
    theMap: {
        [key: string]: NNRecord;
    };
    /**
     * @generated from protobuf field: optional nnextractor.NNRecordMeta meta = 6;
     */
    meta?: NNRecordMeta;
    /**
     * @generated from protobuf field: optional nnextractor.OpType op_type = 7;
     */
    opType?: OpType;
    /**
     * @generated from protobuf field: optional nnextractor.Item op_params = 8;
     */
    opParams?: Item;
}
/**
 * NNParameter
 *
 * @generated from protobuf message nnextractor.NNParameter
 */
export interface NNParameter {
    /**
     * parameter name
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * parameter
     *
     * @generated from protobuf field: nnextractor.NNRecord parameter = 2;
     */
    parameter?: NNRecord;
}
/**
 * NNNode
 *
 * The nn-node represents the following computation:
 *
 *   activation = f(input_0, input_1, ...)
 *
 * The procedure of each nn-node is as follow:
 *   1. taking inputs
 *   2. processing with internal parameters.
 *   3. producing 1 activation.
 *   4. output to the children.
 *
 * @generated from protobuf message nnextractor.NNNode
 */
export interface NNNode {
    /**
     * name
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * input
     *
     * @generated from protobuf field: repeated nnextractor.NNRecord inputs = 2;
     */
    inputs: NNRecord[];
    /**
     * parameters
     *
     * @generated from protobuf field: repeated nnextractor.NNParameter params = 3;
     */
    params: NNParameter[];
    /**
     * activation
     *
     * @generated from protobuf field: optional nnextractor.NNRecord activation = 4;
     */
    activation?: NNRecord;
    /**
     * @generated from protobuf field: repeated nnextractor.NNRecord gradient_inputs = 5;
     */
    gradientInputs: NNRecord[];
    /**
     * @generated from protobuf field: repeated nnextractor.NNParameter gradient_params = 6;
     */
    gradientParams: NNParameter[];
    /**
     * @generated from protobuf field: repeated nnextractor.NNRecord gradients = 7;
     */
    gradients: NNRecord[];
    /**
     * the following activation nodes
     *
     * @generated from protobuf field: repeated nnextractor.NNNode children = 8;
     */
    children: NNNode[];
}
/**
 * @generated from protobuf message nnextractor.Taskflow
 */
export interface Taskflow {
    /**
     * @generated from protobuf field: nnextractor.TaskflowType the_type = 1;
     */
    theType: TaskflowType;
    /**
     * @generated from protobuf field: int64 flow_id = 2;
     */
    flowId: bigint;
    /**
     * @generated from protobuf field: optional string name = 3;
     */
    name?: string;
}
/**
 * NNExtractor
 *
 * A full NNExtractor setup includes:
 *   1. a bunch of inputs.
 *   2. optionally preprocessed inputs.
 *   3. put the preprocessed inputs into the models, generating the
 *   activations.
 *   4. optionally postprocessed results of the activations.
 *   5. integrated outputs.
 *
 *   6. a list of NNExtractor setup.
 *
 * @generated from protobuf message nnextractor.NNExtractor
 */
export interface NNExtractor {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: repeated nnextractor.Taskflow taskflow = 2;
     */
    taskflow: Taskflow[];
    /**
     * @generated from protobuf field: repeated nnextractor.Items inputs = 3;
     */
    inputs: Items[];
    /**
     * @generated from protobuf field: repeated nnextractor.Items preprocesses = 4;
     */
    preprocesses: Items[];
    /**
     * @generated from protobuf field: repeated nnextractor.NNNode nodes = 5;
     */
    nodes: NNNode[];
    /**
     * @generated from protobuf field: repeated nnextractor.Items postprocesses = 6;
     */
    postprocesses: Items[];
    /**
     * @generated from protobuf field: repeated nnextractor.Items outputs = 7;
     */
    outputs: Items[];
    /**
     * @generated from protobuf field: repeated nnextractor.NNNode forwards = 8;
     */
    forwards: NNNode[];
    /**
     * @generated from protobuf field: repeated nnextractor.NNNode backwards = 9;
     */
    backwards: NNNode[];
    /**
     * @generated from protobuf field: repeated nnextractor.NNExtractor extractors = 10;
     */
    extractors: NNExtractor[];
}
/**
 * @generated from protobuf enum nnextractor.NNTensorType
 */
export enum NNTensorType {
    /**
     * @generated from protobuf enum value: NNT_UNSPECIFIED = 0;
     */
    NNT_UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: NNT_BOOL = 1;
     */
    NNT_BOOL = 1,
    /**
     * @generated from protobuf enum value: NNT_INT8 = 2;
     */
    NNT_INT8 = 2,
    /**
     * @generated from protobuf enum value: NNT_INT16 = 3;
     */
    NNT_INT16 = 3,
    /**
     * @generated from protobuf enum value: NNT_INT32 = 4;
     */
    NNT_INT32 = 4,
    /**
     * @generated from protobuf enum value: NNT_INT64 = 5;
     */
    NNT_INT64 = 5,
    /**
     * @generated from protobuf enum value: NNT_FLOAT32 = 6;
     */
    NNT_FLOAT32 = 6,
    /**
     * @generated from protobuf enum value: NNT_FLOAT64 = 7;
     */
    NNT_FLOAT64 = 7,
    /**
     * @generated from protobuf enum value: NNT_FLOAT16 = 8;
     */
    NNT_FLOAT16 = 8,
    /**
     * @generated from protobuf enum value: NNT_UINT8 = 9;
     */
    NNT_UINT8 = 9,
    /**
     * @generated from protobuf enum value: NNT_UINT16 = 10;
     */
    NNT_UINT16 = 10,
    /**
     * @generated from protobuf enum value: NNT_UINT32 = 11;
     */
    NNT_UINT32 = 11,
    /**
     * @generated from protobuf enum value: NNT_UINT64 = 12;
     */
    NNT_UINT64 = 12,
    /**
     * @generated from protobuf enum value: NNT_BFLOAT16 = 13;
     */
    NNT_BFLOAT16 = 13,
    /**
     * @generated from protobuf enum value: NNT_COMPLEX32 = 14;
     */
    NNT_COMPLEX32 = 14,
    /**
     * @generated from protobuf enum value: NNT_COMPLEX64 = 15;
     */
    NNT_COMPLEX64 = 15,
    /**
     * @generated from protobuf enum value: NNT_COMPLEX128 = 16;
     */
    NNT_COMPLEX128 = 16,
    /**
     * @generated from protobuf enum value: NNT_UQINT8 = 17;
     */
    NNT_UQINT8 = 17,
    /**
     * @generated from protobuf enum value: NNT_QINT8 = 18;
     */
    NNT_QINT8 = 18,
    /**
     * @generated from protobuf enum value: NNT_QINT32 = 19;
     */
    NNT_QINT32 = 19,
    /**
     * @generated from protobuf enum value: NNT_UQINT4 = 20;
     */
    NNT_UQINT4 = 20,
    /**
     * @generated from protobuf enum value: NNT_FLOAT8_E4M3FN = 21;
     */
    NNT_FLOAT8_E4M3FN = 21,
    /**
     * @generated from protobuf enum value: NNT_FLOAT8_E5M2 = 22;
     */
    NNT_FLOAT8_E5M2 = 22
}
/**
 * @generated from protobuf enum nnextractor.PrimitiveType
 */
export enum PrimitiveType {
    /**
     * @generated from protobuf enum value: P_UNSPECIFIED = 0;
     */
    P_UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: P_NULL = 1;
     */
    P_NULL = 1,
    /**
     * @generated from protobuf enum value: P_BOOL = 4;
     */
    P_BOOL = 4,
    /**
     * @generated from protobuf enum value: P_STR = 5;
     */
    P_STR = 5,
    /**
     * @generated from protobuf enum value: P_F64 = 6;
     */
    P_F64 = 6,
    /**
     * @generated from protobuf enum value: P_F32 = 7;
     */
    P_F32 = 7,
    /**
     * @generated from protobuf enum value: P_I64 = 8;
     */
    P_I64 = 8,
    /**
     * @generated from protobuf enum value: P_I32 = 9;
     */
    P_I32 = 9
}
/**
 * Item Type
 *
 * The type of the item.
 * Item is presented as either single item,
 * [same-kind] (list of same-kind items),
 * or map<str, same-kind> (dictionary of same-kind items).
 *
 * @generated from protobuf enum nnextractor.ItemType
 */
export enum ItemType {
    /**
     * @generated from protobuf enum value: I_UNSPECIFIED = 0;
     */
    I_UNSPECIFIED = 0,
    /**
     * I don't know the type,
     * or the types are complicated and I don't want to specify the type.
     * I'll just say it is a raw type.
     * Let the renderer does whatever it wants.
     * (Usually the renderer just presents the data as ndarray)
     *
     * @generated from protobuf enum value: I_RAW = 1;
     */
    I_RAW = 1,
    /**
     * I know the type,
     * but it is not listed in the following settings.
     *
     * @generated from protobuf enum value: I_OTHER = 2;
     */
    I_OTHER = 2,
    /**
     * nntensor
     *
     * @generated from protobuf enum value: I_NNTENSOR = 3;
     */
    I_NNTENSOR = 3,
    /**
     * NII type (with origin, spacing, direction, affine)
     *
     * @generated from protobuf enum value: I_NII = 4;
     */
    I_NII = 4,
    /**
     * 2D-image
     *
     * @generated from protobuf enum value: I_IMAGE = 5;
     */
    I_IMAGE = 5,
    /**
     * audio (can be presented as sound, or time-domain presentation)
     *
     * @generated from protobuf enum value: I_AUDIO = 6;
     */
    I_AUDIO = 6,
    /**
     * spectrogram
     *
     * @generated from protobuf enum value: I_SPECTROGRAM = 7;
     */
    I_SPECTROGRAM = 7,
    /**
     * text
     *
     * @generated from protobuf enum value: I_TEXT = 8;
     */
    I_TEXT = 8,
    /**
     * number
     *
     * @generated from protobuf enum value: I_NUMBER = 9;
     */
    I_NUMBER = 9,
    /**
     * text or number
     *
     * @generated from protobuf enum value: I_TEXT_NUMBER = 10;
     */
    I_TEXT_NUMBER = 10,
    /**
     * null
     *
     * @generated from protobuf enum value: I_NULL = 11;
     */
    I_NULL = 11,
    /**
     * list of items
     *
     * @generated from protobuf enum value: I_LIST = 12;
     */
    I_LIST = 12,
    /**
     * map of items
     *
     * @generated from protobuf enum value: I_MAP = 13;
     */
    I_MAP = 13
}
/**
 * Op Type
 *
 * The type of the operations.
 *
 * OpType is defined in the item / record level.
 *
 * @generated from protobuf enum nnextractor.OpType
 */
export enum OpType {
    /**
     * @generated from protobuf enum value: O_UNSPECIFIED = 0;
     */
    O_UNSPECIFIED = 0,
    /**
     * https://journalofbigdata.springeropen.com/articles/10.1186/s40537-019-0197-0
     *
     * @generated from protobuf enum value: O_UNKNOWN = 1;
     */
    O_UNKNOWN = 1,
    /**
     * @generated from protobuf enum value: O_OTHER = 2;
     */
    O_OTHER = 2,
    /**
     * @generated from protobuf enum value: O_NONE = 3;
     */
    O_NONE = 3,
    /**
     * cropping region (region: list[[start, stop, step]])
     *
     * @generated from protobuf enum value: O_CROP = 4;
     */
    O_CROP = 4,
    /**
     * padding region (region: list[[lower, upper]])
     *
     * @generated from protobuf enum value: O_PAD = 5;
     */
    O_PAD = 5,
    /**
     * flip axes (axes: list[int])
     *
     * @generated from protobuf enum value: O_FLIP = 6;
     */
    O_FLIP = 6,
    /**
     * origin (origin: list[number])
     *
     * @generated from protobuf enum value: O_ORIGIN = 7;
     */
    O_ORIGIN = 7,
    /**
     * spacing (spacing: list[number])
     *
     * @generated from protobuf enum value: O_SPACING = 8;
     */
    O_SPACING = 8,
    /**
     * direction (direction: list[list[number]])
     *
     * @generated from protobuf enum value: O_DIRECTION = 9;
     */
    O_DIRECTION = 9,
    /**
     * affine (affine: list[list[number]])
     *
     * @generated from protobuf enum value: O_AFFINE = 10;
     */
    O_AFFINE = 10,
    /**
     * geo-identity
     *
     * @generated from protobuf enum value: O_GEO_IDENTITY = 11;
     */
    O_GEO_IDENTITY = 11
}
/**
 * @generated from protobuf enum nnextractor.NNRecordType
 */
export enum NNRecordType {
    /**
     * @generated from protobuf enum value: NNR_UNSPECIFIED = 0;
     */
    NNR_UNSPECIFIED = 0,
    /**
     * np.ndarray
     *
     * @generated from protobuf enum value: NNR_ARRAY = 1;
     */
    NNR_ARRAY = 1,
    /**
     * list / tuple
     *
     * @generated from protobuf enum value: NNR_LIST = 3;
     */
    NNR_LIST = 3,
    /**
     * dictionary / map for np.ndarray
     *
     * @generated from protobuf enum value: NNR_MAP = 4;
     */
    NNR_MAP = 4,
    /**
     * meta (if we do not want to store the whole ndarray (ex: inputs))
     *
     * @generated from protobuf enum value: NNR_META = 5;
     */
    NNR_META = 5
}
/**
 * @generated from protobuf enum nnextractor.TaskflowType
 */
export enum TaskflowType {
    /**
     * @generated from protobuf enum value: T_UNSPECIFIED = 0;
     */
    T_UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: T_INPUT = 1;
     */
    T_INPUT = 1,
    /**
     * @generated from protobuf enum value: T_PREPROCESS = 2;
     */
    T_PREPROCESS = 2,
    /**
     * @generated from protobuf enum value: T_FORWARD = 3;
     */
    T_FORWARD = 3,
    /**
     * @generated from protobuf enum value: T_BACKWARD = 4;
     */
    T_BACKWARD = 4,
    /**
     * @generated from protobuf enum value: T_POSTPROCESS = 5;
     */
    T_POSTPROCESS = 5,
    /**
     * @generated from protobuf enum value: T_OUTPUT = 6;
     */
    T_OUTPUT = 6,
    /**
     * @generated from protobuf enum value: T_EXTRACTOR = 7;
     */
    T_EXTRACTOR = 7
}
// @generated message type with reflection information, may provide speed optimized methods
class NNTensor$Type extends MessageType<NNTensor> {
    constructor() {
        super("nnextractor.NNTensor", [
            { no: 1, name: "shape", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 17 /*ScalarType.SINT32*/ },
            { no: 2, name: "the_bytes", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message nnextractor.NNTensor
 */
export const NNTensor = new NNTensor$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Primitive$Type extends MessageType<Primitive> {
    constructor() {
        super("nnextractor.Primitive", [
            { no: 1, name: "the_type", kind: "enum", T: () => ["nnextractor.PrimitiveType", PrimitiveType] },
            { no: 2, name: "b", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "s", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "f64", kind: "scalar", opt: true, T: 1 /*ScalarType.DOUBLE*/ },
            { no: 5, name: "f32", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 6, name: "i64", kind: "scalar", opt: true, T: 18 /*ScalarType.SINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 7, name: "i32", kind: "scalar", opt: true, T: 17 /*ScalarType.SINT32*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message nnextractor.Primitive
 */
export const Primitive = new Primitive$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NII$Type extends MessageType<NII> {
    constructor() {
        super("nnextractor.NII", [
            { no: 1, name: "tensor", kind: "message", T: () => NNTensor },
            { no: 2, name: "origin", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 1 /*ScalarType.DOUBLE*/ },
            { no: 3, name: "direction", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 1 /*ScalarType.DOUBLE*/ },
            { no: 4, name: "spacing", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 1 /*ScalarType.DOUBLE*/ },
            { no: 5, name: "affine", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 1 /*ScalarType.DOUBLE*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message nnextractor.NII
 */
export const NII = new NII$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Item$Type extends MessageType<Item> {
    constructor() {
        super("nnextractor.Item", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "the_type", kind: "enum", T: () => ["nnextractor.ItemType", ItemType] },
            { no: 3, name: "other_type", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "primitive", kind: "message", T: () => Primitive },
            { no: 5, name: "tensor", kind: "message", T: () => NNTensor },
            { no: 6, name: "nii", kind: "message", T: () => NII },
            { no: 7, name: "the_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Item },
            { no: 8, name: "the_map", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => Item } },
            { no: 9, name: "op_type", kind: "enum", opt: true, T: () => ["nnextractor.OpType", OpType] },
            { no: 10, name: "op_params", kind: "message", T: () => Item }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message nnextractor.Item
 */
export const Item = new Item$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Items$Type extends MessageType<Items> {
    constructor() {
        super("nnextractor.Items", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "items", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Item }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message nnextractor.Items
 */
export const Items = new Items$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NNRecordMeta$Type extends MessageType<NNRecordMeta> {
    constructor() {
        super("nnextractor.NNRecordMeta", [
            { no: 1, name: "shape", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 17 /*ScalarType.SINT32*/ },
            { no: 2, name: "the_type", kind: "enum", T: () => ["nnextractor.NNTensorType", NNTensorType] }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message nnextractor.NNRecordMeta
 */
export const NNRecordMeta = new NNRecordMeta$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NNRecord$Type extends MessageType<NNRecord> {
    constructor() {
        super("nnextractor.NNRecord", [
            { no: 1, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "the_type", kind: "enum", T: () => ["nnextractor.NNRecordType", NNRecordType] },
            { no: 3, name: "tensor", kind: "message", T: () => NNTensor },
            { no: 4, name: "records", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => NNRecord },
            { no: 5, name: "the_map", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => NNRecord } },
            { no: 6, name: "meta", kind: "message", T: () => NNRecordMeta },
            { no: 7, name: "op_type", kind: "enum", opt: true, T: () => ["nnextractor.OpType", OpType] },
            { no: 8, name: "op_params", kind: "message", T: () => Item }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message nnextractor.NNRecord
 */
export const NNRecord = new NNRecord$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NNParameter$Type extends MessageType<NNParameter> {
    constructor() {
        super("nnextractor.NNParameter", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "parameter", kind: "message", T: () => NNRecord }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message nnextractor.NNParameter
 */
export const NNParameter = new NNParameter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NNNode$Type extends MessageType<NNNode> {
    constructor() {
        super("nnextractor.NNNode", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "inputs", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => NNRecord },
            { no: 3, name: "params", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => NNParameter },
            { no: 4, name: "activation", kind: "message", T: () => NNRecord },
            { no: 5, name: "gradient_inputs", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => NNRecord },
            { no: 6, name: "gradient_params", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => NNParameter },
            { no: 7, name: "gradients", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => NNRecord },
            { no: 8, name: "children", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => NNNode }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message nnextractor.NNNode
 */
export const NNNode = new NNNode$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Taskflow$Type extends MessageType<Taskflow> {
    constructor() {
        super("nnextractor.Taskflow", [
            { no: 1, name: "the_type", kind: "enum", T: () => ["nnextractor.TaskflowType", TaskflowType] },
            { no: 2, name: "flow_id", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message nnextractor.Taskflow
 */
export const Taskflow = new Taskflow$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NNExtractor$Type extends MessageType<NNExtractor> {
    constructor() {
        super("nnextractor.NNExtractor", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "taskflow", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Taskflow },
            { no: 3, name: "inputs", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Items },
            { no: 4, name: "preprocesses", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Items },
            { no: 5, name: "nodes", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => NNNode },
            { no: 6, name: "postprocesses", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Items },
            { no: 7, name: "outputs", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Items },
            { no: 8, name: "forwards", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => NNNode },
            { no: 9, name: "backwards", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => NNNode },
            { no: 10, name: "extractors", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => NNExtractor }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message nnextractor.NNExtractor
 */
export const NNExtractor = new NNExtractor$Type();
