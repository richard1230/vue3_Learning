// 模块导入导出
//   有一个js文件，内部有变量、函数
//   希望被另外的 js和html 引用

// 模块导出
//   export let 变量名
//      1、定义时导出
//   export default 值
//      1、直接导出、默认导出
//      2、此方式，一个js文件，只能出现一次
//   其他方式等等

export let a = 123;
export let fun1 = function(){
    console.log(456)
}

export function fun2(){
    console.log(789)
}

export default 11

export let cat ={myname:'xiaoMao',age:3}

