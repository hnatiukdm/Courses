function countWords (inputWords) {
  return inputWords.reduce(function(inMem, item) {
    if (inMem[item] === undefined) inMem[item] = 0;
    inMem[item] ++ ;
    return inMem;
  }, {});  
}

module.exports = countWords;