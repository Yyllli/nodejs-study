/**
 * GET /login 显示表单网页
 * POST /login 获取表单中的用户名和密码
 *
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// 解析json格式请求体
const jsonParser = bodyParser.json();
// 解析queryString请求题中间件
const urlencodedParser = bodyParser.urlencoded({ extended: false });


app.get('/login', (req, res) => {
    // 响应文件内容
    res.sendFile(__dirname + '/public/index.html');
    // res.send('LoginGet');
})

app.post('/login', urlencodedParser, (req, res) => {
    // 获取用户名和密码
    console.log(req.body);
    res.send('LoginPost');
})

app.listen(3000, () => {
    console.log('执行3000')
})
