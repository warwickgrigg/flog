exports.flog = logger => transformer => threshold => level => text => data => {
  if (level > threshold) {
    logger(text, transformer ? transformer(data) : data);
  }
  return data;
};
exports.toJSON = data => JSON.stringify(data, null, 2);
//# sourceMappingURL=flog.mjs.map
