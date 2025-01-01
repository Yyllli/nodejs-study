const fs = require('fs');

// 创建文件夹 mk => make  dir => directory
// 接受参数 ： 1. 文件夹路径 2. options 配置（可选） 3. callback

// fs.mkdir('./新增文件夹', (err) => {
//     if (err) {
//         console.log('fail');
//         return
//     }
//     console.log('success');
// })

// 递归创建
// fs.mkdir('./a/b/c', {recursive: true}, (err) => {
//     if (err) {
//         console.log('fail');
//         return;
//     }
//     console.log('success');
// })

// 读取文件夹
// fs.readdir('./', (err, data) => {
//     if (err) {
//         console.log('fail');
//         return;
//     }
//     console.log('success', data);
// })

// 删除文件夹
// fs.rmdir('./新增文件夹', (err) => {
//     if (err) {
//         console.log('fail');
//         return;
//     }
//     console.log('success');
// })

// 不推荐使用
// fs.rmdir('./a', {recursive: true}, (err) => {
//     if (err) {
//         console.log('fail', err);
//         return;
//     }
//     console.log('success');
// })

// 建议使用
fs.rm('./a', { recursive: true }, (err) => {
    if (err) {
        console.log('fail', err);
        return;
    }
    console.log('success');
})
