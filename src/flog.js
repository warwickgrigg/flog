const identity = data => data;
const flog = logger => transformer => threshold => level => text => data => {
  if (level > threshold) {
    logger(text, (transformer || identity)(data));
  }
  return data;
};
const toJSON = data => JSON.stringify(data, null, 2);

export { flog, identity, toJSON };
