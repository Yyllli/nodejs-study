const fs = require('fs');

// fs.rename('./座右铭.txt', './修改之后的文件名.txt', (err) => {
//     if (err) {
//         console.log('fail', err);
//         return;
//     }
//
//     console.log('success', err)
// });

// 文件移动
fs.rename('./座右铭.txt','./测试移动/座右铭.txt', (err) => {
    if (err) {
        console.log('fail', err);
        return;
    }

    console.log('success', err)
})
