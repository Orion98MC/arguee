# Description

Arguee lets you check types and function arguments

## Install

```
$ npm install -g arguee
```

Or

```
$ git clone git://github.com/Orion98MC/arguee.git
```

## Usage

Check function arguments:

```js
var conformed = require('arguee').conformed;

/* 
  foo function
  
  Usage:
    foo(name, callback) (1)
    foo(name)           (2)
    foo(name, number)   (3)
*/
function foo() {
  if (conformed([String, Function], arguments)) {
    /* 1 */
  } else 
  if (conformed([String], arguments)) {
    /* 2 */
  } else 
  if (conformed([String, Number], arguments)) {
    /* 3 */
  } else {
    /* sorry */
  }
}
```

You may check any type (Array, Object, String, Number, Function, Custom objects etc...). 
Example:

```js
var isa = require('arguee').isa;

var name;
var address;

/* ... */

if (isa(String, name)) { /* ... */ }
if (isa(Array, address)) { /* ... */ }

```

## License terms

Copyright (c), 2012 Thierry Passeron

The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.