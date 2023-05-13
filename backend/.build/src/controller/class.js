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
exports.updateClass = exports.getClass = exports.deleteClass = exports.createClass = void 0;
const uuid_1 = require("uuid");
const class_1 = require("../models/class");
const createClass = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, image, description } = JSON.parse(event.body || "{}");
        if (!name || !image || !description) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Missing required fields" }),
            };
        }
        const Class = {
            name,
            id: (0, uuid_1.v4)(),
            image,
            description,
        };
        const message = yield (0, class_1.CreateClass)(Class);
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
exports.createClass = createClass;
const deleteClass = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = event.pathParameters || {};
        if (!id) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Invalid ID" }),
            };
        }
        const message = yield (0, class_1.DeleteClass)(id);
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
exports.deleteClass = deleteClass;
const getClass = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = event.pathParameters || {};
        if (!id) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Invalid ID" }),
            };
        }
        const message = (0, class_1.GetClass)(id);
        if (!message) {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: "Class not found" }),
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
exports.getClass = getClass;
const updateClass = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = event.pathParameters || {};
    const { name } = JSON.parse(event.body || "{}");
    try {
        const message = (0, class_1.UpdateClass)(id, name);
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
exports.updateClass = updateClass;
