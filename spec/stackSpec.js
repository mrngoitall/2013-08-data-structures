describe("stack", function() {
  var stack;

  // TODO: give this responsability to the student
  var refreshStack = function() {
    if (skipper.variant == 'functional' || skipper.variant == 'functional-shared') {
      stack = makeStack();
    } else if (skipper.variant == 'prototypal') {
      stack = Stack();
    } else if (skipper.variant == 'pseudoclassical') {
      stack = new Stack();
    }
  };

  beforeEach(refreshStack);

  // Any stack implementation should have the following methods
  it('should have "push", "pop", and "size" methods', function() {
    expect(stack.push).to.be.a('function');
    expect(stack.pop).to.be.a('function');
    expect(stack.size).to.be.a('function');
  });


  it('should not error when popping from an empty stack', function() {
    expect(function(){stack.pop()}).not.throws();
  });

  it('should report size of 0 for an empty stack', function() {
    expect(stack.size()).equal(0);
  });

  it('should report size of 3 after pushing 3 items into stack', function() {
    var a = 'a', b = 'b', c = 'c';

    stack.push(a);
    stack.push(b);
    stack.push(c);
    expect(stack.size()).equal(3);
  });

  it('should report size of 2 after popping 1 item from stack', function() {
    var a = 'a', b = 'b', c = 'c';

    stack.push(a);
    stack.push(b);
    stack.push(c);

    stack.pop();
    expect(stack.size()).equal(2);
  });

  it('should report size of 0 after popping remaining items from stack', function() {
    var a = 'a', b = 'b', c = 'c';

    stack.push(a);
    stack.push(b);
    stack.push(c);

    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.size()).equal(0);
  });

  it('should pop items in the LIFO order', function() {
    var a = 'a', b = 'b', c = 'c', d = 'd';

    stack.push(a);
    stack.push(b);
    stack.push(c);
    expect(stack.pop()).equal(c);
    expect(stack.pop()).equal(b);

    stack.push(d);
    expect(stack.pop()).equal(d);
    expect(stack.pop()).equal(a);
  });

  it('should not skip any items if pop is called on an empty stack', function() {
    var a = 'a', b = 'b', c = 'c', d = 'd';

    stack.pop();
    stack.push(a);
    expect(stack.pop()).equal(a);
  });

  it('should return undefined when the stack has been emptied', function() {
    var a = 'a', b = 'b', c = 'c', d = 'd';

    stack.push(a);
    stack.pop();
    expect(stack.pop()).equal(undefined);
  });

  it('should perform well with many instances', function() {
    var stacks = [];
    for (var i = 0; i < 500000; i++) {
      stacks[i] = stack;
      refreshStack();
      stacks[i].push(Math.random());
      stacks[i].push(Math.random());
      stacks[i].push(Math.random());
      stacks[i].push(Math.random());
      stacks[i].pop();
      stacks[i].size();
    }
  });

  // instantiation-style-specific tests
  if (skipper.variant != 'functional'  ){
    it('should have its own storage property', function(){
      expect(stack.hasOwnProperty('storage')).to.exist;
    });

    it('should share methods with other instances', function(){
      var oldStack = stack;
      refreshStack();
      expect(oldStack.push).to.be.equal(stack.push);
    });
    
    if (skipper.variant != 'functional-shared'){
      it('should inherit its methods ', function(){
        expect(stack.__proto__).to.be.a('object');
        expect(stack.__proto__.push).to.be.a('function');
        expect(stack.__proto__.pop).to.be.a('function');
        expect(stack.__proto__.size).to.be.a('function');
      });
    }
  }
});
