"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClass = exports.GetClass = exports.DeleteClass = exports.CreateClass = void 0;
const util_dynamodb_1 = require("@aws-sdk/util-dynamodb");
const database_1 = require("../lib/database");
const TableName = "Classes";
const CreateClass = (Class) => __awaiter(void 0, void 0, void 0, function* () {
    const marshalledClass = (0, util_dynamodb_1.marshall)(Class);
    const params = {
        TableName,
        Item: marshalledClass,
    };
    //s3
    yield database_1.db.putItem(params);
    return "Class created successfully";
});
exports.CreateClass = CreateClass;
const DeleteClass = (classId) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        TableName,
        Key: (0, util_dynamodb_1.marshall)({ id: classId }),
    };
    yield database_1.db.deleteItem(params);
    return "Class deleted successfully";
});
exports.DeleteClass = DeleteClass;
const GetClass = (classId) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        TableName,
        Key: (0, util_dynamodb_1.marshall)({ id: classId }),
    };
    const { Item: item } = yield database_1.db.getItem(params);
    return item;
});
exports.GetClass = GetClass;
const UpdateClass = (classId, name) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        TableName,
        Key: (0, util_dynamodb_1.marshall)({ id: classId, name }),
    };
    yield database_1.db.updateItem(params);
    return "Class updated successfully";
});
exports.UpdateClass = UpdateClass;
