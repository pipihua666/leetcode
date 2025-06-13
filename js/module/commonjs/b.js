exports.done = false;
var a = require('./a.js');
console.log('在 b.js 之中，a.done = %j', a.done);
exports.done = true;
a.done = 1
console.log('b.js 执行完毕');
