import React from 'react';
import Header from './Components/Header.js'
import Main from './Components/Main.js'
import Footer from './Components/Footer.js'

class App extends React.Component {
	render() {
		return (
			<div>
				{/*
					<Header name={'lnj'} age={18}/>
				*/}
				{/*
					<Header/>
				*/}
				<Header name={'lnj'} age={'18'} />
				<Main />
				<Footer />
			</div>
		)
	}
}

export default App;
