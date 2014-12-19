var net = require('net');
var server = net.createServer(function(socket){
  var date = new Date();
  var minutes = date.getMinutes();
  var minutesStr = '';
  if (minutes < 10) {
    minutesStr = '0' + minutes.toString();
  } else {
    minutesStr = minutes.toString(); 
  }
  var dateString = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() +':' + minutesStr + '\n';
  socket.end(dateString);
  
});
server.listen(process.argv[2]);