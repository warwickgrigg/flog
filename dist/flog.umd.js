(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}(function () { 'use strict';

  exports.flog = function (logger) {
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

  exports.toJSON = function (data) {
    return JSON.stringify(data, null, 2);
  };

}));
