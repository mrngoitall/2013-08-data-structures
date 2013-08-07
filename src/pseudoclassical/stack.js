var Stack = function(){
  this.storage = {};
  this.stackSize = 0;
};

Stack.prototype.push = function(value){
  this.storage[this.stackSize] = value;
  this.stackSize++;
};

Stack.prototype.pop = function(){
  var result = this.storage[this.stackSize - 1];
  this.stackSize && this.stackSize--;
  return result;
};

Stack.prototype.size = function(){
  return this.stackSize;
};

var stack = new Stack();