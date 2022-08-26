// 概述
// Object()

// Object 的静态方法
// Object.keys()，Object.getOwnPropertyNames()
var obj = {
  p1: 123,
  p2: 456,
}
Object.keys(obj) // ["p1", "p2"]

// Object.keys方法只返回可枚举的属性，Object.getOwnPropertyNames方法还返回不可枚举的属性名。
var a = ['Hello', 'World']
Object.keys(a) // ["0", "1"]
Object.getOwnPropertyNames(a) // ["0", "1", "length"]

// Object 的实例方法
// Object.prototype.valueOf()
var obj = new Object()
1 + obj // "1[object Object]"

var obj = new Object()
obj.valueOf = function () {
  return 2
}
1 + obj // 3

// Object.prototype.toString()
var o1 = new Object()
o1.toString() // "[object Object]"
var o2 = { a: 1 }
o2.toString() // "[object Object]"

var obj = new Object()
obj.toString = function () {
  return 'hello'
}
obj + ' ' + 'world' // "hello world"

// toString() 的应用：判断数据类型
Object.prototype.toString.call(2) // "[object Number]"
Object.prototype.toString.call('') // "[object String]"
Object.prototype.toString.call(true) // "[object Boolean]"
Object.prototype.toString.call(undefined) // "[object Undefined]"
Object.prototype.toString.call(null) // "[object Null]"
Object.prototype.toString.call(Math) // "[object Math]"
Object.prototype.toString.call({}) // "[object Object]"
Object.prototype.toString.call([]) // "[object Array]"

// Object.prototype.toLocaleString()
var person = {
  toString: function () {
    return 'Henry Norman Bethune'
  },
  toLocaleString: function () {
    return '白求恩'
  },
}
person.toString() // Henry Norman Bethune
person.toLocaleString() // 白求恩

// Object.prototype.hasOwnProperty()
var obj = {
  p: 123,
}
obj.hasOwnProperty('p') // true
obj.hasOwnProperty('toString') // false
