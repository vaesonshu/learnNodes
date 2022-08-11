const koa = require('koa')
const app = new koa()
// ctx === context
// ctx.body === ctx.response.body
app.use((ctx, next) => {
  console.log(ctx)
  ctx.body = 'koa初始化成功'
  ctx.response.body = { name: 'vaeian' }
})
app.listen(3000) // 监听端口号
