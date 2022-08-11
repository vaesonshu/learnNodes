<template>
  <div></div>
</template>

<script setup>
import { ref, reactive, warn } from "vue";
// 2.1 提升用户的开发体验
// 友好的错误警告提示，在控制台友好的打印数据（在谷歌浏览器设置Enable custom formatters便能友好的打印出你输出的数据，因为在vue3的源码中有initCustomFormatter函数）
const count = ref(0);
const count2 = reactive({
  a: "1",
  b: "2",
});
console.log("count", count, count2);

// 2.2 控制框架代码的体积
// 通过构建工具设置预定义的_DEV_常量用来判断开发环境(_DEV_ = true)和生产环境(_DEV_ = false)下，是否向用户提供友好的警告信息，这样就不会增加在生产环境下的代码体积
// if (_DEV_ && !res) {
//   warn("警告");
// }
warn("这是一条警告");

// 2.3 框架要做好良好的Tree-Shaking
// 要实现Tree-Shaking必须满足模块必须是ESM(ES Module) 在rollup中简单实现一下 在input.js中执行npx rollup input.js -f esm -o bundle.js 运行完毕bundle.js中并不包含bar函数，说明Tree-Shaking起作用了
// /*#__PURE__*/ 这段代码放在input.js中就会告诉rollup不会产生副作用，此时再去执行构建命令就会发现bundle.js中的内容是空的

// 2.4 框架应该输出怎样的构建产物
// vue.global.js就是立即执行的函数表达式
// 用户还可以在Node.js中通过require语句引入资源 如const Vue = require('vue')

// 2.5 特性开关
// __VUE_OPTIONS_API__是一个特性开关 如果不适用vue2选项API 则可以关闭此开关，从而减轻打包的体积

// 2.6 错误处理
// 2.7 良好的TypeScript类型支持
// 2.8 总结
</script>

<style lang="scss" scoped></style>
