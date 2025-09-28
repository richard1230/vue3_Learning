// 模块导入
//     import {变量名} from 'js文件名'
//        指：寻找对应变量

//     import 变量名 from 'js文件名'
//        指：寻找 export default

import { a,fun1,fun2 ,cat} from './02-模块导出.js'
console.log(a)
fun1()
fun2()

console.log(cat)
console.log(cat.myname)
console.log(cat.age)



import aaa from './02-模块导出.js'
console.log(aaa)