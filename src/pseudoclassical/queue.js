var Queue = function(){
  this.storage = {};
  this.first = 0;
  this.last = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.last] = value;
  this.last++;
};

Queue.prototype.dequeue = function(){
  var result = this.storage[this.first];
  this.last > this.first && this.first++;
  return result;
};

Queue.prototype.size = function(){
  return this.last - this.first;
};

var queue = new Queue();