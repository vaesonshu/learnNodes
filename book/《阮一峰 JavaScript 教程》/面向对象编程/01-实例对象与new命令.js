// 对象是什么

// 构造函数

// new 命令
var Vehicle1 = function (p) {
  this.price = p
}
var v = new Vehicle1(500)
console.log(v.price)

// 如果构造函数内部有return语句，而且return后面跟着一个对象，new命令会返回return语句指定的对象；否则，就会不管return语句，返回this对象。
var Vehicle2 = function () {
  this.price = 1000
  return 1000
}
console.log(new Vehicle2() === 1000)
// false

// 但是，如果return语句返回的是一个跟this无关的新对象，new命令会返回这个新对象，而不是this对象。这一点需要特别引起注意。
var Vehicle2 = function () {
  this.price = 1000
  return { price: 2000 }
}
console.log(new Vehicle2().price)
// 2000

// new.target
function f() {
  // if (!new.target) {
  //   throw new Error('请使用 new 命令调用！')
  // }
  // ...
}
f() // Uncaught Error: 请使用 new 命令调用！

// Object.create() 创建实例对象
var person1 = {
  name: '张三',
  age: 38,
  greeting: function () {
    console.log("Hi! I'm " + this.name + '.')
  },
}
var person2 = Object.create(person1)
console.log(person2.name) // 张三
console.log(person2.greeting()) // Hi! I'm 张三.
