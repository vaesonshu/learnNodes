<template>
  <div></div>
</template>

<script setup>
/**
 * 4.1 响应式数据与副作用函数
 */

// 副作用函数指的是会产生副作用的函数 如下代码
// function effect() {
//   document.body.innerText = 'hello vue3'
// }

// 什么是响应式数据
// const obj = { text: 'hello world'}
// function effect() {
//   // effect函数的执行会读取 obj.text
//   // 当obj.text的值发生变化时 我们希望副作用函数effect会重新执行 如果能实现这个目标 对象obj就是响应式数据
//   document.body.innerText = obj.text
// }

/**
 * 4.2 响应式数据的基本实现
 */

// 采用Proxy来实现
// 存储副作用函数的桶
const bucket = new Set()
// 原始数据
const data = { text: 'hello world' }
// 对原始数据的代理
const obj = new Proxy(data, {
  // 拦截读取操作
  get(target, key) {
    // 将副作用函数effect添加到存储副作用函数的桶中
    bucket.add(effect)
    // 返回属性值
    return target[key]
  },
  // 拦截设置操作
  set(target, key, newVal) {
    // 设置属性值
    target[key] = newVal
    // 把副作用函数从桶里取出并执行
    bucket.forEach(fn => fn())
    // 返回true代表设置操作成功
    return true
  }
})

// 测试
function effect() {
  document.body.innerText = obj.text
}
// 执行副作用函数 触发读取
effect()
// 1秒后修改响应式数据
setTimeout(() => {
  obj.text = 'hello vue3'
}, 1000);


</script>

<style lang="scss" scoped></style>
