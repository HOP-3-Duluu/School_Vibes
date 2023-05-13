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
exports.updateGroup = exports.getGroup = exports.deleteGroup = exports.createGroup = void 0;
const uuid_1 = require("uuid");
const group_1 = require("../models/group");
const createGroup = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, image, description } = JSON.parse(event.body || "{}");
        if (!name || !image || !description) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Missing required fields" }),
            };
        }
        const group = {
            name,
            id: (0, uuid_1.v4)(),
            image,
            description,
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
                body: JSON.stringify({ message: "Invalid ID" }),
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
    const { id } = event.pathParameters || {};
    const { name } = JSON.parse(event.body || "{}");
    try {
        const message = (0, group_1.UpdateGroup)(id, name);
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
