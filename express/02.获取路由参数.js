const express = require('express');
const app = express();

app.get('/:id.html', (req, res) => {
    // 获取路由参数
    console.log(req.params.id);

    res.setHeader('content-type', 'text/html; charset=utf-8');

    res.end('Home详情');
})

app.listen(3000, () => {
    console.log('已启动3000端口')
});
