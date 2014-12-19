var fs = require('fs');
fs.readFile(process.argv[2], function(err, data) {
  var bufferString = data.toString();
  var bufferStrArray = bufferString.split('\n');
  var lengthArray = bufferStrArray.length - 1;
  console.log(lengthArray);	
});