/**
 * 创建buffer
 */

// 1. alloc
// let buf = Buffer.alloc(10);
//
// console.log(buf); // <Buffer 00 00 00 00 00 00 00 00 00 00>

// 2. allocUnsafe
// let buf = Buffer.allocUnsafe(10);
//  这个创建的会包含旧的内存数据
// console.log(buf) // <Buffer 00 00 00 00 00 00 00 00 00 00>


// 3. from

// let buf = Buffer.from('hello');
//
// console.log(buf); // <Buffer 68 65 6c 6c 6f>

/**
 * 2. 操作buffer
 */
// let buf = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
//
// console.log(buf.toString()); // utf-8转换

// let buf = Buffer.from('hello');

// console.log(buf[0]);
// console.log(buf[0].toString(2)); // 11101000

// buf[0] = 95;

// console.log(buf);


// 溢出
// let buf = Buffer.from('hello');
// buf[0] = 361;  // 舍弃高位数字
// 实际转二制止是0001 0110 1001 =》 0110 1001
// console.log(buf)


// 中文
let buf = Buffer.from('你好');

console.log(buf)
