# 笔记

## fs文件
### 1. 引入fs
```
const fs = require('fs');
```
### 2. 文件写入
```aiignore
// 异步 
// flag: a 这个是追加写入
fs.writeFile('文件的路径', '需要写入的内容', {flag: a, 这是配置项}, err => {
    if (err) {
        console.log(err, '写入失败');
        return
    }
    
    console.log('success', err); // 成功 err是null
})
```
```aiignore
// 同步
fs.writeFileSync(`./${name}.txt`, `${content}`);
```

### 3. 追加写入
```aiignore
const appendContent = `追加内容`
fs.appendFile(`./测试名称.txt`, `${content}`, (err) => {
    if (err) {
        console.log(err, '写入失败');
        return
    }
    console.log('success', err);
})
```

### 4. 流式写入(节省资源)
```aiignore
const ws = fs.createWriteStream('./流式对象文件.txt');

ws.write('1. 第一句\n')
ws.write('2. 第二句\n')
ws.write('3. 第三句\n')
ws.write('4. 第四句\n')

ws.close();
```
### 5. 文件读取
(1)异步
```aiignore
fs.readFile('./流式对象文件.txt', (err, data) => {
    if (err) {
        console.log('读取失败');
        return;
    }

    console.log(data.toString());
})
```
(2)同步
```aiignore
let data = fs.readFileSync('./流式对象文件.txt');

console.log(data.toString());
```

(3)流式读取
```aiignore
const rs = fs.createReadStream('./IMG_0151.mp4')
rs.on('data',chunk => {
    console.log(chunk.length);  // 65536字节 => 64kb
});

// end 可选事件 结束在这里执行回调函数
rs.on('end', () => {
    console.log('读取完成')
})
```

### 案例 复制文件
1. 同步
```aiignore
const fs = require('fs');

const data = fs.readFileSync('./movie.mp4');
fs.writeFileSync('./movie_copy1.mp4', data);
```
2. 异步流式
```aiignore
const rs = fs.createReadStream('./IMG_0151.mp4');
const ws = fs.createWriteStream('./copy_movie.mp4');
rs.on('data', chunk => {
    ws.write(chunk);
})

// rs.pipe(ws);
```

### 6. 文件重命名和移动
```aiignore
// 路径相同重命名，路径不同移动
fs.rename('重命名前的路径', '重命名后的路径', (err) => {
    if (err) {
        console.log('fail', err);
        return;
    }

    console.log('success', err)
})
```

同步版本\
fs.rename('oldFileNameAndPath', 'newFileNameAndPath');

### 7. 文件删除
```aiignore
// 或者unLinkSync
fs.unlink('./测试名称.txt', (err) => {
    if (err) {
        console.log('删除fail', err);
        return;
    }

    console.log('删除success', err)
});
```

```aiignore
// nodejs 14.4引入 或者rmSync
fs.rm('./测试名称.txt', (err) => {
    if (err) {
        console.log('删除fail', err);
        return;
    }

    console.log('删除success', err)
})
```

### 8. 文件夹创建
创建文件夹 mk => make  dir => directory
接受参数 ： 1. 文件夹路径 2. options 配置（可选） 3. callback
```aiignore
fs.mkdir('./新增文件夹', (err) => {
     if (err) {
         console.log('fail');
         return
     }
     console.log('success');
})
```

### 9. 递归创建文件夹
```aiignore
fs.mkdir('./a/b/c', {recursive: true}, (err) => {
    if (err) {
        console.log('fail');
        return;
    }
    console.log('success');
})
```

### 10. 读取文件夹
```aiignore
fs.readdir('./', (err, data) => {
    if (err) {
        console.log('fail');
        return;
    }
    console.log('success', data);
})
```

### 11. 删除文件夹
```aiignore
fs.rmdir('./删除文件夹', (err) => {
    if (err) {
        console.log('fail');
        return;
    }
    console.log('success');
})
```

### 12.递归删除文件夹
```aiignore
fs.rm('./a', { recursive: true }, (err) => {
    if (err) {
        console.log('fail', err);
        return;
    }
    console.log('success');
})
```
