const http = require('http');

const server = http.createServer((req, res) => {

    // 获取请求方法 & url
    console.log(req.method + ' ' + req.url); // url只包含路径和查询字符串

    // 获取HTTP协议的版本号
    console.log(req.httpVersion);

    // 获取请求头
    console.log(req.headers);

    response.setHeader('content-type', 'text/html; charset=utf-8');
    res.end('你好');
})

server.listen(9000, () => {
    console.log('服务已启动')
})
