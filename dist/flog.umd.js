(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.flog = factory());
}(this, function () { 'use strict';

  var flog = function flog(logger) {
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

  var flog$1 = {
    flog: flog,
    toJSON: toJSON
  };

  return flog$1;

}));
