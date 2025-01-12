const http = require('http');

const server = http.createServer((req, res) => {

    // 1. 声明一个变量
    let body = '';

    // 2. 绑定事件
    req.on('data', (chunk) => {
        // chunk本质是一个buffer， +=操作会将其转换为字符串
        body += chunk;
    })

    req.on('end', () => {
        console.log(body);

        res.end('hello world!');
    })


})

server.listen(9000, () => {
    console.log('服务已启动')
})
