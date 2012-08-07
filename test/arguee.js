var 
  isa = require('../arguee.js').isa
  conformed = require('../arguee.js').conformed
, assert = require('assert');

describe('isa', function () {
  
  it('should work with String', function () {
    assert(isa(String, new String));
    assert(isa(String, "hello world"));
    assert(!isa(String, 1));
    assert(!isa(String, {}));
    assert(!isa(String, []));
  });

  it('should work with Array', function () {
    assert(isa(Array, new Array));
    assert(isa(Array, [1, 2, 3]));
    assert(!isa(Array, 1));
    assert(!isa(Array, {}));
  });
  
  it('should work with Object', function () {
    assert(isa(Object, new Object));
    assert(isa(Object, {}));
    assert(isa(Object, new Array));
    assert(isa(Object, new String));
    assert(isa(Object, new Number));
    assert(!isa(Object, 1));
    assert(!isa(Object, "hello world"));
    assert(!isa(Object, function(){}));
  });
  
  it('should work with Number', function () {
    assert(isa(Number, 1));
    assert(isa(Number, new Number));
    assert(!isa(Number, "1"));
  });
  
  it('should work with Function', function () {
    assert(isa(Function, function(){}));
    assert(isa(Function, new Function()));
    assert(!isa(Function, {}));
  });
  
  it('should work with custom class', function () {
    function Foo () {};
    var foo = new Foo();
    
    assert(isa(Foo, foo));
    assert(isa(Object, foo));
    
    function Bar () {}
    Bar.prototype = new Foo;
    Bar.prototype.constructor = Bar;
    
    var bar = new Bar();
    
    assert(isa(Bar, bar));
    assert(isa(Foo, bar));
    assert(isa(Object, bar));
  });
  
  it('should work with custom subclass class of internal objects', function () {
    function MyString() {};
    MyString.prototype = new String;
    MyString.prototype.constructor = MyString;
    
    var str = new MyString();
    assert(isa(String, str));
    assert(isa(Object, str));
    assert(!isa(Array, str));
    assert(!isa(Function, str));
    assert(!isa(Number, str));
  });
  
});

describe('conformed', function () {
  it ('should be true', function() {
    assert(conformed([String, String], ["one", "two"]));
    assert(!conformed([String, String], ["one", 1]));
  })
});