"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3 = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const constant_1 = require("./constant");
exports.s3 = new client_s3_1.S3({
    region: constant_1.default_region,
});
