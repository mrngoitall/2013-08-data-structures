var makeStack = function(){
  // Use an object with numeric keys to store values
  var stack = {};
  stack.storage = {};
  stack.stackSize = 0;

  // Implement the methods below
  _.extend(stack, makeStack.stackMethods);
  return stack;

};

makeStack.stackMethods = {};

makeStack.stackMethods.push = function(value){
  this.storage[this.stackSize] = value;
  this.stackSize++;
};

makeStack.stackMethods.pop = function(){
  var result = this.storage[this.stackSize - 1];
  this.stackSize && this.stackSize--;
  return result;
};

makeStack.stackMethods.size = function(){
  return this.stackSize;
};

