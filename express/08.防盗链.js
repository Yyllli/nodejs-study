const express = require('express');
const app = express();

// 声明中间件
app.use((req,res,next) => {
    // 检测请求头referer
    let referer = req.get('referer');

    if (referer) {
        let url = new URL(referer);
        let hostname = url.hostname;
        console.log(hostname);
        if (hostname !== '127.0.0.1') {
            res.status(404).send('404 NOT FOUND');
            return
        }
    }
    next();
});

// 静态资源中间件设置
app.use(express.static(__dirname + '/public'));


app.listen(3000, () => {
    console.log('已启动3000端口')
});
