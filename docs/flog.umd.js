(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.flog = {}));
}(this, function (exports) { 'use strict';

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

  exports.flog = flog;
  exports.toJSON = toJSON;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=flog.umd.js.map
