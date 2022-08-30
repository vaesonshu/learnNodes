import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
/*
1.什么是StrictMode?
作用: 开启严格模式, 检查后代组件中是否存在潜在问题
注意点:
- 和Fragment一样, 不会渲染出任何UI元素
- 仅在'开发模式'下有效

2.StrictMode检查什么?
- 检查过时或废弃的属性/方法/...
- 检查意外的副作用
 + 这个组件的constructor会被调用两次
 + 检查这里写的一些逻辑代码被调用多次时，是否会产生一些副作用

https://zh-hans.reactjs.org/docs/strict-mode.html#gatsby-focus-wrapper
* */

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
    , document.getElementById('root'));
