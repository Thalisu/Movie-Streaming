"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const isUpcoming = (releaseDate) => {
    if (new Date() > new Date(releaseDate))
        return false;
    return true;
};
(0, globals_1.describe)("Today date", () => {
    (0, globals_1.test)("console.log date", () => {
        (0, globals_1.expect)(isUpcoming("2024-02-14")).toBe(false);
    });
    (0, globals_1.test)("console.log date", () => {
        (0, globals_1.expect)(isUpcoming("2024-03-14")).toBe(true);
    });
    (0, globals_1.test)("console.log date", () => {
        (0, globals_1.expect)(isUpcoming("2024-01-14")).toBe(false);
    });
    (0, globals_1.test)("console.log date", () => {
        (0, globals_1.expect)(isUpcoming("2023-01-14")).toBe(false);
    });
    (0, globals_1.test)("console.log date", () => {
        (0, globals_1.expect)(isUpcoming("2020-02-14")).toBe(false);
    });
});
