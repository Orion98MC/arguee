/*
    Copyright (c), 2012 Thierry Passeron

    The MIT License

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to
    deal in the Software without restriction, including without limitation the
    rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    sell copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    IN THE SOFTWARE.
*/

/*
    Arguee lets you check types and function arguments

    Usage:

    var conformed = require('arguee').conformed;

    // Let's check how the user called the foo() function:
    function foo() {        
        if (conformed([String, String], arguments)) {
          // we were called foo(String, String) arguments
        }
    }
    
    var isa = require('arguee).isa;
    var obj = new String;
    isa(String, obj) #=> true
    isa(String, "") #=> true
    
    function MyString() {};
    MyString.prototype = new String;
    MyString.prototype.constructor = MyString;
    
    var str = new MyString();
    isa(String, str) #=> true;
    
    var objectOf = require('arguee').objectOf;
    objectOf(Number, 1) #=> false
    objectOf(Number, new Number) #=> true

*/

var _checks = {
      'String'   : function (v) { return (typeof v === 'string') || objectOf(String, v) }
    , 'Number'   : function (v) { return (typeof v === 'number') || objectOf(Number, v) }
    , 'Function' : function (v) { return (typeof v === 'function') }
    , 'Array'    : function (v) { return objectOf(Array, v) }
    , 'Object'   : function (v) { return objectOf(Object, v) }
};

function objectOf(o, v) { return (typeof v === 'object') && (v instanceof o) }

function isa(obj, arg) { return _checks[obj.name] ? _checks[obj.name](arg) : arg instanceof obj }

function conform() {
    if (arguments.length < this.length) { return false }

    for (var index = 0; index < this.length; index++) {
      if (!isa(this[index], arguments[index])) { return false }
    }
    return true;
}

function conformed(formats, args) {
  if (conform.apply([Array, Object], arguments)) return conform.apply(formats /* Array */, args /* arguments object */);
  throw "Bad arguments"; /* Should be (Array, arguments) */
}

module.exports.conformed = conformed;
module.exports.isa = isa;
module.exports.objectOf = objectOf;