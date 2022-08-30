import React from 'react';

/*
1.什么是生命周期?
事物从生到死的过程, 我们称之为生命周期

2.什么是生命周期方法?
事物在从生到死过程中, 在特定时间节点调用的方法, 我们称之为生命周期方法

1.React组件生命方法?
组件从生到死的过程, 在在特定的时间节点调用的方法, 我们称之为组件的生命周期方法
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

- constructor函数: 组件被创建的时候, 就会调用
- render函数: 渲染组件的时候, 就会调用
- componentDidMount函数：组件已经挂载到DOM上时，就会回调
- componentDidUpdate函数：组件已经发生了更新时，就会回调
- componentWillUnmount函数：组件即将被移除时，就会回调
* */
class Home extends React.Component {
	constructor(props) {
		super(props);
		console.log('挂载时- 创建组件constructor');
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
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('更新时- 更新完成componentDidUpdate');
	}
	componentWillUnmount() {
		console.log('卸载时- 即将被卸载componentWillUnmount');
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
