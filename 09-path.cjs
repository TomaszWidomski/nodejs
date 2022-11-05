const path = require("path");

console.log(path.sep);
const absolute = path.resolve(__dirname, "folder", "subfolder", "test.txt");
console.log(absolute);
