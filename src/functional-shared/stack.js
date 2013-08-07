var makeStack = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0;

  // Implement the methods below
  var stack = {};
  _.extend(stack, makeStack.stackMethods);
  return stack;

};

makeStack.stackMethods = {};

makeStack.stackMethods.push = function(value){
  this.storage[this.size] = value;
  this.size++;
};

makeStack.stackMethods.pop = function(){
  var result = this.storage[this.size - 1];
  this.size && this.size--;
  return result;
};

makeStack.stackMethods.size = function(){
  return this.size;
};

