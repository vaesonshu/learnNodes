<template>
  <div class="about">
    <!-- v-html指令 -->
    <h1 v-html="rawHtml"></h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const rawHtml = ref()
rawHtml.value = '<span style="color: red">这里是用v-html指令渲染出来的</span>'
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
