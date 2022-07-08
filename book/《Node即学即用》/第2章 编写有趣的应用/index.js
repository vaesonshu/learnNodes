// 创建新的 TCP 服务器
var net = require('net')
var chatServer = net.createServer()
clientList = []
chatServer.on('connection', function (client) {
  client.name = client.remoteAddress + ':' + client.remotePort //   来自客户端的IP+端口号
  client.write('Hi ' + client.name + '!\n')
  console.log(client.name + ' joined')
  clientList.push(client)
  client.on('data', function (data) {
    broadcast(data, client)
  })
  // 当客户端断开连接时 把它从客户端列表中移除
  client.on('end', function () {
    console.log(client.name + ' quit')
    clientList.splice(clientList.indexOf(client), 1)
  })
  // 增加错误处理
  client.on('error', function (e) {
    console.log(e)
  })
})

// 把处理 data 的事件监听器代码抽离到了 broadcast 函数
function broadcast(message, client) {
  var cleanup = []
  for (var i = 0; i < clientList.length; i += 1) {
    if (client !== clientList[i]) {
      if (clientList[i].writable) {
        clientList[i].write(client.name + ' says ' + message)
      } else {
        cleanup.push(clientList[i])
        clientList[i].destroy()
      }
    }
  }
  // 在写入循环中删除死节点， 消除垃圾索引
  for (i = 0; i < cleanup.length; i += 1) {
    clientList.splice(clientList.indexOf(cleanup[i]), 1)
  }
}
chatServer.listen(9000)
console.log('ing')
