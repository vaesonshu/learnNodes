import React from 'react';
import { EventEmitter } from 'events';
/*
1.跨组件事件通讯
- 通过context我们已经能够实现跨组件通讯
	但是通过context我们只能实现从上往下传递
	不能实现从下往上传递或者同级之间传递
- 经过我们前面的学习我们知道, 子父组件之间通讯, 是通过回调函数的方式
	兄弟组件之间通讯, 也是通过父组件, 通过回调函数的方式
- 但是如果通过回调函数, 传统的方式我们需要一层一层的传递, 比较复杂
	所以我们可以借助一个第三方库(events)来实现跨组件事件通讯
*/
/*
2.如何使用events库实现跨组件通讯
2.1 安装events库, npm install events
2.2创建EventEmitter对象：eventBus对象；
2.3监听事件：eventBus.addListener("事件名称", 监听函数)；
2.4移除事件：eventBus.removeListener("事件名称", 监听函数)；
2.5发出事件：eventBus.emit("事件名称", 参数列表);
* */

// 1.在全局创建一个全局的事件管理器对象
const eventBus = new EventEmitter();

class A extends React.Component {
	// componentDidMount是React组件的一个生命周期方法
	// 这个方法不用我们手动调用, React会自动帮我们调用
	// 当前组件被渲染到界面上的时候, React就会自动调用
	componentDidMount() {
		eventBus.addListener('say', this.aFn.bind(this))
	}
	aFn(name, age) {
		console.log(name, age);
	}
	render() {
		return (
			<div>A</div>
		)
	}
}
class B extends React.Component {
	render() {
		return (
			<div>
				<p>B</p>
				<button onClick={() => { this.btnClick() }}>按钮</button>
			</div>
		)
	}
	btnClick() {
		eventBus.emit('say', 'lnj', 18)
	}
}
class App extends React.Component {
	render() {
		return (
			<div>
				<A />
				<B />
			</div>
		)
	}
}

export default App;
