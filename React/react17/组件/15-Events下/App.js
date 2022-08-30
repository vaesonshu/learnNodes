import React from 'react';
import { EventEmitter } from 'events';

// 1.在全局创建一个全局的事件管理器对象
const eventBus = new EventEmitter();

class Son extends React.Component {
	render() {
		return (
			<div>
				<p>son</p>
				<button onClick={() => { this.btnClick() }}>按钮</button>
			</div>
		)
	}
	btnClick() {
		eventBus.emit('say', 'lnj', 18);
	}
}
class Father extends React.Component {
	render() {
		return (
			<div>
				<Son />
			</div>
		)
	}
}
class App extends React.Component {
	componentDidMount() {
		eventBus.addListener('say', this.appFn.bind(this));
	}
	// 注意点: 如果通过events来实现跨组件的通讯
	//        那么为了性能考虑, 应该在组件卸载的时候移除掉对应的事件]

	// componentWillUnmount也是React组件的一个生命周期方法
	// 这个生命周期方法我们不用手动调用, React会自动调用
	// 当前组件被卸载的时候, React就会自动调用
	componentWillUnmount() {
		eventBus.removeListener('say', this.appFn.bind(this));
	}

	appFn(name, age) {
		console.log(name, age);
	}
	render() {
		return (
			<div>
				<Father />
			</div>
		)
	}
}

export default App;
