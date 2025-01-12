const express = require('express');
const app = express();

app.get('/response', (req, res) => {

    // 原生设置
    // res.statusCode = 200;
    // res.statusMessage = 'love';
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.write(' u她yfeywtfywe')
    // res.end('响应');


    // 内置
    res.status(200)
        .set('aaa','bbb')
        .send('Hello 你好!');
})

app.listen(3000, () => {
    console.log('已启动3000端口')
});
