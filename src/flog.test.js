import { flog, clog, identity, toJSON, logAll } from "./flog.js";

// test logger - can't test the actual console.log
var log;
const logger = x => {
  log = x;
  return undefined;
};

const transformer = toJSON; // function: eg. transform logging to JSON
const threshold = 0; // log every level greater than zero
const level = 1; // very detailed; eg. detailed debug level
const data = ["brave", "new", "world"];

it("identity transformation function returns data passed", () => {
  expect(identity(data)).toBe(data);
});

it("logger returns data passed", () => {
  expect(flog(logger)(transformer)(threshold)(level)(data)).toBe(data);
});

it("logs and transforms to JSON, when level is above threshold", () => {
  expect((flog(logger)(transformer)(threshold)(level)("x"), log)).toBe('"x"');
});

it("skips logging when level is below threshold", () => {
  expect(
    ((log = "test"),
    flog(logger)(transformer)(2)(1)("should not get logged"),
    log)
  ).toBe("test");
});
