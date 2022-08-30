import React from 'react';

class Home extends React.Component {
	constructor(props) {
		super(props);
		console.log('挂载时- 创建组件constructor');
		/*
		1.constructor生命周期方法中做什么?
		- 通过 props接收父组件传递过来的数据
		- 通过 this.state 初始化内部的数据
		- 通过bind为事件绑定实例（this)
		this.myClick = this.btnClick.bind(this);
		* */
		this.state = {
			count: 0
		}
	}
	render() {
		if (this.state.count === 0) {
			console.log('挂载时- 渲染组件render');
		} else {
			console.log('更新时- 渲染组件render');
		}
		/*
		2.render生命周期方法中做什么?
		- 返回组件的网页结构
		* */
		return (
			<div>
				<p>Home</p>
				<p>{this.state.count}</p>
				<button onClick={() => { this.btnClick() }}>按钮</button>
			</div>
		)
	}
	btnClick() {
		this.setState({
			count: 1
		});
	}
	componentDidMount() {
		console.log('挂载时- 渲染完成componentDidMount');
		/*
		 3.componentDidMount生命周期方法中做什么?
		 - 依赖于DOM的操作可以在这里进行
		 - 在此处发送网络请求就最好的地方（官方建议）
		 - 可以在此处添加一些订阅（会在componentWillUnmount取消订阅）
		* */
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('更新时- 更新完成componentDidUpdate');
		/*
		4.componentDidUpdate生命周期方法中做什么?
		- 可以在此对更新之后的组件进行操作
		* */
	}
	componentWillUnmount() {
		console.log('卸载时- 即将被卸载componentWillUnmount');
		/*
		5.componentWillUnmount生命周期方法中做什么?
		- 在此方法中执行必要的清理操作
		- 例如，清除 timer，取消网络请求或清除
		- 在 componentDidMount() 中创建的订阅等
		* */
	}
}
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			flag: true
		}
	}
	render() {
		return (
			<div>
				{this.state.flag && <Home />}
				<button onClick={() => { this.btnClick() }}>父按钮</button>
			</div>
		)
	}
	btnClick() {
		this.setState({
			flag: false
		})
	}
}

export default App;
