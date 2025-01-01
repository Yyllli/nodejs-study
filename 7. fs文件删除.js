const fs = require('fs');

// fs.unlink('./测试名称.txt', (err) => {
//     if (err) {
//         console.log('删除fail', err);
//         return;
//     }
//
//     console.log('删除success', err)
// });

// 调用rm方法， nodejs 14.4
fs.rm('./测试名称.txt', (err) => {
    if (err) {
        console.log('删除fail', err);
        return;
    }

    console.log('删除success', err)
})
