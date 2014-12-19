var sum = process.argv.splice(2).reduce(function(count, item) { 
  return count + (+item); }, 0);
console.log(sum);

