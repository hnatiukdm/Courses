function reduce(arr, fn, initial){
  return (function reduceStep(i, value) {
    if (i > arr.length - 1) return value;
    return reduceStep(i + 1, fn(value, arr[i], i, arr));
  })(0, initial);
}



module.exports = reduce;