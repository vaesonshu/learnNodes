// 1.1 继承属性
// [[Prototype]] 可以通过 Object.getPrototypeOf() 和 Object.setPrototypeOf() 访问器来访问。这个等同于 JavaScript 的非标准但许多浏览器实现的属性 __proto__。
// Object.prototype 属性表示 Object 的原型对象。
let f = function () {
  this.a = 1
  this.b = 2
}
let o = new f() // {a: 1, b: 2}
console.log(o)
// 在 f 函数的原型上定义属性
f.prototype.b = 3
f.prototype.c = 4
console.log(o.__proto__)

// 1.2 继承方法
// Object.create() 方法用于创建一个新对象，使用现有的对象来作为新创建对象的原型（prototype）。
var o2 = {
  a: 2,
  m: function () {
    return this.a + 1
  },
}
console.log(o2.m()) // 3
var p = Object.create(o2)
p.a = 4
console.log(p.m()) // 5
