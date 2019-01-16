# flog

FP style logger

version 0.0.1 - maybe breaking changes

```javascript
import { flog, clog, identity, toJSON, logAll } from "./flog";

// flog: flog(logger)(transformer)(threshold)(level)(data)
// flog arguments

const logger = clog; // function: eg. log to console
const transformer = toJSON; // function: eg. transform logging to JSON
const threshold = 0; // log every level greater than zero
const level = 1; // very detailed; eg. detailed debug level
const data = ["brave", "new", "world"];

flog(clog)(identity)(0)(1)(["brave", "new", "world"]); // ["brave", "new", "world"]

// flog returns data passed in final invocation's argument - useful
//   for logging promises, functional composition etc
//
// .then(logAll)
// .then(x => lookup(connection, x))
// .then(logAll)
// .then (
//    etc

// logAll: a convenience function for logging everything as JSON
//         equivalent to flog(clog)(toJSON)(0)(1)

console.log(logAll("hello world")); // "hello world" hello world

// identity: a convenience function for returning data passed as argument

[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => flog(clog)(identity)(5)(i)(i)); // 6 7 8 9
```
