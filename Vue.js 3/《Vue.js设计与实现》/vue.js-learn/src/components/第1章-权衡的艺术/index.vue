<template>
  <div>
    <!-- 1.1 命令式和声明式 -->
    <div id="app"></div>
    <!-- 1.1.2 使用Vue.js的声明式语法 -->
    <div @click="() => alert('ok')">hello world</div>
    <!-- 1.2.2 之前 -->
    <div @click="() => alert('ok')">hello world</div>
    <!-- 1.2.2 之后 -->
    <div @click="() => alert('ok')">hello vue3</div>
  </div>
</template>

<script setup>
// 1.1 命令式和声明式
// 1.1.1 命令式代码如使用原生JavaScript，示例如下
// 获取div
const div = document.getElementById("app");
// 设置文本内容
div.innerHTML = "hello vue.js3";
// 绑定点击事件
div.addEventListener("click", () => {
  alert("你好！");
});

// 1.2 性能与可维护性的权衡
// 1.1.2 而使用Vue.js就可是使用声明式的方式来实现上述代码，实际上Vue.js已经在内部用命令时代码帮我们实现了，暴露给用户更加声明式
// 1.2 性能与可维护性的权衡
// 1.2.1 声明式代码的性能不优于命令式代码的性能
div.textContent = "hello vue3"; // 直接修改
// 1.2.2 声明式代码不一定能做到这一点，声明式代码会比命令式代码多出找出差异的性能消耗，但是声明式的优势在于可维护性更强

// 1.3 虚拟DOM的性能到底如何
// 声明式代码的更新性能消耗 = 找出差异的性能消耗 + 直接修改的性能消耗
// 虚拟DOM就是为了最小化找出差异这一步的性能消耗而出现的

// 1.4 运行时和编译时（Render and Compiler）
// Compiler程序就是把HTML字符串编译成树型结构的数据对象，我们只需关注书写HTML标签
const html = `
  <div>
    <span>hello world</span>
  </div>
`;
// 调用Compiler编译得到的树型结构的数据对象
const obj = Compiler(html);
// 再调用Render进行渲染
Render(obj, document.body);
</script>

<style scoped></style>
