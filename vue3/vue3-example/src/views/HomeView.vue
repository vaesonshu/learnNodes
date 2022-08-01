<script setup lang="ts">
import Child from '../components/Child.vue'
</script>

<template>
  <Child class="child" title="我是子组件">
    <div>默认插槽</div>
    <template v-slot:header>
      <div>具名插槽header</div>
    </template>
  </Child>
</template>
