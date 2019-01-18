# flog

FP style logger with zero dependencies

ES6 modeule for modern browsers and modern node

version 0.0.2 - maybe breaking changes

example usage (in example.js file)

```javascript
const { flog, toJSON } = require("./src/flog"); //node cjs
// or import { flog, toJSON } from "./src/flog";

// flog: flog(logger)(transformer)(threshold)(level)(text)(data)

// example arguments

const logger = (text, data) => console.log(text, data); // logger function
const transformer = toJSON; // function: eg. log as tabbed JSON
const threshold = 0; // log every level greater than zero
const level = 1; // very detailed; eg. detailed debug level
const data = ["brave", "new", "world"];

flog(console.log)(toJSON)(threshold)(level)("tempest")(data);
// tempest [
//  "brave",
//  "new",
//  "world"
// ]

// functional commposition factory example: logAll

const logAll = flog(console.log)(toJSON)(0)(1);
logAll("debug 1")("hello world"); // debug 1 "hello world"

// flog returns data passed in final invocation's data argument -
//   useful for debug logging of promises, functional composition etc
//
// .then(logAll("debug 1"))
// .then(x => lookup(connection, x))
// .then(logAll("debug 2"))
// .then (
//    etc

const x = logAll("debug 3")("hello world"); // debug 3 "hello world"
console.log(x); // hello world

// transformer function defaults to identity function (ie no transformation)

[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => flog(console.log)()(5)(i)("")("i" + i)); // i6 i7 i8 i9
```
