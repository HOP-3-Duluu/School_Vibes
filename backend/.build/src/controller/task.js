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
exports.getTodayTask = exports.getTaskByDate = exports.updateTask = exports.getTask = exports.deleteTask = exports.createTask = void 0;
const uuid_1 = require("uuid");
const Task_1 = require("../models/Task");
const createTask = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { groupName, image, description, title, date, type } = JSON.parse(event.body || "{}");
        if (!groupName || !image || !description) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Missing required fields" }),
            };
        }
        const Task = {
            groupName,
            id: (0, uuid_1.v4)(),
            image,
            description,
            title,
            date,
            type,
        };
        const message = yield (0, Task_1.CreateTask)(Task);
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
exports.createTask = createTask;
const deleteTask = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = event.pathParameters || {};
        if (!id) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Invalid ID" }),
            };
        }
        const message = yield (0, Task_1.DeleteTask)(id);
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
exports.deleteTask = deleteTask;
const getTask = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = event.pathParameters || {};
        if (!id) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Invalid ID" }),
            };
        }
        const message = yield (0, Task_1.GetTask)(id);
        if (!message) {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: "Task not found" }),
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
exports.getTask = getTask;
const updateTask = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = event.pathParameters || {};
    const { name } = JSON.parse(event.body || "{}");
    try {
        const message = yield (0, Task_1.UpdateTask)(id, name);
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
exports.updateTask = updateTask;
const getTaskByDate = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = event.pathParameters || {};
        if (!id) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Invalid Date" }),
            };
        }
        const message = yield (0, Task_1.GetTaskByDate)(id);
        if (!message) {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: "Task not found" }),
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
exports.getTaskByDate = getTaskByDate;
const getTodayTask = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const message = yield (0, Task_1.GetTodayTask)();
        if (!message) {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: "Task not found" }),
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
exports.getTodayTask = getTodayTask;
