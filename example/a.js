import { funcB } from './b.js'

funcB()

export var funcA = () => {
  console.log('a')
}

// JS 引擎执行 a.js 时，发现引入了 b.js，于是去执行 b.js

// 引擎执行b.js，发现里面引入了a.js(出现循环引用)，认为a.js已经加载完成，继续往下执行

// 执行到funcA()语句时发现 funcA 并没有定义，于是报错。
