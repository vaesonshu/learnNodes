<template>
  <div>我是子组件</div>
  <!-- 在模板中使用$attrs访问属性 -->
  <div>{{ $attrs }}</div>
  <!-- 在模板中使用插槽 -->
  <slot></slot>
  <slot name="header"></slot>
</template>

<script setup>
import { useAttrs, useSlots } from 'vue'
const attrs = useAttrs()
const slots = useSlots()
console.log('attrs', attrs)
console.log('slots', slots)
</script>

<style lang="scss" scoped></style>
