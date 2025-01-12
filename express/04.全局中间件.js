const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const moment = require('moment');
const currentTime = moment().format('YYYY-MM-DD HH:mm:ss');

// 声明中间件函数
function recordMiddleware(req, res, next) {
    // 将信息保存
    let { url, ip } = req;
    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${currentTime} ${url} ${ip}\r\n`);
    // 调用next
    next();
}
// 使用中间件函数
app.use(recordMiddleware);

app.get('/home', (req, res) => {



    res.send('首页');
})

app.get('/admin', (req, res) => {
    res.send('我的');
})

app.get('/detail', (req, res) => {
    res.send('资料');
})

app.all('*', (req, res) => {
    res.status(404).send('404');
})

app.listen(3000, () => {
    console.log('已启动3000端口')
});
