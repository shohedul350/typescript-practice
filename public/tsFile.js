"use strict";
var greet = function () {
    console.log('hello, world');
};
// greet = 'hello';  we can't do this
greet = function () {
    console.log('hello, again');
};
var add = function (a, b, c /*?*/) {
    if (c === void 0) { c /*?*/ = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 10, 'shohedul');
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
console.log(result);
