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
exports.GetUserGroup = exports.UpdateGroup = exports.GetGroup = exports.DeleteGroup = exports.CreateGroup = void 0;
const util_dynamodb_1 = require("@aws-sdk/util-dynamodb");
const database_1 = require("../lib/database");
const TableName = "Groups";
const CreateGroup = (group) => __awaiter(void 0, void 0, void 0, function* () {
    const marshalledGroup = (0, util_dynamodb_1.marshall)(group);
    const params = {
        TableName,
        Item: marshalledGroup,
    };
    yield database_1.db.putItem(params);
    return "Group created successfully";
});
exports.CreateGroup = CreateGroup;
const DeleteGroup = (groupId) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        TableName,
        Key: (0, util_dynamodb_1.marshall)({ id: groupId }),
    };
    yield database_1.db.deleteItem(params);
    return "Group deleted successfully";
});
exports.DeleteGroup = DeleteGroup;
const GetGroup = (groupId) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        TableName,
        Key: (0, util_dynamodb_1.marshall)({ id: groupId }),
    };
    const { Item: item } = yield database_1.db.getItem(params);
    return (0, util_dynamodb_1.unmarshall)(item);
});
exports.GetGroup = GetGroup;
const UpdateGroup = (group) => __awaiter(void 0, void 0, void 0, function* () {
    const marshalledGroup = (0, util_dynamodb_1.marshall)(group);
    const params = {
        TableName,
        Item: marshalledGroup,
    };
    yield database_1.db.putItem(params);
    return "Group updated successfully";
});
exports.UpdateGroup = UpdateGroup;
const GetUserGroup = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        TableName: "Users",
        Key: (0, util_dynamodb_1.marshall)({ id: userId }),
    };
    const { Item: item } = yield database_1.db.getItem(params);
    const groups = [];
    if (item && item.groups) {
        const userGroups = item.groups.L;
        for (const group of userGroups) {
            const groupId = group.S;
            const groupData = yield (0, exports.GetGroup)(groupId);
            groups.push(groupData);
        }
    }
    return groups;
});
exports.GetUserGroup = GetUserGroup;
