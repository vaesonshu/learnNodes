# 开始
## 简介
## 快速开始
---
# 基础
## 创建一个应用
## 

> 错误处理


`
app.config.errorHandler = (err) => {
  /* 处理错误 */
}
`

> 多个应用实例


```
const app1 = createApp({
  /* ... */
})
app1.mount('#container-1')
const app2 = createApp({
  /* ... */
})
app2.mount('#container-2')
```