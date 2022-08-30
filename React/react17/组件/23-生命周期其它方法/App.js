import React from 'react';

class Home extends React.Component {
	constructor(props) {
		super(props);
		console.log('挂载时- 创建组件constructor');
		this.state = {
			count: 0,
			// gender: 'man'
		}
	}
	// 注意点: getDerivedStateFromProps只需要了解即可(用得非常非常的少)
	static getDerivedStateFromProps(props, state) {
		console.log('挂载或更新时-映射数据getDerivedStateFromProps');
		console.log(props, state);
		// return {gender: 'man'};
		return props;
	}
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log('更新时-决定是否要更新UIshouldComponentUpdate');
		return true;
		// return false;
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
				<p>{this.state.gender}</p>
				<p>{this.state.name}</p>
				<button onClick={() => { this.btnClick() }}>按钮</button>
			</div>
		)
	}
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('更新时-最后能获取到更新之前数据的地方getSnapshotBeforeUpdate');
		console.log(prevProps, prevState);
		return null;
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
	btnClick() {
		this.setState({
			count: 1
		});
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
				{this.state.flag && <Home name={'lnj'} />}
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
