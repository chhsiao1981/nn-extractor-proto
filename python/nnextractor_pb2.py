# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: nnextractor.proto
# Protobuf Python Version: 5.28.3
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import runtime_version as _runtime_version
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
_runtime_version.ValidateProtobufRuntimeVersion(
    _runtime_version.Domain.PUBLIC,
    5,
    28,
    3,
    '',
    'nnextractor.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x11nnextractor.proto\x12\x0bnnextractor\",\n\x08NNTensor\x12\r\n\x05shape\x18\x01 \x03(\x11\x12\x11\n\tthe_bytes\x18\x02 \x01(\x0c\"\xcd\x01\n\tPrimitive\x12,\n\x08the_type\x18\x01 \x01(\x0e\x32\x1a.nnextractor.PrimitiveType\x12\x0e\n\x01\x62\x18\x02 \x01(\x08H\x00\x88\x01\x01\x12\x0e\n\x01s\x18\x03 \x01(\tH\x01\x88\x01\x01\x12\x10\n\x03\x66\x36\x34\x18\x04 \x01(\x01H\x02\x88\x01\x01\x12\x10\n\x03\x66\x33\x32\x18\x05 \x01(\x02H\x03\x88\x01\x01\x12\x10\n\x03i64\x18\x06 \x01(\x12H\x04\x88\x01\x01\x12\x10\n\x03i32\x18\x07 \x01(\x11H\x05\x88\x01\x01\x42\x04\n\x02_bB\x04\n\x02_sB\x06\n\x04_f64B\x06\n\x04_f32B\x06\n\x04_i64B\x06\n\x04_i32\"p\n\x03NII\x12%\n\x06tensor\x18\x01 \x01(\x0b\x32\x15.nnextractor.NNTensor\x12\x0e\n\x06origin\x18\x02 \x03(\x01\x12\x11\n\tdirection\x18\x03 \x03(\x01\x12\x0f\n\x07spacing\x18\x04 \x03(\x01\x12\x0e\n\x06\x61\x66\x66ine\x18\x05 \x03(\x01\"\x8d\x04\n\x04Item\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\'\n\x08the_type\x18\x02 \x01(\x0e\x32\x15.nnextractor.ItemType\x12\x17\n\nother_type\x18\x03 \x01(\tH\x00\x88\x01\x01\x12.\n\tprimitive\x18\x04 \x01(\x0b\x32\x16.nnextractor.PrimitiveH\x01\x88\x01\x01\x12*\n\x06tensor\x18\x05 \x01(\x0b\x32\x15.nnextractor.NNTensorH\x02\x88\x01\x01\x12\"\n\x03nii\x18\x06 \x01(\x0b\x32\x10.nnextractor.NIIH\x03\x88\x01\x01\x12#\n\x08the_list\x18\x07 \x03(\x0b\x32\x11.nnextractor.Item\x12.\n\x07the_map\x18\x08 \x03(\x0b\x32\x1d.nnextractor.Item.TheMapEntry\x12)\n\x07op_type\x18\t \x01(\x0e\x32\x13.nnextractor.OpTypeH\x04\x88\x01\x01\x12)\n\top_params\x18\n \x01(\x0b\x32\x11.nnextractor.ItemH\x05\x88\x01\x01\x1a@\n\x0bTheMapEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12 \n\x05value\x18\x02 \x01(\x0b\x32\x11.nnextractor.Item:\x02\x38\x01\x42\r\n\x0b_other_typeB\x0c\n\n_primitiveB\t\n\x07_tensorB\x06\n\x04_niiB\n\n\x08_op_typeB\x0c\n\n_op_params\"7\n\x05Items\x12\x0c\n\x04name\x18\x01 \x01(\t\x12 \n\x05items\x18\x02 \x03(\x0b\x32\x11.nnextractor.Item\"J\n\x0cNNRecordMeta\x12\r\n\x05shape\x18\x01 \x03(\x11\x12+\n\x08the_type\x18\x02 \x01(\x0e\x32\x19.nnextractor.NNTensorType\"\xd3\x03\n\x08NNRecord\x12\x11\n\x04name\x18\x01 \x01(\tH\x00\x88\x01\x01\x12+\n\x08the_type\x18\x02 \x01(\x0e\x32\x19.nnextractor.NNRecordType\x12*\n\x06tensor\x18\x03 \x01(\x0b\x32\x15.nnextractor.NNTensorH\x01\x88\x01\x01\x12&\n\x07records\x18\x04 \x03(\x0b\x32\x15.nnextractor.NNRecord\x12\x32\n\x07the_map\x18\x05 \x03(\x0b\x32!.nnextractor.NNRecord.TheMapEntry\x12,\n\x04meta\x18\x06 \x01(\x0b\x32\x19.nnextractor.NNRecordMetaH\x02\x88\x01\x01\x12)\n\x07op_type\x18\x07 \x01(\x0e\x32\x13.nnextractor.OpTypeH\x03\x88\x01\x01\x12)\n\top_params\x18\x08 \x01(\x0b\x32\x11.nnextractor.ItemH\x04\x88\x01\x01\x1a\x44\n\x0bTheMapEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12$\n\x05value\x18\x02 \x01(\x0b\x32\x15.nnextractor.NNRecord:\x02\x38\x01\x42\x07\n\x05_nameB\t\n\x07_tensorB\x07\n\x05_metaB\n\n\x08_op_typeB\x0c\n\n_op_params\"E\n\x0bNNParameter\x12\x0c\n\x04name\x18\x01 \x01(\t\x12(\n\tparameter\x18\x02 \x01(\x0b\x32\x15.nnextractor.NNRecord\"\xda\x02\n\x06NNNode\x12\x0c\n\x04name\x18\x01 \x01(\t\x12%\n\x06inputs\x18\x02 \x03(\x0b\x32\x15.nnextractor.NNRecord\x12(\n\x06params\x18\x03 \x03(\x0b\x32\x18.nnextractor.NNParameter\x12.\n\nactivation\x18\x04 \x01(\x0b\x32\x15.nnextractor.NNRecordH\x00\x88\x01\x01\x12.\n\x0fgradient_inputs\x18\x05 \x03(\x0b\x32\x15.nnextractor.NNRecord\x12\x31\n\x0fgradient_params\x18\x06 \x03(\x0b\x32\x18.nnextractor.NNParameter\x12(\n\tgradients\x18\x07 \x03(\x0b\x32\x15.nnextractor.NNRecord\x12%\n\x08\x63hildren\x18\x08 \x03(\x0b\x32\x13.nnextractor.NNNodeB\r\n\x0b_activation\"d\n\x08Taskflow\x12+\n\x08the_type\x18\x01 \x01(\x0e\x32\x19.nnextractor.TaskflowType\x12\x0f\n\x07\x66low_id\x18\x02 \x01(\x03\x12\x11\n\x04name\x18\x03 \x01(\tH\x00\x88\x01\x01\x42\x07\n\x05_name\"\x83\x03\n\x0bNNExtractor\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\'\n\x08taskflow\x18\x02 \x03(\x0b\x32\x15.nnextractor.Taskflow\x12\"\n\x06inputs\x18\x03 \x03(\x0b\x32\x12.nnextractor.Items\x12(\n\x0cpreprocesses\x18\x04 \x03(\x0b\x32\x12.nnextractor.Items\x12\"\n\x05nodes\x18\x05 \x03(\x0b\x32\x13.nnextractor.NNNode\x12)\n\rpostprocesses\x18\x06 \x03(\x0b\x32\x12.nnextractor.Items\x12#\n\x07outputs\x18\x07 \x03(\x0b\x32\x12.nnextractor.Items\x12%\n\x08\x66orwards\x18\x08 \x03(\x0b\x32\x13.nnextractor.NNNode\x12&\n\tbackwards\x18\t \x03(\x0b\x32\x13.nnextractor.NNNode\x12,\n\nextractors\x18\n \x03(\x0b\x32\x18.nnextractor.NNExtractor*\x95\x03\n\x0cNNTensorType\x12\x13\n\x0fNNT_UNSPECIFIED\x10\x00\x12\x0c\n\x08NNT_BOOL\x10\x01\x12\x0c\n\x08NNT_INT8\x10\x02\x12\r\n\tNNT_INT16\x10\x03\x12\r\n\tNNT_INT32\x10\x04\x12\r\n\tNNT_INT64\x10\x05\x12\x0f\n\x0bNNT_FLOAT32\x10\x06\x12\x0f\n\x0bNNT_FLOAT64\x10\x07\x12\x0f\n\x0bNNT_FLOAT16\x10\x08\x12\r\n\tNNT_UINT8\x10\t\x12\x0e\n\nNNT_UINT16\x10\n\x12\x0e\n\nNNT_UINT32\x10\x0b\x12\x0e\n\nNNT_UINT64\x10\x0c\x12\x10\n\x0cNNT_BFLOAT16\x10\r\x12\x11\n\rNNT_COMPLEX32\x10\x0e\x12\x11\n\rNNT_COMPLEX64\x10\x0f\x12\x12\n\x0eNNT_COMPLEX128\x10\x10\x12\x0e\n\nNNT_UQINT8\x10\x11\x12\r\n\tNNT_QINT8\x10\x12\x12\x0e\n\nNNT_QINT32\x10\x13\x12\x0e\n\nNNT_UQINT4\x10\x14\x12\x15\n\x11NNT_FLOAT8_E4M3FN\x10\x15\x12\x13\n\x0fNNT_FLOAT8_E5M2\x10\x16*q\n\rPrimitiveType\x12\x11\n\rP_UNSPECIFIED\x10\x00\x12\n\n\x06P_NULL\x10\x01\x12\n\n\x06P_BOOL\x10\x04\x12\t\n\x05P_STR\x10\x05\x12\t\n\x05P_F64\x10\x06\x12\t\n\x05P_F32\x10\x07\x12\t\n\x05P_I64\x10\x08\x12\t\n\x05P_I32\x10\t*\xcd\x01\n\x08ItemType\x12\x11\n\rI_UNSPECIFIED\x10\x00\x12\t\n\x05I_RAW\x10\x01\x12\x0b\n\x07I_OTHER\x10\x02\x12\x0e\n\nI_NNTENSOR\x10\x03\x12\t\n\x05I_NII\x10\x04\x12\x0b\n\x07I_IMAGE\x10\x05\x12\x0b\n\x07I_AUDIO\x10\x06\x12\x11\n\rI_SPECTROGRAM\x10\x07\x12\n\n\x06I_TEXT\x10\x08\x12\x0c\n\x08I_NUMBER\x10\t\x12\x11\n\rI_TEXT_NUMBER\x10\n\x12\n\n\x06I_NULL\x10\x0b\x12\n\n\x06I_LIST\x10\x0c\x12\t\n\x05I_MAP\x10\r*\xb6\x01\n\x06OpType\x12\x11\n\rO_UNSPECIFIED\x10\x00\x12\r\n\tO_UNKNOWN\x10\x01\x12\x0b\n\x07O_OTHER\x10\x02\x12\n\n\x06O_NONE\x10\x03\x12\n\n\x06O_CROP\x10\x04\x12\t\n\x05O_PAD\x10\x05\x12\n\n\x06O_FLIP\x10\x06\x12\x0c\n\x08O_ORIGIN\x10\x07\x12\r\n\tO_SPACING\x10\x08\x12\x0f\n\x0bO_DIRECTION\x10\t\x12\x0c\n\x08O_AFFINE\x10\n\x12\x12\n\x0eO_GEO_IDENTITY\x10\x0b*[\n\x0cNNRecordType\x12\x13\n\x0fNNR_UNSPECIFIED\x10\x00\x12\r\n\tNNR_ARRAY\x10\x01\x12\x0c\n\x08NNR_LIST\x10\x03\x12\x0b\n\x07NNR_MAP\x10\x04\x12\x0c\n\x08NNR_META\x10\x05*\x91\x01\n\x0cTaskflowType\x12\x11\n\rT_UNSPECIFIED\x10\x00\x12\x0b\n\x07T_INPUT\x10\x01\x12\x10\n\x0cT_PREPROCESS\x10\x02\x12\r\n\tT_FORWARD\x10\x03\x12\x0e\n\nT_BACKWARD\x10\x04\x12\x11\n\rT_POSTPROCESS\x10\x05\x12\x0c\n\x08T_OUTPUT\x10\x06\x12\x0f\n\x0bT_EXTRACTOR\x10\x07\x42\x02H\x02\x62\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'nnextractor_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'H\002'
  _globals['_ITEM_THEMAPENTRY']._loaded_options = None
  _globals['_ITEM_THEMAPENTRY']._serialized_options = b'8\001'
  _globals['_NNRECORD_THEMAPENTRY']._loaded_options = None
  _globals['_NNRECORD_THEMAPENTRY']._serialized_options = b'8\001'
  _globals['_NNTENSORTYPE']._serialized_start=2446
  _globals['_NNTENSORTYPE']._serialized_end=2851
  _globals['_PRIMITIVETYPE']._serialized_start=2853
  _globals['_PRIMITIVETYPE']._serialized_end=2966
  _globals['_ITEMTYPE']._serialized_start=2969
  _globals['_ITEMTYPE']._serialized_end=3174
  _globals['_OPTYPE']._serialized_start=3177
  _globals['_OPTYPE']._serialized_end=3359
  _globals['_NNRECORDTYPE']._serialized_start=3361
  _globals['_NNRECORDTYPE']._serialized_end=3452
  _globals['_TASKFLOWTYPE']._serialized_start=3455
  _globals['_TASKFLOWTYPE']._serialized_end=3600
  _globals['_NNTENSOR']._serialized_start=34
  _globals['_NNTENSOR']._serialized_end=78
  _globals['_PRIMITIVE']._serialized_start=81
  _globals['_PRIMITIVE']._serialized_end=286
  _globals['_NII']._serialized_start=288
  _globals['_NII']._serialized_end=400
  _globals['_ITEM']._serialized_start=403
  _globals['_ITEM']._serialized_end=928
  _globals['_ITEM_THEMAPENTRY']._serialized_start=790
  _globals['_ITEM_THEMAPENTRY']._serialized_end=854
  _globals['_ITEMS']._serialized_start=930
  _globals['_ITEMS']._serialized_end=985
  _globals['_NNRECORDMETA']._serialized_start=987
  _globals['_NNRECORDMETA']._serialized_end=1061
  _globals['_NNRECORD']._serialized_start=1064
  _globals['_NNRECORD']._serialized_end=1531
  _globals['_NNRECORD_THEMAPENTRY']._serialized_start=1408
  _globals['_NNRECORD_THEMAPENTRY']._serialized_end=1476
  _globals['_NNPARAMETER']._serialized_start=1533
  _globals['_NNPARAMETER']._serialized_end=1602
  _globals['_NNNODE']._serialized_start=1605
  _globals['_NNNODE']._serialized_end=1951
  _globals['_TASKFLOW']._serialized_start=1953
  _globals['_TASKFLOW']._serialized_end=2053
  _globals['_NNEXTRACTOR']._serialized_start=2056
  _globals['_NNEXTRACTOR']._serialized_end=2443
# @@protoc_insertion_point(module_scope)
