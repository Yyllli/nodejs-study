const fs = require('fs');

// 方法一 1. 读取文件
// const data = fs.readFileSync('./IMG_0151.mp4');
// // 2. 写入
// fs.writeFileSync('./movie_copy1.mp4', data);

// 方法二
const rs = fs.createReadStream('./IMG_0151.mp4');
const ws = fs.createWriteStream('./copy_movie.mp4');
rs.on('data',  (chunk) => {
    ws.write(chunk);
})
// 执行结束回调需要在rs.end中执行

// 或者
// rs.pipe(ws);

