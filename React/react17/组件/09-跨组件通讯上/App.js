import React from 'react';

class Son extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<p>我是儿子</p>
				<p>{this.props.name}</p>
				<button onClick={() => { this.btnClick() }}>儿子按钮</button>
			</div>
		)
	}
	btnClick() {
		this.props.appFn(18);
	}
}

class Father extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<p>我是爸爸</p>
				<Son name={this.props.name} appFn={this.props.appFn} />
			</div>
		)
	}
}

class App extends React.Component {
	render() {
		return (
			<div>
				<Father name={'lnj'} appFn={this.myFn.bind(this)} />
			</div>
		)
	}
	myFn(age) {
		console.log(age);
	}
}

export default App;
