'use strict';

module.exports = function(api) {
  const presets = [];
  // if (process.env["ENV"] === "prod") {
  if (api.env(envName => envName.startsWith("dev"))) {
    presets.push(["@babel/env", {"modules": false}]);
  }

  if (false)
  console.log(JSON.stringify({
    "using": "src/.bablerc.js",
    "api.keys": Object.keys(api),
    "process.env-ENV": process.env["ENV"],
    "api.env": api.env(), 
    "api.caller": api.caller(caller => caller && caller.name),
    presets
  }, null, 2)); 
  
  return presets.length>0 ? {presets} : {};
}
