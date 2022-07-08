var http = require('http')
// 创建新的 HTTP 服务器
http
  .createServer(function (req, res) {
    // 此处为回调函数
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    // end 方法将在把此内容发送给客户端后才关闭连接。
    res.end('Hello World\n')
  })
  .listen(3009)
console.log('3009')
