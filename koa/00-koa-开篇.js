/*
1.什么是Express?
Express是第一代最流行的web框架，它对Node.js的http进行了封装
但是它是'基于ES5'的语法，内部实现异步代码，只有一个方法：'回调'

2.什么是KOA1.x?
随着新版Node.js开始支持ES6，Express的团队又'基于ES6'重新编写了下一代web框架koa。
和Express相比，koa 1.x'使用generator实现异步'.
用generator实现异步比回调简单了不少，但是generator的本意并不是异步
https://www.it666.com/my/course/69  从36课时开始

3.什么是KOA2.x?
koa团队并没有止步于koa 1.x，他们非常超前地'基于ES7'开发了koa2，
和koa 1相比，koa2完全'使用Promise并配合async来实现异步'

4.Express、Koa1.x、Koa2.x区别
4.1最大的区别就是内部实现异步的方式不同
- Express使用回调函数实现异步, 容易出现回调地狱问题, 但是语法更老兼容性更好
- Koa1.x使用generator实现异步, 解决了回调地域问题, 但是generator的本意并不是异步
- Koa2.x使用Promise并配合async来实现异步, 解决了回调地域问题, 但是语法太新兼容性不好
4.2第二大的区别就是重量级不同
- Express中内置了很多封装好的功能, 而Koa中将这些功能都封装到了独立的模块中
  想要使用这些功能必须先安装对应的模块才能使用, 所以Koa比Express更轻量级
* */