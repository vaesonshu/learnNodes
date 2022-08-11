// 创建一个新类支持 EventEmitter 事件
var util = require('util')
// 调用其模块中的 EventEmitter 类
EventEmitter = require('events').EventEmitter
var Server = function () {
  console.log('init')
}
// inherits能够把 EventEmitter 类的方法添加到我们创建的 Server 类中
util.inherits(Server, EventEmitter)
var s = new Server()
s.on('abc', function () {
  console.log('abc')
})
s.emit('abc')
// 触发一个事件
