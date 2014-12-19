var http = require('http');
var fs = require('fs');
var map = require('through2-map');

var server = http.createServer(function(request, respond){
  request.pipe(map(function(chunk){
    return chunk.toString().toUpperCase();
  })).pipe(respond);
});
server.listen(process.argv[2]);