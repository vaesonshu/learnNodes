<template>
  <div class="about">
    <!-- v-html指令 -->
    <h1 v-html="rawHtml"></h1>
    <!-- 声明响应式状态 -->
    <button @click="increment">{{ state.count }}</button>
    <!-- 响应性语法糖 -->
    <button @click="increment2">{{ state2.count }}</button>
  </div>
</template>

<script setup>
import { ref, reactive， computed } from 'vue'
const rawHtml = ref()
rawHtml.value = '<span style="color: red">这里是用v-html指令渲染出来的</span>'

const state = reactive({ count: 0 })
const increment = function () {
  state.count++
  nextTick(() => {
    // 访问更新后的 DOM
  })
}
</script>
<style></style>
