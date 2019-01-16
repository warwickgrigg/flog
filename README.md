# flog

FP style logger

```javascript
import { flog, clog, identity, toJSON, logAll } from "./flog";

console.log(logAll("hello world")); // "hello world" hello world

const logger = clog; // log to console
const transformer = toJSON; // log data as JSON
const threshold = 0; // log every level greater than zero
const level = 1; // very detailed; eg. detailed debug level

//returns data passed in final argument - useful for logging promises
//
// .then(logAll)
// .then(x => myAction(x, y z))
//

flog(clog)(identity)(0)(1)(["brave", "new", "world"]); // ["brave", "new", "world"]

[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => flog(clog)(identity)(5)(i)(i)); // 6 7 8 9
```
