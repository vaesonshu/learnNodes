import React from 'react';

// 1.创建一个上下文对象
const AppContext = React.createContext({
	name: '知播渔',
	age: 666
});
class Son extends React.Component {
	render() {
		return (
			<div>
				{/*3.从当前组件的上下文中消费数据*/}
				<p>{this.context.name}</p>
				<p>{this.context.age}</p>
			</div>
		)
	}
}
// 2.指定当前组件的上下文
Son.contextType = AppContext;

class Father extends React.Component {
	render() {
		return (
			<div>
				<p>{this.context.name}</p>
				<p>{this.context.age}</p>
				<Son></Son>
			</div>
		)
	}
}
Father.contextType = AppContext;
class App extends React.Component {
	render() {
		return (
			// 3.使用生产者生产数据
			<div>
				<Father></Father>
			</div>
		)
	}
}

export default App;
