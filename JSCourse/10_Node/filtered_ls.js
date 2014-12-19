var fs = require('fs');

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

fs.readdir(process.argv[2], function(err, data) {
  var filtered = data.filter(function(item) {
    return endsWith(item, '.' + process.argv[3]);
  });
  for (i = 0; i < filtered.length; i ++ ){
    console.log(filtered[i]);
  }	
});