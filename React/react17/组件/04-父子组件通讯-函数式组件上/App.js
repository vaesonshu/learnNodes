import React from 'react';
import Header from './Components/Header.js'
import Main from './Components/Main.js'
import Footer from './Components/Footer.js'

class App extends React.Component {
	render() {
		return (
			<div>
				{/*
					只要在父组件中给子组件添加自定义的属性, 就可以给子组件传递数据
				*/}
				{/*
					React会把父组件传递的所有数据放到props对象中传递给子组件
				*/}
				<Header name={'lnj'} age={18} />
				<Main />
				<Footer />
			</div>
		)
	}
}

export default App;
