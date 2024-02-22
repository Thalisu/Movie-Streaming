"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = exports.Type = exports.Time = void 0;
var Time;
(function (Time) {
    Time["Week"] = "week";
    Time["Day"] = "day";
})(Time || (exports.Time = Time = {}));
var Type;
(function (Type) {
    Type["Popular"] = "popular";
    Type["Top_rated"] = "top_rated";
    Type["Upcoming"] = "upcoming";
    Type["Latest"] = "latest";
})(Type || (exports.Type = Type = {}));
class Movie {
    constructor(movie) {
        this.title = movie.title;
        this.backdrop_path = movie.backdrop_path;
        this.poster_path = movie.poster_path;
        this.overview = movie.overview;
        this.genres = movie.genres;
        this.release_date = movie.release_date;
        this.vote_average = movie.vote_average;
        this.popularity = movie.popularity;
        this.video = movie.video;
        this.id = movie.id;
    }
}
exports.Movie = Movie;
