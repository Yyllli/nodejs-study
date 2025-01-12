const xiyou = ['猴', '猪', '沙', '和尚'];
const ejs = require('ejs');
const fs = require('fs');

// 原生
// let str = '<ul>'
//
// xiyou.forEach(item => {
//     str += `<li>${item}</li>`
// })
//
// str += '</ul>'
//
// console.log(str)


// ejs
let str = fs.readFileSync('./02.xiyou.html').toString();
let result = ejs.render(str, {xiyou})

console.log(result);
