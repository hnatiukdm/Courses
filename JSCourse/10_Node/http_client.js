var http = require('http');
http.get(process.argv[2], function(respond){ 
  respond.on("data", function(data){
    console.log(data.toString());
  });
});