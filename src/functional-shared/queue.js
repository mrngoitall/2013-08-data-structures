var makeQueue = function(){
  // Use an object with numeric keys to store values
  var queue = {};
  queue.storage = {};
  queue.first = 0;
  queue.last = 0;

  // Implement the methods below
  _.extend(queue, makeQueue.queueMethods);
  return queue;
};

makeQueue.queueMethods = {};

makeQueue.queueMethods.enqueue = function(value){
  this.storage[this.last] = value;
  this.last++;
};

makeQueue.queueMethods.dequeue = function(){
  var result = this.storage[this.first];
  this.last > this.first && this.first++;
  return result;
};

makeQueue.queueMethods.size = function(){
  return this.last - this.first;
};
