// let n = 5;

// for (let i = 0; i < n; i++) {
//   console.log("hello", i);
// }

// let args = process.argv;

// for (let i = 2; i < args.length; i++) {
//   console.log("Hello to", args[i]);
// }

// ***** Exports in files ******

const someValue = require("./math");

console.log(someValue.sum(4, 2));
