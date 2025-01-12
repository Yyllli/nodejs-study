const express = require('express');
const app = express();

// 静态资源中间件设置
app.use(express.static(__dirname + '/public'));

app.get('/home', (req, res) => {
    res.send('首页');
})

app.all('*', (req, res) => {
    res.status(404).send('404');
})

app.listen(3000, () => {
    console.log('已启动3000端口')
});
