"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("express-async-errors");
const middleware_1 = __importDefault(require("../utils/middleware"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.static("dist"));
app.use(express_1.default.json());
app.use("/api/movies", routes_1.moviesRouter);
app.use("/api/genres", routes_1.genresRouter);
app.use("/api/media", routes_1.mediaRouter);
app.use(middleware_1.default.errorHandler);
/* app.use("/api/videos", videosRouter); */
exports.default = app;
