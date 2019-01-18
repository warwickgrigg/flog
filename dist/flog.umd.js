(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}(function () { 'use strict';

  exports.flog = logger => transformer => threshold => level => text => data => {
    if (level > threshold) {
      logger(text, transformer ? transformer(data) : data);
    }
    return data;
  };
  exports.toJSON = data => JSON.stringify(data, null, 2);

}));
//# sourceMappingURL=flog.umd.js.map
