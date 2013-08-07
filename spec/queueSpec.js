describe("queue", function() {
  var queue;

  // TODO: give this responsability to the student
  var refreshQueue = function() {
    // Before each test runs, create a new Queue
    if (skipper.variant == 'functional' || skipper.variant == 'functional-shared') {
      queue = makeQueue();
    } else if (skipper.variant == 'prototypal') {
      queue = Queue();
    } else if (skipper.variant == 'pseudoclassical') {
      queue = new Queue();
    }
  }
  beforeEach(refreshQueue);

  // Any queue implementation should have the following methods
  it('should have "enqueue", "dequeue", and "size" methods', function() {
    expect(queue.enqueue).to.be.a('function');
    expect(queue.dequeue).to.be.a('function');
    expect(queue.size).to.be.a('function');
  });

  it('should not error when dequeuing from an empty queue', function() {
    expect(function(){queue.dequeue()}).not.throws();
  });

  it('should report size of 0 for an empty queue', function() {
    expect(queue.size()).equal(0);
  });

  it('should report size of 3 after enqueuing 3 items into queue', function() {
    var a = 'a', b = 'b', c = 'c';

    queue.enqueue(a);
    queue.enqueue(b);
    queue.enqueue(c);
    expect(queue.size()).equal(3);
  });

  it('should report size of 2 after dequeuing 1 item from queue', function() {
    var a = 'a', b = 'b', c = 'c';

    queue.enqueue(a);
    queue.enqueue(b);
    queue.enqueue(c);

    queue.dequeue();
    expect(queue.size()).equal(2);
  });

  it('should report size of 0 after dequeuing remaining items from queue', function() {
    var a = 'a', b = 'b', c = 'c';

    queue.enqueue(a);
    queue.enqueue(b);
    queue.enqueue(c);

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.size()).equal(0);
  });

  it('should dequeue items in the FIFO order', function() {
    var a = 'a', b = 'b', c = 'c', d = 'd';

    queue.enqueue(a);
    queue.enqueue(b);
    queue.enqueue(c);
    expect(queue.dequeue()).equal(a);
    expect(queue.dequeue()).equal(b);

    queue.enqueue(d);
    expect(queue.dequeue()).equal(c);
    expect(queue.dequeue()).equal(d);
  });

  it('should not skip any items if dequeue is called on an empty queue', function() {
    var a = 'a', b = 'b', c = 'c', d = 'd';

    queue.dequeue();
    queue.enqueue(a);
    expect(queue.dequeue()).equal(a);
  });

  it('should return undefined when the queue has been emptied', function() {
    var a = 'a', b = 'b', c = 'c', d = 'd';

    queue.enqueue(a);
    queue.dequeue();
    expect(queue.dequeue()).equal(undefined);
  });

  // instantiation-style-specific tests
  if (skipper.variant != 'functional'  ){
    it('should have its own storage property', function(){
      expect(queue.hasOwnProperty('storage')).to.exist;
    });

    it('should share methods with other instances', function(){
      var oldQueue = queue;
      refreshQueue();
      expect(oldQueue.enqueue).to.be.equal(queue.enqueue);
    });
    
    // TODO: test for prototypal vs pseudoclassical
    if (skipper.variant != 'functional-shared'){
      it('should inherit its methods ', function(){
        expect(queue.__proto__).to.be.a('object');
        expect(queue.__proto__.enqueue).to.be.a('function');
        expect(queue.__proto__.dequeue).to.be.a('function');
        expect(queue.__proto__.size).to.be.a('function');
      });
    }
  }

});
