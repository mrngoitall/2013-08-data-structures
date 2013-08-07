var Queue = function(){
  // Use an object with numeric keys to store values
  var queue = Object.create(Queue.queueMethods);
  queue.storage = {};
  queue.first = 0;
  queue.last = 0;

  // Implement the methods below
  return queue;
};

Queue.queueMethods = {};

Queue.queueMethods.enqueue = function(value){
  this.storage[this.last] = value;
  this.last++;
};

Queue.queueMethods.dequeue = function(){
  var result = this.storage[this.first];
  this.last > this.first && this.first++;
  return result;
};

Queue.queueMethods.size = function(){
  return this.last - this.first;
};
