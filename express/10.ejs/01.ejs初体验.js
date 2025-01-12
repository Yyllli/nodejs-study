const ejs = require('ejs');

let china = '中国';
let str = '我爱你';

// 使用ejs
let result = ejs.render(`我爱你 <%= china %>`, {china})

console.log(result);
