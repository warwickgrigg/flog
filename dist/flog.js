'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var log = function log(logger) {
  return function (transformer) {
    return function (threshold) {
      return function (level) {
        return function (text) {
          return function (data) {
            if (level > threshold) {
              logger(text, transformer ? transformer(data) : data);
            }

            return data;
          };
        };
      };
    };
  };
};

var toJSON = function toJSON(data) {
  return JSON.stringify(data, null, 2);
};

exports.log = log;
exports.toJSON = toJSON;
//# sourceMappingURL=flog.js.map
