var mod = require('./lib');
console.log(mod.counter);  // 3
mod.incCounter();
console.log(mod.counter); // 3
delete require.cache[require.resolve('./lib')]
var mod2 = require('./lib')
console.log(mod2.counter); // 3
