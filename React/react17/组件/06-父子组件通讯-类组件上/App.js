import React from 'react';
import Header from './Components/Header.js'
import Main from './Components/Main.js'
import Footer from './Components/Footer.js'

class App extends React.Component {
	render() {
		return (
			<div>
				<Header name={'lnj'} age={18} />
				{/*
				React会把父组件传递的所有数据放到pros对象中传递给子组件
				*/}
				{/*
				<Main name={'lnj'} age={18}/>
				*/}
				{/*
				<Main/>
				*/}
				<Main name={'lnj'} age={'18'} />
				<Footer />
			</div>
		)
	}
}

export default App;
