'use strict';

import { log, toJSON } from "../src/flog";

//jest tests

// test logger - can't test the actual console.log
var logged;
const logger = (text, data) => {
  logged = [text, data];
  return undefined;
};

const transformer = toJSON; // eg. to tabbed JSON
const threshold = 0; // log every level greater than zero
const level = 1; // very detailed; eg. detailed debug level
const t = "text";
const data = ["brave", "new", "world"];

it("logger returns data passed", () => {
  expect(log(logger)(transformer)(threshold)(level)(t)(data)).toBe(data);
});

it("transforms to JSON and logs, but only level is above threshold", () => {
  expect((log(logger)(transformer)(threshold)(level)(t)("x"), logged)).toEqual([
    t,
    '"x"'
  ]);
});

it("transformer function defaults to identity function (ie no transformation)", () => {
  expect((log(logger)()(threshold)(level)(t)("x"), logged)).toEqual([t, "x"]);
});

it("skips logging when level is below threshold", () => {
  expect(
    ((logged = "test"),
    log(logger)(transformer)(2)(1)(t)("should not get logged"),
    logged)
  ).toBe("test");
});
