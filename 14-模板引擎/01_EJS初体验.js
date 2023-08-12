// 导入EJS
const ejs = require('ejs');
const { readFileSync } = require('fs');

// 字符串
let china = '中国';
let strIloveyou = '我爱你';

// 声明变量
let str = readFileSync('./01_html.html').toString();

// 使用EJS渲染
let result = ejs.render(str,{china:china})

console.log(result)