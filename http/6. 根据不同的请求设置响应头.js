const http = require('http');
const path = require('path');
const mises = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    gif: 'image/gif',
    mp4: 'video/mp4',
    mp3: 'video/mp3',
    json: 'application/json',
}

const server = http.createServer((request, response) => {
    if (request.method === 'POST') {
        response.code = 405;
        response.end('<h1>Methods Not Allowed</h1>');
        return;
    }
    let { pathname } = new URL(request.url, 'http://127.0.0.1:9000');

    let root = __dirname + '/page';

    let filePath = root + pathname;

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            response.setHeader('content-type', 'text/plain; charset=utf-8');
            switch (err.code) {
                case 'ENOENT':
                    response.code = 404;
                    response.end('<h1>Not Found</h1>');
                    break;
                case 'EPERM':
                    response.code = 403;
                    response.end('<h1>无权限</h1>');
                    break;
                default:
                    response.code = 500;
                    response.end('<h1>Server Error</h1>');
                    break;
            }
            response.statusCode = 500;
            response.end('error');
            return
        }

        // 获取文件后缀名
        const ext = path.extname(filePath).silce(1);

        const type = mises[ext];
        if (type) {
            response.setHeader('content-type', type + ';charset=utf-8');
        } else {
            response.setHeader('content-type', 'application/octet-stream');
        }


        response.end(data);

    })
})
