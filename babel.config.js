'use strict';

module.exports = function(api) {
  const presets = [];
  
  if (api.env(envName => envName.startsWith("test"))) {
    presets.push(['@babel/preset-env']);
  }
  
  if (false)
  console.log(JSON.stringify({
    "using": "babel.config.js",
    "api.keys": Object.keys(api),
    "process.env-ENV": process.env["ENV"],
    "api.env": api.env(), 
    "api.caller": api.caller(caller => caller && caller.name),
    presets
  }, null, 2)); 
  
  return presets.length>0 ? {presets} : {};
}