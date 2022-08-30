import React from 'react';
// import './App.css'
import Header from './Components/Header.js'
import Main from './Components/Main.js'
import Footer from './Components/Footer.js'

class App extends React.Component {
	render() {
		return (
			<div>
				{/*
					<div className={'header'}>头部</div>
					<div className={'main'}>中间</div>
					<div className={'footer'}>底部</div>
				*/}
				<Header />
				<Main />
				<Footer />
			</div>
		)
	}
}

export default App;
