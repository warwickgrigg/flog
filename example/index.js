import { flog, clog, identity, toJSON, logAll } from "./flog.js";

console.log("started app");

console.log(logAll("hello world")); // "hello world" hello world

flog(clog)(toJSON)(0)(1)(["brave", "new", "world"]);
// [
//  "brave",
//  "new",
//  "world"
// ]

[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => flog(clog)(identity)(5)(i)(i)); // 6 7 8 9
