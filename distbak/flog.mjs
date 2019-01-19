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

export default flog$1;
//# sourceMappingURL=flog.mjs.map
