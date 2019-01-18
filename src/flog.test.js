import { flog, identity, toJSON } from "./flog.js";

//jest tests

// test logger - can't test the actual console.log
var log;
const logger = (text, data) => {
  log = [text, data];
  return undefined;
};

const transformer = toJSON; // function: eg. transform logging to JSON
const threshold = 0; // log every level greater than zero
const level = 1; // very detailed; eg. detailed debug level
const t = "text";
const data = ["brave", "new", "world"];

it("identity transformation function returns data passed", () => {
  expect(identity(data)).toBe(data);
});

it("logger returns data passed", () => {
  expect(flog(logger)(transformer)(threshold)(level)(t)(data)).toBe(data);
});

it("logs and transforms to JSON, when level is above threshold", () => {
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
