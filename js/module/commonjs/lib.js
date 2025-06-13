// lib.js
var counter = 3;
function incCounter() {
	counter++;
	console.log('lib', counter) // 4
}
module.exports = {
	counter: counter,
	incCounter: incCounter,
};

exports.a = 'test'