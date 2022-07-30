<script setup>
const { data } = await useAsyncData('ssr', () =>
  $fetch('https://m.maoyan.com/ajax/movieOnInfoList')
)
const listData = data.value.movieList
</script>

<template>
  <div v-for="(item, index) in listData" :key="index">
    <h1>{{ item.nm }}</h1>
    <h2>{{ item.star }}</h2>
    <img :src="item.img" style="width: 300px; height: 400px" />
  </div>
</template>
