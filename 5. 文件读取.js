const fs = require('fs');

// 1. 异步读取
fs.readFile('./流式对象文件.txt', (err, data) => {
    if (err) {
        console.log('读取失败');
        return;
    }

    console.log(data.toString());
})

// 2. 同步读取
let data = fs.readFileSync('./流式对象文件.txt');

console.log(data.toString());



// 流式读取
// 需要读取的文件路径
const rs = fs.createReadStream('./IMG_0151.mp4')
rs.on('data',chunk => {
    console.log(chunk.length);  // 65536字节 => 64kb
});

// end 可选事件
rs.on('end', () => {
    console.log('读取完成')
})
