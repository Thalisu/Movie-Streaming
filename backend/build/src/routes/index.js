"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaRouter = exports.genresRouter = exports.moviesRouter = void 0;
var movies_1 = require("./movies");
Object.defineProperty(exports, "moviesRouter", { enumerable: true, get: function () { return __importDefault(movies_1).default; } });
var genres_1 = require("./genres");
Object.defineProperty(exports, "genresRouter", { enumerable: true, get: function () { return __importDefault(genres_1).default; } });
var media_1 = require("./media");
Object.defineProperty(exports, "mediaRouter", { enumerable: true, get: function () { return __importDefault(media_1).default; } });
