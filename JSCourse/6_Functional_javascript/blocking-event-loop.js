function repeat(operation, num){
  if (num <= 0) return;
  operation();
  return setInterval(function() { repeat(operation, --num); }, 1500);
}



module.exports = repeat;