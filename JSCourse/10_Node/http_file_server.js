var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, respond){
  fs.createReadStream(process.argv[3]).pipe(respond);
});
server.listen(process.argv[2]);