var makeStack = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0;

  // Implement the methods below
  var stack = {};

  stack.push = function(value){
    storage[size] = value;
    size++;
  };

  stack.pop = function(){
    var result = storage[size - 1];
    size && size--;
    return result;
  };

  stack.size = function(){
    return size;
  };

  return stack;
};
