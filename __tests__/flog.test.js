'use strict';

import { flog, toJSON } from "../src/flog";

//jest tests

// test logger - can't test the actual console.log
var log;
const logger = (text, data) => {
  log = [text, data];
  return undefined;
};

const transformer = toJSON; // eg. to tabbed JSON
const threshold = 0; // log every level greater than zero
const level = 1; // very detailed; eg. detailed debug level
const t = "text";
const data = ["brave", "new", "world"];

it("logger returns data passed", () => {
  expect(flog(logger)(transformer)(threshold)(level)(t)(data)).toBe(data);
});

it("transforms to JSON and logs, but only level is above threshold", () => {
  expect((flog(logger)(transformer)(threshold)(level)(t)("x"), log)).toEqual([
    t,
    '"x"'
  ]);
});

it("transformer function defaults to identity function (ie no transformation)", () => {
  expect((flog(logger)()(threshold)(level)(t)("x"), log)).toEqual([t, "x"]);
});

it("skips logging when level is below threshold", () => {
  expect(
    ((log = "test"),
    flog(logger)(transformer)(2)(1)(t)("should not get logged"),
    log)
  ).toBe("test");
});
