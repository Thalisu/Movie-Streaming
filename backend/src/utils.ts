import {  Time, Type } from "./types";
import { error } from "../utils/logger";


const isString = (text: unknown): text is string => {
  if (!text) return false;
  return typeof text === "string" || text instanceof String;
};
const isType = (type: string): type is Type => {
  return Object.values(Type)
    .map((v) => v.toString())
    .includes(type);
};

export const parseType = (type: unknown): Type => {
  if (!isString(type) || !isType(type)) {
    error(`Incorrect or missing type: ${type}`);
    throw new Error(`Incorrect or missing type: ${type}`);
  }
  return type;
};

const isTime = (time: string): time is Time => {
  return Object.values(Time)
    .map((v) => v.toString())
    .includes(time);
};

export const parseTime = (time: unknown): Time => {
  if (!isString(time) || !isTime(time)) {
    error(`Incorrect or missing time: ${time}`);
    throw new Error(`Incorrect or missing time: ${time}`);
  }
  return time;
};

export const isNumber = (num: unknown): num is number => {
  if (!num) return false;
  return !isNaN(Number(num));
};

export const parseNumber = (num: unknown): number => {
  if (!isNumber(num)) {
    error(`Incorrect or missing quantity: ${num}`);
    throw new Error(`Incorrect or missing quantity: ${num}`);
  }
  return Number(num);
};