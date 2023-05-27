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
exports.updateUser = exports.getUser = exports.deleteUser = exports.Login = exports.createUser = void 0;
const uuid_1 = require("uuid");
const User_1 = require("../models/User");
const createUser = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, gmail, password } = JSON.parse(event.body || "{}");
        if (!name || !gmail || !password) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Missing required fields" }),
            };
        }
        const User = {
            name,
            id: (0, uuid_1.v4)(),
            gmail,
            password,
        };
        const message = yield (0, User_1.CreateUser)(User);
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
exports.createUser = createUser;
const Login = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { gmail, password } = JSON.parse(event.body || "{}");
        const message = yield (0, User_1.LoginUser)(gmail);
        if (!message) {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: "User not found" }),
            };
        }
        if (message[0].password.S != password) {
            return {
                statusCode: 500,
                body: JSON.stringify({ message: "Нууц үг буруу байна" }),
            };
        }
        return {
            statusCode: 200,
            body: JSON.stringify({ message }),
        };
    }
    catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal server error" }),
        };
    }
});
exports.Login = Login;
const deleteUser = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = event.pathParameters || {};
        if (!id) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Invalid ID" }),
            };
        }
        const message = yield (0, User_1.DeleteUser)(id);
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
exports.deleteUser = deleteUser;
const getUser = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = event.pathParameters || {};
        if (!id) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Invalid user ID" }),
            };
        }
        const message = yield (0, User_1.GetUser)(id);
        if (!message) {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: "User not found" }),
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
exports.getUser = getUser;
const updateUser = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const message = (0, User_1.UpdateUser)(JSON.parse(event.body || "{}"));
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
exports.updateUser = updateUser;
