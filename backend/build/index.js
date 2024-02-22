"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app"));
const logger_1 = require("./utils/logger");
const PORT = 3003;
app_1.default.listen(PORT, () => {
    (0, logger_1.info)(`Server running on port ${PORT}`);
});
