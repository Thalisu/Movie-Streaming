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
exports.getMovies = void 0;
const axios_1 = __importDefault(require("axios"));
const types_1 = require("../types");
const genres_1 = __importDefault(require("../../data/genres"));
const videoService_1 = __importDefault(require("./videoService"));
const treatData = (movies, isUpcoming) => __awaiter(void 0, void 0, void 0, function* () {
    const moviesData = yield Promise.all(movies.map((movie) => __awaiter(void 0, void 0, void 0, function* () {
        const title = movie.title;
        const backdrop_path = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
        const poster_path = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
        const overview = movie.overview;
        const genres = movie.genre_ids.map((id) => {
            var _a, _b;
            const foundData = (_b = (_a = genres_1.default.find((data) => data.id === id)) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : "genre id not found";
            return foundData;
        });
        const release_date = movie.release_date;
        const vote_average = movie.vote_average;
        const popularity = movie.popularity;
        const id = movie.id;
        let video;
        if (isUpcoming)
            video = yield (0, videoService_1.default)(id);
        return new types_1.Movie({
            title,
            backdrop_path,
            poster_path,
            overview,
            genres,
            release_date,
            vote_average,
            popularity,
            video,
            id,
        });
    })));
    return moviesData;
});
const getMovieData = (data, type) => {
    return type === types_1.Type.Upcoming
        ? data.filter((data) => new Date() < new Date(data.release_date))
        : data;
};
const getMovies = (quantity, url, type) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios_1.default.get(url);
    const maxPages = data.total_pages;
    const movieData = getMovieData(data.results, type);
    if (movieData.length < quantity) {
        for (let i = 2; i <= maxPages; i++) {
            const { data } = yield axios_1.default.get(`${url}&page=${i}`);
            movieData.push(...getMovieData(data.results, type));
            if (movieData.length >= quantity)
                break;
        }
    }
    return treatData(movieData.slice(0, quantity), type === types_1.Type.Upcoming);
});
exports.getMovies = getMovies;
