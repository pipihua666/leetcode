console.log('【b.js 开始执行】');
document.addEventListener('DOMContentLoaded', () => {
    console.log('【b.js】DOMContentLoaded 事件触发');
});
window.addEventListener('load', () => {
    console.log('【b.js】load 事件触发');
});
console.log('【b.js 结束执行】');