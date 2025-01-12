const http = require('http');

const server = http.createServer((request, response) => {

    let { method, url } = request;

    // console.log(method, url);


    // if (method === 'GET') {
    //     if (url.split('?')[0] === '/search') {
    //         response.end('Login')
    //     }
    // }
    // response.end('Hello World!');

    // 响应状态码
    response.statusCode = 200;
    // 响应状态描述
    // response.statusMessage = 'miaoshu';
    // 响应头
    response.setHeader('content-type', 'text/html; charset=utf-8');
    // 响应体
    response.write('设置响应体'); // 设置了write就不设置end了

    response.end('');
})

server.listen(9000, () => {
    console.log('Server started');
})
