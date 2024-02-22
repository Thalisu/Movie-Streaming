"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./logger"));
const errorHandler = (error, _request, _response, next) => {
    logger_1.default.error(error);
    next(error);
};
exports.default = { errorHandler };
