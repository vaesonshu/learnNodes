import React from 'react';

/*
1.setState是如何给state赋值的?
- 通过Object.assign()
* */
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'lnj',
			age: 18
		}
		let oldObj = { name: 'lnj', age: 18 };
		let newObj = { age: 666 };
		/*
		{name:'lnj', age:666}
		* */
		let obj = Object.assign({}, oldObj, newObj);
		console.log(obj);
	}
	render() {
		return (
			<div>
				<p>{this.state.name}</p>
				<p>{this.state.age}</p>
				<button onClick={() => { this.btnClick() }}>按钮</button>
			</div>
		)
	}
	btnClick() {
		this.setState({
			age: 666
		});
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
