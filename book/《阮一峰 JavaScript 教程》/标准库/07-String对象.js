// 概述
var s1 = 'abc'
var s2 = new String('abc')
typeof s1 // "string"
typeof s2 // "object"
s2.valueOf() // "abc"

new String('abc')
// String {0: "a", 1: "b", 2: "c", length: 3}
new String('abc')[1] // "b"

String(true) // "true"
String(5) // "5"

// 静态方法 String.fromCharCode()
String.fromCharCode(0x20bb7)
// "ஷ"
String.fromCharCode(0x20bb7) === String.fromCharCode(0x0bb7)
// true
String.fromCharCode(0xd842, 0xdfb7)
// "𠮷"

// 实例属性
// String.prototype.length
'abc'.length // 3
// 实例方法
// String.prototype.charAt()
'abc'.charAt(1) // "b"
'abc'[1] // "b"
'abc'.charAt(-1) // ""
'abc'.charAt(3) // ""

// String.prototype.charCodeAt()
'abc'.charCodeAt(1) // 98

// String.prototype.concat() 不改变原字符串
var s1 = 'abc'
var s2 = 'def'
s1.concat(s2) // "abcdef"
s1 // "abc"

// String.prototype.slice() 不改变原字符串
'JavaScript'.slice(0, 4) // "Java"

// String.prototype.substring() 不改变原字符串
'JavaScript'.substring(0, 4) // "Java"

// String.prototype.substr() 不改变原字符串 第二个参数是子字符串的长度
'JavaScript'.substr(4, 6) // "Script"

// String.prototype.indexOf()，String.prototype.lastIndexOf()
'hello world'.indexOf('o') // 4
'JavaScript'.indexOf('script') // -1
'hello world'.lastIndexOf('o') // 7

// String.prototype.trim()
'  hello world  '.trim() // "hello world"
'\r\nabc \t'.trim() // 'abc'

// String.prototype.toLowerCase()，String.prototype.toUpperCase()
'Hello World'.toLowerCase() // "hello world"
'Hello World'.toUpperCase() // "HELLO WORLD"

// String.prototype.match()
var matches = 'cat, bat, sat, fat'.match('at')
matches.index // 1
matches.input // "cat, bat, sat, fat"

// String.prototype.search()，String.prototype.replace()
'cat, bat, sat, fat'.search('at') // 1
'aaa'.replace('a', 'b') // "baa"

// String.prototype.split()
'a|b|c'.split('|') // ["a", "b", "c"]
'a||c'.split('|') // ['a', '', 'c']

// String.prototype.localeCompare()
'apple'.localeCompare('banana') // -1
'apple'.localeCompare('apple') // 0
