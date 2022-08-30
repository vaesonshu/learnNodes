import React from 'react';

/*
1.props和state区别:
- props和state都是用来存储数据的
		- props存储的是父组件传递归来的数据
		- state存储的是自己的数据
		- props只读的
		- state可读可写
https://zh-hans.reactjs.org/docs/components-and-props.html
https://zh-hans.reactjs.org/docs/state-and-lifecycle.html
*/
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			age: 18
		}
	}
	render() {
		return (
			<div>
				<p>{this.props.name}</p>
				<p>{this.state.age}</p>
				<button onClick={() => { this.btnClick() }}>按钮</button>
			</div>
		)
	}
	btnClick() {
		// alert(123);
		// this.props.name = '知播渔';
		// this.state.age = 666;
		// console.log(this.state.age);
		this.setState({
			age: 888
		})
	}
}
class App extends React.Component {
	render() {
		return (
			<div>
				<Home name={'lnj'} />
			</div>
		)
	}
}

export default App;
