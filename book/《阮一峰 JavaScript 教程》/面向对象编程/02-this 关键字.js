// 但不管是什么场合，this都有一个共同点：它总是返回一个对象。
// 简单说，this就是属性或方法“当前”所在的对象。

// 使用场合
//（1）全局环境
// 全局环境使用this，它指的就是顶层对象window。

//（2）构造函数
// 构造函数中的this，指的是实例对象。

//（3）对象的方法
var obj = {
  foo: function () {
    console.log(this)
  },
}
obj.foo() // obj
// console.log((obj.foo = obj.foo)())

// 使用注意点
// 避免多层 this
// 避免数组处理方法中的 this
// 避免回调函数中的 this

// 绑定 this 的方法
// Function.prototype.call()
var n = 123
var obj = { n: 456 }
function a() {
  console.log(this.n)
}
a.call() // 123?
a.call(null) // 123?
a.call(undefined) // 123?
// a.call(window) // 123?
a.call(obj) // 456

// call方法还可以接受多个参数。
// call的第一个参数就是this所要指向的那个对象，后面的参数则是函数调用时所需的参数。
function add(a, b) {
  return a + b
}
console.log(add.call(this, 1, 2)) // 3
