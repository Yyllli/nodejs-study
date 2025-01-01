const fs = require('fs');

const name = '测试名称';
const content = '测试接入的语句'
// fs.writeFile(`./${name}.txt`, `${content}, \n 测试一下是否可以换行`, (err) => {
//     if (err) {
//         console.log(err, '写入失败');
//         return
//     }
//
//     console.log('success', err); // 成功 err是null
// })

console.log(1111);
// writeFile是一个异步的


// 同步写入
// fs.writeFileSync(`./${name}.txt`, `${content}`);


// 异步追加

const appendContent = `\r\n 追加内容`
fs.appendFile(`./测试名称.txt`, `${content}`, (err) => {
    if (err) {
        console.log(err, '写入失败');
        return
    }
    console.log('success', err);
})

// fs.writeFile的第三个参数 { flag: 'a' }为追加写入
