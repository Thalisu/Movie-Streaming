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
const express_1 = require("express");
const config_1 = __importDefault(require("../../utils/config"));
const utils_1 = require("../utils");
const movieService_1 = require("../services/movieService");
const moviesRouter = (0, express_1.Router)();
// eslint-disable-next-line @typescript-eslint/no-misused-promises
moviesRouter.get("/trending/:time/:quantity/:after?", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const time = (0, utils_1.parseTime)(req.params.time);
    const quantity = (0, utils_1.parseNumber)(req.params.quantity);
    const url = `${config_1.default.BASE_URL}trending/movie/${time}?api_key=${config_1.default.API_KEY}`;
    /*   if (isNumber(req.params.after)) info("todo"); */
    const movies = yield (0, movieService_1.getMovies)(quantity, url);
    res.json(movies);
}));
// eslint-disable-next-line @typescript-eslint/no-misused-promises
moviesRouter.get("/:type/:quantity/:after?", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const type = (0, utils_1.parseType)(req.params.type);
    const quantity = (0, utils_1.parseNumber)(req.params.quantity);
    const url = `${config_1.default.BASE_URL}movie/${type}?api_key=${config_1.default.API_KEY}`;
    /*   if (isNumber(req.params.after)) info("todo"); */
    const movies = yield (0, movieService_1.getMovies)(quantity, url, type);
    res.json(movies);
}));
exports.default = moviesRouter;
