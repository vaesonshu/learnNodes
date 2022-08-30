import React from 'react';
import Header from './Components/Header.js'
import Main from './Components/Main.js'
import Footer from './Components/Footer.js'

class App extends React.Component {
	render() {
		return (
			<div>
				<Header name={'lnj'} age={18} />
				<Main name={'lnj'} age={18} />
				{/*
					React中子父组件间通讯
					1.父组件传递一个方法给子组件
					2.子组件在调用父组件传递过来的方法
					3.子组件在调用这个方法的时候, 就可以通过方法传参的形式给父组件传递数据或者方法了
				*/}
				<Footer fatherFn={this.myFn.bind(this)} />
			</div>
		)
	}
	myFn(name, age) {
		// alert(123);
		console.log(name, age);
	}
}

export default App;
