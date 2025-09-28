// 全局导入导出
//   js 中的 变量 或 函数，被 html 全局引入


//   js模块导出
//      1 被js引入、被html模块引入
//      2 只有 加上 export 才能被其他文件 引入
//   js全局导出
//      1 被html全局引入
//      2 变量暴露全局，直接用

//   不建议 混用

let aa = 123;
function sum (a,b){
    return a+b
}
