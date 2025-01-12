const fs = require('fs');

fs.stat('./测试移动/座右铭.txt', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // console.log('success', err, data)

    // isFile 检测是否为文件
    console.log(data.isFile());

    // isDirectory 检测是否为文件夹
    console.log(data.isDirectory());
})
