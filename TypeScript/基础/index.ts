/**
 * 变量声明
 */
// 数字
let number1 = 1
let number2 = 2
function add (n1: number, n2: number) {
  return n1 +n2
}
console.log(add(number1, number2))

// 布尔
// let isTrue = true  // 方式一
let isTrue: boolean  // 方式二
isTrue = false

// 字符串
let total: number = 0
let firstName: string = '字符串'
let str = `我是${firstName}`

// 数组
let list1: number[] = [1,2,3,4]
let list2: Array<number> = [1,2,3,4]
let list3 = [1,2,3,4]
let list4 = [1, 'abc']
let list5: any[] = [1, 'bcd', true]

// 元组（固定长度、固定类型）
let person1: [number, string] = [1, '字符串']
person1[0] = 111
person1[1] = '我是字符串'
person1.push(333)  // 这是一个小bug 本身定义了2个数据 最后却输出了3个数据
console.log(person1)

 /**
  * 联合类型
  */
let union: string | number
union = 123
union = '字符串'
let union2: number| string | boolean | string[]
let union3: 0 | 1 | 2  // 确定数值的联合 即字面量类型
union3 = 1
// literal字面量类型
let literal: 1 | '2' | false | [1,2,3]

function merge(n1: number | string, n2: number | string, resultType: 'as-number' | 'as-string') {
  if( resultType === 'as-string') {
    return n1.toString() + n2.toString()
  }
  if(typeof n1 === 'string' || typeof n2 === 'string') {
    return n1.toString() + n2.toString()
  } else {
    return n1 + n2
  }
}

let mergeNumber = merge(2, 5, 'as-string')
let mergeString = merge('hello', 'world', 'as-string')
console.log(mergeNumber, mergeString)

/**
 * 枚举类型
 */
enum Color {
  red,
  green,
  blue
}
let color = Color.red
console.log(color)

// 可自定义值
enum Color2 {
  red = 2,
  green = 4,
  blue = 6
}
enum Color3 {
  red = 'red',
  green = 'green',
  blue = 3
}

// any
let result: any = 123
result = '123'
result = true
result = []
result = {}
result.toUpperCase()

// unknow保证类型的安全
let result2: unknown = 123
result2 = '123'
result2 = true
result2 = []
result2 = {}
if(typeof result2 === 'function') {
  result2()
}
if(typeof result2 === 'string') {
  result2.toUpperCase()
}

// void （变量本身不存在）所有的输出都是undefined
function printResult(): void {
  console.log('aabbcc')
}
console.log('printResult', printResult())

// undefined （变量没有赋值 没有初始化）
function printResult2(): undefined {
  console.log('ddeeff')
  return
}
console.log('printResult2' ,printResult2())

// never （永远不可能执行完成）
function whileLoop(): never {
  while(true) {
    console.log('over')
  }
}

// 类型适配（类型断言）
let message: any
message = 'abc'

let result1 = (<string>message).startsWith('a') // 方式一
let result3 =  (message as string).endsWith('c') // 方式二

// 函数
let log = function(message: string, code?: number) {
  console.log(message, code)
}
log('hello')




