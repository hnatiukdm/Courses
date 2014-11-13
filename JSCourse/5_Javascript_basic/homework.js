// Your code goes here
function deepCopy(obj) {
  if (obj === null) {
    return null;
  } else if (typeof(obj) === 'object'){
    return copyComplexObject(obj);
  } 
  else {
    return obj;
  }
}

function copyComplexObject (complexObject){
  var clonnedObj = {};
  
    for (var key in complexObject) {
      if (complexObject.hasOwnProperty(key)) {
        var val = complexObject[key];
        
        if (typeof(val) === 'object') {
          var innerCopy = deepCopy(val);
          clonnedObj[key] = innerCopy;
          } else {
            clonnedObj[key] = val;
            }
          }
        }
        return clonnedObj;
}