// 使用Set对象
let mySet = new Set()
mySet.add(1)
mySet.add(1)
mySet.add(2)
mySet.add(2)
mySet.add(3)
mySet.add('some text')
let o = { a: 1, b: 2 }
mySet.add(o)
mySet.add({ a: 1, b: 2 }) // o 指向的是不同的对象，所以没问题
console.log(mySet)

console.log(mySet.has(1))
console.log(mySet.has(2))
console.log(mySet.has(4))
console.log(mySet.has('Some Text'.toLowerCase()))
console.log(mySet.has(o))
console.log(mySet.size)

console.log('---------------')

// 迭代Set
for (let item of mySet) console.log('item', item)
for (let item2 of mySet.keys()) console.log('item2', item2)
for (let item3 of mySet.values()) console.log('item3', item3)
for (let [key, value] of mySet.entries()) console.log('item3', key, value)
// 转换Set为Array
let myArray = Array.from(mySet)
console.log('myArray', myArray)

// 如果在 HTML 文档中工作，也可以：
// mySet.add(document.body);
// mySet.has(document.querySelector("body")); // true

mySet2 = new Set([1, 2, 3, 4])
console.log(mySet2.size)
console.log([...mySet2])

let set1 = new Set([6, 7, 8, 9, 10])
let set2 = new Set([8, 9, 10, 11, 12])
// 求交集
let intersection = new Set([...set1].filter((x) => set2.has(x)))
console.log('intersection', intersection)
// 求差集
let difference = new Set([...set1].filter((x) => !set2.has(x)))
console.log('difference', difference)
// forEach迭代
mySet.forEach(function (value) {
  console.log('value', value)
})

// 实现基本集合操作
function isSuperSet(set, subset) {
  for (let elem of subset) {
    console.log(elem)
    if (!set.has(subset)) {
      return false
    }
  }
  return true
}

const setIter = mySet.values() // 返回一个新的迭代器对象
console.log('setIter', setIter)
console.log(isSuperSet(set2, set1))
