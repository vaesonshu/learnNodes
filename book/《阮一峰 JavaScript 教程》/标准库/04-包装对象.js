// 定义
// 所谓“包装对象”，指的是与数值、字符串、布尔值分别相对应的Number、String、Boolean三个原生对象。这三个原生对象可以把原始类型的值变成（包装成）对象。
var v1 = new Number(123)
var v2 = new String('abc')
var v3 = new Boolean(true)
typeof v1 // "object"
typeof v2 // "object"
typeof v3 // "object"
v1 === 123 // false
v2 === 'abc' // false
v3 === true // false

// 实例方法
// valueOf()
new Number(123).valueOf() // 123
new String('abc').valueOf() // "abc"
new Boolean(true).valueOf() // true

// toString()
new Number(123).toString() // "123"
new String('abc').toString() // "abc"
new Boolean(true).toString() // "true"

// 原始类型与实例对象的自动转换
var str = 'abc'
str.length // 3
// 等同于
var strObj = new String(str)
// String {
//   0: "a", 1: "b", 2: "c", length: 3, [[PrimitiveValue]]: "abc"
// }
strObj.length // 3
