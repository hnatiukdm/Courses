module.exports = function arrayMap (arr, fn) {
  return arr.reduce(function(inMem, item) {    
    inMem.push(fn(item));
    return inMem;
  }, []);
}