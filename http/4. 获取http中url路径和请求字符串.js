/**
const http = require('http');
// 导入url模块
const url = require('url');

const server = http.createServer((request, response) => {
    let res = url.parse(request.url);

    let pathName = res.pathname;

    console.log(res, '-----')
    console.log(pathName, '-----')
    response.end('url')

})

server.listen(9000, () => {
    console.log('服务已启动')
})
 */

const http = require('http');

const server = http.createServer((request, response) => {
    let url = new URL(request.url, 'http://127.0.0.1:9000');

    // console.log(url)
    console.log(url.searchParams.get('userName'));
    response.end('url')

})

server.listen(9000, () => {
    console.log('服务已启动')
})
