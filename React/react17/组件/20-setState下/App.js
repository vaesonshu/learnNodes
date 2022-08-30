import React from 'react';

/*
1.State合并现象?
- 因为setState会收集一段时间内所有的修改再更新界面
	所以就出现了State合并现象
* */
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			age: 0
		};
	}
	render() {
		return (
			<div>
				<p>{this.state.age}</p>
				<button onClick={() => { this.btnClick() }}>按钮</button>
			</div>
		)
	}
	btnClick() {
		/*
		1.为什么最终的值是1, 不是3
		因为setState默认是一个异步的方法, 默认会收集一段时间内所有的更新, 然后再统一更新
		所以就导致了最终的值是1, 不是3
		* */
		/*
		this.setState({
				age: this.state.age + 1
		}, ()=>{
				this.setState({
						age: this.state.age + 1
				}, ()=>{
						this.setState({
								age: this.state.age + 1
						});
				});
		});
		 */
		this.setState((preState, props) => {
			return { age: preState.age + 1 }
		})
		this.setState((preState, props) => {
			return { age: preState.age + 1 }
		})
		this.setState((preState, props) => {
			return { age: preState.age + 1 }
		})

	}
}
class App extends React.Component {
	render() {
		return (
			<div>
				<Home />
			</div>
		)
	}
}

export default App;
