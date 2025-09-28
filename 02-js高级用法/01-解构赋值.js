// 解构赋值
//   1 又称 析构赋值
//   2 分为：
//       1 对数字解构
//       2 对对象解构
//       3 对文件解构

// 数组解构
//    [ , ] = [ , ]
//    对应位置赋值
//    注意：要加分号
let arr = [11,22];
let a,b;
[a,b] = arr;
console.log(a,b);
let m = 123;
let n = 456;
[m,n] = [n,m];
console.log(m,n);

// 对象解构
//    let { key } = 对象名
//    之后，key 就是变量名，直接用
let cat = {myname:'xiaoMao',age:3}
let {myname} = cat
console.log(myname)

// 文件解构
//   import {变量名} from 'js文件地址'