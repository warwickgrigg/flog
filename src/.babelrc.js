const presets = [];

/*
const plugins = [];

if (process.env["ENV"] === "prod") {
  presets.push(["@babel/env", {"modules": false}]);
}
module.exports = { presets, plugins };
*/

if (process.env["ENV"] === "prod") {
  presets.push(["@babel/env", {"modules": false}]);
}

module.exports = { presets };

/*
{
  "presets": [
    ["@babel/env", {"modules": false}]
  ]
}
*/