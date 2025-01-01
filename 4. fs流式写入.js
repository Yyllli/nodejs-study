const fs = require('fs');

// 创建流式对象
const ws = fs.createWriteStream('./流式对象文件.txt');


ws.write('1. 第一句\n')
ws.write('2. 第二句\n')
ws.write('3. 第三句\n')
ws.write('4. 第四句\n')

ws.close();
