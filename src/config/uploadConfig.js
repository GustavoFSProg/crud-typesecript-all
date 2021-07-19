"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
var uploadConfig = {
    // eslint-disable-next-line new-cap
    storage: multer_1.default.diskStorage({
        destination: path_1.default.resolve(__dirname, '..', '..', 'uploads'),
        filename: function (_req, file, cb) {
            var name = file.originalname.split('.')[0];
            var filename = name + ".jpg";
            cb(null, filename);
        },
    }),
};
exports.default = uploadConfig;
