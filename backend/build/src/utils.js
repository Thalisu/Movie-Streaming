"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNumber = exports.isNumber = exports.parseTime = exports.parseType = void 0;
const types_1 = require("./types");
const logger_1 = require("../utils/logger");
const isString = (text) => {
    if (!text)
        return false;
    return typeof text === "string" || text instanceof String;
};
const isType = (type) => {
    return Object.values(types_1.Type)
        .map((v) => v.toString())
        .includes(type);
};
const parseType = (type) => {
    if (!isString(type) || !isType(type)) {
        (0, logger_1.error)(`Incorrect or missing type: ${type}`);
        throw new Error(`Incorrect or missing type: ${type}`);
    }
    return type;
};
exports.parseType = parseType;
const isTime = (time) => {
    return Object.values(types_1.Time)
        .map((v) => v.toString())
        .includes(time);
};
const parseTime = (time) => {
    if (!isString(time) || !isTime(time)) {
        (0, logger_1.error)(`Incorrect or missing time: ${time}`);
        throw new Error(`Incorrect or missing time: ${time}`);
    }
    return time;
};
exports.parseTime = parseTime;
const isNumber = (num) => {
    if (!num)
        return false;
    return !isNaN(Number(num));
};
exports.isNumber = isNumber;
const parseNumber = (num) => {
    if (!(0, exports.isNumber)(num)) {
        (0, logger_1.error)(`Incorrect or missing quantity: ${num}`);
        throw new Error(`Incorrect or missing quantity: ${num}`);
    }
    return Number(num);
};
exports.parseNumber = parseNumber;
