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
exports.UpdateUser = exports.GetUser = exports.DeleteUser = exports.LoginUser = exports.CreateUser = void 0;
const util_dynamodb_1 = require("@aws-sdk/util-dynamodb");
const database_1 = require("../lib/database");
const TableName = "Users";
const CreateUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const marshalledUser = (0, util_dynamodb_1.marshall)(user);
    const params = {
        TableName,
        Item: marshalledUser,
    };
    //s3
    yield database_1.db.putItem(params);
    return "User created successfully";
});
exports.CreateUser = CreateUser;
const LoginUser = (gmail) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        TableName,
        IndexName: "gmail-index",
        KeyConditionExpression: "#id = :value",
        ExpressionAttributeNames: {
            "#id": "gmail",
        },
        ExpressionAttributeValues: {
            ":value": {
                S: gmail,
            },
        },
    };
    const { Items: items } = yield database_1.db.query(params);
    return items;
});
exports.LoginUser = LoginUser;
const DeleteUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        TableName,
        Key: (0, util_dynamodb_1.marshall)({ id: userId }),
    };
    yield database_1.db.deleteItem(params);
    return "User deleted successfully";
});
exports.DeleteUser = DeleteUser;
const GetUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        TableName,
        Key: (0, util_dynamodb_1.marshall)({ id: userId }),
    };
    const { Item: item } = yield database_1.db.getItem(params);
    return (0, util_dynamodb_1.unmarshall)(item);
});
exports.GetUser = GetUser;
const UpdateUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        TableName,
        Key: (0, util_dynamodb_1.marshall)(user),
    };
    yield database_1.db.putItem(params);
    return "User updated successfully";
});
exports.UpdateUser = UpdateUser;
