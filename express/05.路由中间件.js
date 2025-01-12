/**
 *  针对 /admin /setting 的请求， 要求URL携带 code=521 参数，如果未携带提示 [暗号错误]
 */
const express = require('express');
const app = express();

// 声明中间件
const checkCodeMiddleware = (req, res, next) => {
    if (req.query.code === '521') {
        next();
    } else {
        res.send('暗号错误');
    }
}

app.get('/home', checkCodeMiddleware, (req, res) => {
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
