const flog = logger => transformer => threshold => level => text => data => {
  if (level > threshold) {
    logger(text, transformer ? transformer(data) : data);
  }
  return data;
};

const toJSON = data => JSON.stringify(data, null, 2);

export {flog, toJSON};