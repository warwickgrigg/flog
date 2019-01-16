const flog = logger => transformer => bar => level => obj => {
  if (level > bar) {
    logger(transformer(obj));
  }
  return obj;
};
const identity = obj => obj;
const toJSON = obj => JSON.stringify(obj, null, 2);
const clog = obj => console.log(obj);
const logAll = flog(clog)(toJSON)(0)(1);

export { flog, clog, identity, toJSON, logAll };
