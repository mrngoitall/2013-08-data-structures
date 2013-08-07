var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var first = 0;
  var last = 0;

  // Implement the methods below
  var queue = {};

  queue.enqueue = function(value){
    storage[last] = value;
    last++;
  };

  queue.dequeue = function(){
    var result = storage[first];
    first++;
    return result;
  };

  queue.size = function(){
    return size;
  };

  return queue;
};
