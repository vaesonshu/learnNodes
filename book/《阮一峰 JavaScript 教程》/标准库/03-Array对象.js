// 构造函数
var arr = new Array(2)
console.log(arr.length) // 2
console.log(arr) // [ <2 empty items> ]
console.log(new Array([1, 2, 3])) // [ [ 1, 2, 3 ] ]
console.log(new Array('a')) // [ 'a' ]

// 静态方法
// Array.isArray()
var arr2 = [1, 2, 3]
console.log(typeof arr2) // "object"
console.log(Array.isArray(arr2)) // true

// 实例方法
// valueOf()，toString()
var arr3 = [1, 2, 3]
console.log(arr3.valueOf()) // [1, 2, 3]
console.log(arr3.toString()) // 1,2,3

// push()，pop() 该方法会改变原数组
var arr4 = []
arr4.push(1) // 1
arr4.push('a') // 2
arr4.push(true, {}) // 4
console.log(arr4) // [1, 'a', true, {}]

var arr5 = ['a', 'b', 'c']
arr5.pop() // 'c'
console.log(arr5) // ['a', 'b']
console.log([].pop()) // undefined

// shift()，unshift()
var a = ['a', 'b', 'c']
a.shift() // 'a'
a.unshift('p')
console.log(a) // ['b', 'c']

// join()
var a2 = [1, 2, 3, 4]
console.log(a2.join(' ')) // '1 2 3 4'
console.log(a2.join(' | ')) // "1 | 2 | 3 | 4"
console.log(a2.join()) // "1,2,3,4"
console.log([undefined, null].join('#')) // '#'
console.log(['a', , 'b'].join('-')) // 'a--b'

// 通过call方法，这个方法也可以用于字符串或类似数组的对象。
console.log(Array.prototype.join.call('hello', '-')) // "h-e-l-l-o"
var obj = { 0: 'a', 1: 'b', length: 2 }
console.log(Array.prototype.join.call(obj, '-')) // 'a-b'

// concat() 原数组不变。
console.log(['hello'].concat(['world']))
console.log([2].concat({ a: 1 }))
console.log([1, 2, 3].concat(4, 5, 6))

// 如果数组成员包括对象，concat方法返回当前数组的一个浅拷贝。所谓“浅拷贝”，指的是新数组拷贝的是对象的引用。
var obj2 = { a: 1 }
var oldArray = [obj2]
var newArray = oldArray.concat()
obj2.a = 2
console.log(newArray[0].a) // 2

// reverse() 该方法将改变原数组。
var a2 = ['a', 'b', 'c']
a2.reverse() // ["c", "b", "a"]
console.log(a2) // ["c", "b", "a"]

// slice() 方法用于提取目标数组的一部分返回一个新数组，原数组不变。
console.log('--------slice()--------')
var a3 = ['a3', 'b', 'c']
console.log(a3.slice(0)) // ["a", "b", "c"]
console.log(a3.slice(1)) // ["b", "c"]
console.log(a3.slice(1, 2)) // ["b"]
console.log(a3.slice(2, 6)) // ["c"]
console.log(a3.slice()) // ["a", "b", "c"]
console.log(a3.slice(-2)) // ["b", "c"]
console.log(a3.slice(-2, -1)) // ["b"]
console.log(a3.slice(4)) // []
console.log(a3.slice(2, 1)) // []
// slice() 该方法的一个重要应用，是将类似数组的对象转为真正的数组。
console.log(Array.prototype.slice.call({ 0: 'a', 1: 'b', length: 2 }))

// splice() 该方法会改变原数组。返回值是被删除的元素
console.log('--------splice()--------')
var a4 = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(a4.splice(4, 2)) // ["e", "f"]
console.log(a4) // ["a", "b", "c", "d"])

var a5 = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(a5.splice(4, 2, 1, 2)) // ["e", "f"]
console.log(a5) // ["a", "b", "c", "d", 1, 2]

var a6 = ['a', 'b', 'c', 'd']
console.log(a6.splice(1, 0, 2)) // []
console.log(a6) // [ 'a', 2, 'b', 'c', 'd' ]

// sort() 排序后，原数组将被改变。
console.log('--------sort()--------')
console.log(['d', 'c', 'b', 'a'].sort())
console.log(
  [10111, 1101, 111].sort(function (a, b) {
    return a - b
  })
)

// map() 组成一个新数组返回。
console.log('--------map()--------')
console.log(
  [1, 2, 3].map(function (elem, index, arr) {
    return elem * index
  })
)

// forEach()
console.log('--------forEach()--------')

// reduce()，reduceRight()
// filter()
// some()，every()
// reduce()，reduceRight()
// indexOf()，lastIndexOf()
console.log('--------indexOf() lastIndexOf()--------')
var a7 = ['a', 'b', 'c']
console.log(a7.indexOf('b')) // 1
console.log(a7.indexOf('y')) // -1
console.log(a7.lastIndexOf('c')) // 2
