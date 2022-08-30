import React from 'react';

/*
1.setState是同步的还是异步的?
- 在组件生命周期或React合成事件中，setState是异步；
- 在setTimeout或者原生dom事件中，setState是同步；
https://zh-hans.reactjs.org/docs/state-and-lifecycle.html
* */
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			age: 18, // 张三通过setState修改了age
			name: 'lnj', // 李四通过setState修改name
			gender: 'man' // 王五通过setState修改gender
		}
	}
	render() {
		console.log('渲染界面');
		return (
			<div>
				<p>{this.state.age}</p>
				{/*
					<button onClick={()=>{this.btnClick()}}>按钮</button>
				*/}
				<button id={'btn'}>按钮</button>
			</div>
		)
	}
	componentDidMount() {
		const oBtn = document.getElementById('btn');
		oBtn.onclick = () => {
			this.setState({
				age: 666
			});
			console.log(this.state.age); // 666
		}
	}

	btnClick() {
		/*
		1.setState是同步的还是异步的?
		默认情况下setState是异步的
		2.为什么setState是异步的?
		主要是为了优化性能
		3.如何拿到更新之后的数据?
		setState方法其实可以接收两个参数
		通过setState方法的第二个参数, 通过回调函数拿到
		4.setState一定是异步的吗?
		不一定: 在定时器中, 在原生事件中
		* */
		/*
		this.setState({
				age: 111
		}, ()=>{
				console.log('回到函数中', this.state.age);
		});
		// this.setState({
		//     age: 222
		// });
		// this.setState({
		//     age: 333
		// });
		console.log(this.state.age); // 18
		 */
		setTimeout(() => {
			this.setState({
				age: 666
			});
			console.log(this.state.age); // 666
		}, 0);
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
