const express = require('express');
const app = express();

// 创建路由
app.get('/home', (req, res) => {
    //  原声操作
   console.log(req.method);
   console.log(req.url);
   console.log(req.httpVersion);
   console.log(req.headers);

   // express操作
    console.log(req.path);
    console.log(req.query);

    console.log(req.ip);
    console.log(req.get('host'));

    res.end('hello express')
})

app.post('/text', (req, res) => {
    console.log(req);

    res.end('hello post express')
})

app.all('*', (req, res) => {
    res.end('404 Not Found')
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
