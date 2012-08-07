= Description

Arguee lets you check types and function arguments

== Usage

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

== License terms

MIT License

Copyright (c) 2012, Thierry Passeron