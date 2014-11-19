function Spy(target, method){
  this.count = 0;
  
  var self = this, oldMethod = target[method];
  
  target[method] = function() {
      ++ self.count;
      return oldMethod.apply(target, arguments);   
  };
  
  return Object.create(this);
}

module.exports = Spy;