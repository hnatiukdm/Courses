var http = require('http');
var bl = require('bl');
var counter = 0;
var respondData = [];
var arr = process.argv.slice(2);

for (var i = 0; i < arr.length; i++){
  var url = arr[i];
  
  makeRespond(url, i);
}

function makeRespond(url, index){
    http.get(url, function(respond){ 
    respond.pipe(bl(function(err, data){
      respondData[index] = data.toString();
      counter ++;
       if (counter === 3) {
         for (var i = 0; i < 3; i ++){
           console.log(respondData[i]);
         }
       }
    }));
  });  
}