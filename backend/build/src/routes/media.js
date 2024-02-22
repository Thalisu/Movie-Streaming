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
const axios_1 = __importDefault(require("axios"));
const express_1 = require("express");
/* import { info } from "../utils/logger"; */
const config_1 = __importDefault(require("../../utils/config"));
const mediaRouter = (0, express_1.Router)();
mediaRouter.get("/image/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const response = yield axios_1.default.get(`${config_1.default.BASE_URL}movie/${id}/images?api_key=${config_1.default.API_KEY}`);
    res.json(response.data);
}));
mediaRouter.get("/videos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const response = yield axios_1.default.get(`${config_1.default.BASE_URL}movie/${id}/videos?api_key=${config_1.default.API_KEY}`);
    res.json(response.data);
}));
exports.default = mediaRouter;
