var Stack = function(){
  // Use an object with numeric keys to store values
  var stack = Object.create(Stack.stackMethods);
  stack.storage = {};
  stack.stackSize = 0;

  // Implement the methods below
  return stack;
};

Stack.stackMethods = {};

Stack.stackMethods.push = function(value){
  this.storage[this.stackSize] = value;
  this.stackSize++;
};

Stack.stackMethods.pop = function(){
  var result = this.storage[this.stackSize - 1];
  this.stackSize && this.stackSize--;
  return result;
};

Stack.stackMethods.size = function(){
  return this.stackSize;
};

