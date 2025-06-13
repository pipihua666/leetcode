console.log('【a.js 开始执行】');
document.addEventListener('DOMContentLoaded', () => {
	console.log('【a.js】DOMContentLoaded 事件触发');
});
window.addEventListener('load', () => {
	console.log('【a.js】load 事件触发');
});
console.log('【a.js 结束执行】');