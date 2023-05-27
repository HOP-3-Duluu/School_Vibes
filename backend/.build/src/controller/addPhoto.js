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
exports.CreateContent = void 0;
const s3_1 = require("../lib/s3");
const client_s3_1 = require("@aws-sdk/client-s3");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
const uuid_1 = require("uuid");
const CreateContent = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const { base: base64Data } = JSON.parse(event.body);
    const bucketParams = {
        Bucket: "demoday2023",
        Key: `${(0, uuid_1.v4)().substring(0, 6)}.png`,
        Body: Buffer.from(base64Data, "base64"),
        ContentType: "image/png",
        ContentEncoding: "base64",
    };
    try {
        yield s3_1.s3.putObject(bucketParams);
        try {
            const command = new client_s3_1.GetObjectCommand(bucketParams);
            const signedUrl = yield (0, s3_request_presigner_1.getSignedUrl)(s3_1.s3, command);
            return signedUrl;
        }
        catch (err) {
            throw err;
        }
    }
    catch (error) {
        throw error;
    }
});
exports.CreateContent = CreateContent;
