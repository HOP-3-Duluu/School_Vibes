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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTaskByDate = exports.GetTodayTask = exports.UpdateTask = exports.GetTask = exports.DeleteTask = exports.CreateTask = void 0;
const util_dynamodb_1 = require("@aws-sdk/util-dynamodb");
const database_1 = require("../lib/database");
const moment_1 = __importDefault(require("moment"));
const TableName = "Tasks";
const CreateTask = (Task) => __awaiter(void 0, void 0, void 0, function* () {
    const marshalledTask = (0, util_dynamodb_1.marshall)(Task);
    const params = {
        TableName,
        Item: marshalledTask,
    };
    //s3
    yield database_1.db.putItem(params);
    return "Task created successfully";
});
exports.CreateTask = CreateTask;
const DeleteTask = (TaskId) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        TableName,
        Key: (0, util_dynamodb_1.marshall)({ id: TaskId }),
    };
    yield database_1.db.deleteItem(params);
    return "Task deleted successfully";
});
exports.DeleteTask = DeleteTask;
const GetTask = (TaskId) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        TableName,
        Key: (0, util_dynamodb_1.marshall)({ id: TaskId }),
    };
    const { Item: item } = yield database_1.db.getItem(params);
    return item;
});
exports.GetTask = GetTask;
const UpdateTask = (TaskId, name) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        TableName,
        Key: (0, util_dynamodb_1.marshall)({ id: TaskId, name }),
    };
    yield database_1.db.updateItem(params);
    return "Task updated successfully";
});
exports.UpdateTask = UpdateTask;
const GetTodayTask = () => __awaiter(void 0, void 0, void 0, function* () {
    const today = (0, moment_1.default)().format("DD");
    console.log("today ====>", today);
    const params = {
        TableName,
    };
    const { Items: items } = yield database_1.db.scan(params);
    const todayTasks = items.filter((task) => {
        const taskDate = (0, moment_1.default)(task.date.S).format("DD");
        console.log("task ==> ", taskDate);
        return taskDate == today;
    });
    return todayTasks;
});
exports.GetTodayTask = GetTodayTask;
const GetTaskByDate = (day) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        TableName,
    };
    const { Items: items } = yield database_1.db.scan(params);
    const dateTasks = items.filter((task) => {
        const taskDate = (0, moment_1.default)(task.date.S);
        return taskDate.format("DD") == day;
    });
    console.log(dateTasks);
    return dateTasks;
});
exports.GetTaskByDate = GetTaskByDate;
