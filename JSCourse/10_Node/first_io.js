var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var bufferString = buffer.toString();
var bufferStrArray = bufferString.split('\n');
var lengthArray = bufferStrArray.length - 1;
console.log(lengthArray);