import { describe, expect, test } from "@jest/globals";

const isUpcoming = (releaseDate: string) => {
  if (new Date() > new Date(releaseDate)) return false;
  return true;
};

describe("Today date", () => {
  test("console.log date", () => {
    expect(isUpcoming("2024-02-14")).toBe(false);
  });
  test("console.log date", () => {
    expect(isUpcoming("2024-03-14")).toBe(true);
  });
  test("console.log date", () => {
    expect(isUpcoming("2024-01-14")).toBe(false);
  });
  test("console.log date", () => {
    expect(isUpcoming("2023-01-14")).toBe(false);
  });
  test("console.log date", () => {
    expect(isUpcoming("2020-02-14")).toBe(false);
  });
});
