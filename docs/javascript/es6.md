# 推荐学习ES6不错的网站  
- 谢成老师 [ECMAScript2015~2020语法全解析](http://es.xiecheng.live/)
- 阮一峰老师 [ES6 标准入门](https://es6.ruanyifeng.com/)

## let、const
:::tip 注意
delete只能删除对象的属性，不能删除变量
:::
```js
// var
var a = 5
console.log(a) // 5
delete a // 报错
console.log(window.a) // undefined

b = 6
console.log(b) // 6 报错
console.log(window.b) // 6
```
- let
```js
// 1. let不属于顶层对象window
let a = 5
console.log(a) // 5
console.log(window.a) // undefined

// 2. let不允许重复声明变量
let a = 5
let a = 6
console.log(a) // 报错

// 3. let不存在变量提升
console.log(a) // Uncaught ReferenceError: a is not defined
let a = 5

// 4. 暂时性死区 防止在变量声明之前去使用变量 使代码更安全
var a = 5
if (true) {
  a = 6
  let a
}

// 5. 块级作用域
for (let i = 0; i < 3; i++) {
  console.log('循环内:' + i)
}
console.log('循环外:' + i) // Uncaught ReferenceError: i is not defined
```
- const
```js
// 1. const声明的变量不可修改
const a = 5
a = 6 // Uncaught TypeError: Assignment to constant variable.

// 2. const定义引用类型 可以赋值
const obj = {
	name: 'xiaoming',
	skill: {
		name: 'code'
	}
}
obj.school = 'school'
obj.skill.name = 'js'
console.log(obj) // {name: 'xiaoming', skill: {…}, school: 'school'}

// 3. const定义的数组可以添加值
const arr = [1, 2, 3]
arr.push(4)
console.log(arr) // (4) [1, 2, 3, 4]
```





## 新的数据结构Set
- 里面的成员都是唯一的
```js
let s = new Set([1, 2, 3, 2, 3])
console.log(s) // Set(3){1, 2, 3}
// 添加数据
s.add('js').add('es6')
console.log(s) // Set(5) {1, 2, 3, 'js', 'es6'}
// 删除某一个数据
s.delete(3)
console.log(s) // Set(4) {1, 2, 'js', 'es6'}
// 判断当前Set中是否包含某一个数据
console.log(s.has('js')) // true
// 判断当前Set有几个值
console.log(s.size) // 4
// 清空所有数据
s.clear()
console.log(s) // Set(0) {size: 0}
```

- 遍历
```js
// 五种遍历Set的方法
s.forEach(item => console.log(item))
for (let item of s) {
    console.log(item)
}
for (let item of s.keys()) {
    console.log(item)
}
for (let item of s.values()) {
    console.log(item)
}
// 前四种遍历的结果都是一样的
// 下面这种方式可以遍历 key value 但是key和value的值是一样的
for (let item of s.entries()) {
    console.log(item[0], item[1])
}
```
- 与数组相结合
```js
// 数组去重
let arr = [1, 2, 3, 1, 2, 3]
let s = new Set(arr)
console.log(s) // Set(3) {1, 2, 3}
// 合并去重 转换为数组
let arr1 = [1, 2, 3, 4]
let arr2 = [3, 4, 5, 6]
let ss = new Set([...arr1, ...arr2])
console.log(ss) // Set(6) {1, 2, 3, 4, 5, …}
console.log([...ss]) // [1, 2, 3, 4, 5, 6]
console.log(Array.from(ss)) // [1, 2, 3, 4, 5, 6]
// 求交集
let s1 = new Set(arr1)
let s2 = new Set(arr2)
let result = new Set(arr1.filter(item => s2.has(item)))
console.log(Array.from(result)) // [3, 4]
// 求差集
let arr3 = new Set(arr1.filter(item => !s2.has(item)))
let arr4 = new Set(arr2.filter(item => !s1.has(item)))
console.log(arr3) // Set(2) {1, 2}
console.log(arr4) // Set(2) {5, 6}
console.log([...arr3, ...arr4]) // [1, 2, 5, 6]
```

- WeakSet
```js
let ws = new WeakSet()
const obj1 = {
    name: 'lisi'
}
const obj2 = {
    age: 20
}
ws.add(obj1)
ws.add(obj2)
console.log(ws)
ws.delete(obj1)
console.log(ws)
console.log(ws.has(obj2))
```
:::tip 注意
WeakSet 只能存储对象 并且不能遍历 是一种弱引用 并不会被计入垃圾回收机制 不存在垃圾回收问题
:::