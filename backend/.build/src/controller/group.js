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
exports.getUserGroup = exports.updateGroup = exports.getGroup = exports.deleteGroup = exports.joinGroup = exports.createGroup = void 0;
const util_dynamodb_1 = require("@aws-sdk/util-dynamodb");
const uuid_1 = require("uuid");
const database_1 = require("../lib/database");
const group_1 = require("../models/group");
const createGroup = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, detail } = JSON.parse(event.body || "{}");
        if (!name || !detail) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Missing required fields" }),
            };
        }
        const group = {
            id: (0, uuid_1.v4)(),
            name,
            detail,
            tasks: [],
            members: [],
            color: "green",
        };
        const message = yield (0, group_1.CreateGroup)(group);
        return {
            statusCode: 200,
            body: JSON.stringify({ message }),
        };
    }
    catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal server error" }),
        };
    }
});
exports.createGroup = createGroup;
const joinGroup = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { groupId, userId } = JSON.parse(event.body || "{}");
        if (!groupId || !userId) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Missing required fields" }),
            };
        }
        const group = yield database_1.db.updateItem({
            TableName: "Groups",
            Key: (0, util_dynamodb_1.marshall)({ id: groupId }),
            UpdateExpression: "set #members = list_append(if_not_exists(#members, :emptyList), :userId)",
            ExpressionAttributeNames: {
                "#members": "members",
            },
            ExpressionAttributeValues: (0, util_dynamodb_1.marshall)({
                ":userId": [userId],
                ":emptyList": [],
            }),
            ReturnValues: "UPDATED_NEW",
        });
        const user = yield database_1.db.updateItem({
            TableName: "Users",
            Key: (0, util_dynamodb_1.marshall)({ id: userId }),
            UpdateExpression: "set #groups = list_append(if_not_exists(#groups, :emptyList), :groupId)",
            ExpressionAttributeNames: {
                "#groups": "groups",
            },
            ExpressionAttributeValues: (0, util_dynamodb_1.marshall)({
                ":groupId": [groupId],
                ":emptyList": [],
            }),
            ReturnValues: "UPDATED_NEW",
        });
        return {
            statusCode: 200,
            body: JSON.stringify({ message: { group, user } }),
        };
    }
    catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal server error" }),
        };
    }
});
exports.joinGroup = joinGroup;
const deleteGroup = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = event.pathParameters || {};
        if (!id) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Invalid ID" }),
            };
        }
        const message = yield (0, group_1.DeleteGroup)(id);
        return {
            statusCode: 200,
            body: JSON.stringify({ message }),
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal server error" }),
        };
    }
});
exports.deleteGroup = deleteGroup;
const getGroup = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = event.pathParameters || {};
        if (!id) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Invalid group ID" }),
            };
        }
        const message = yield (0, group_1.GetGroup)(id);
        if (!message) {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: "Group not found" }),
            };
        }
        return {
            statusCode: 200,
            body: JSON.stringify({ message }),
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal server error" }),
        };
    }
});
exports.getGroup = getGroup;
const updateGroup = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const message = (0, group_1.UpdateGroup)(JSON.parse(event.body || "{}"));
        return {
            body: JSON.stringify({ message }),
            statusCode: 200,
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal server error" }),
        };
    }
});
exports.updateGroup = updateGroup;
const getUserGroup = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = event.pathParameters || {};
        if (!id) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Invalid ID" }),
            };
        }
        const message = yield (0, group_1.GetUserGroup)(id);
        if (!message) {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: "Group not found" }),
            };
        }
        return {
            statusCode: 200,
            body: JSON.stringify({ message }),
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal server error" }),
        };
    }
});
exports.getUserGroup = getUserGroup;
