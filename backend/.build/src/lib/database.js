"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const constant_1 = require("./constant");
exports.db = new client_dynamodb_1.DynamoDB({
    region: constant_1.default_region,
});
