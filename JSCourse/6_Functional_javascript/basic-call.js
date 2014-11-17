function duckCount () {
  var args = Array.prototype.slice.call(arguments);
  return args.filter(function(d) {
    return Object.prototype.hasOwnProperty.call(d, 'quack');
  }).reduce(function(numOfDucks) {return ++ numOfDucks; }, 0 );
}

module.exports = duckCount;