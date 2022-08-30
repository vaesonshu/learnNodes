import React from 'react';

const AppContext1 = React.createContext({});
const AppContext2 = React.createContext({});

class Son extends React.Component {
	render() {
		return (
			<AppContext1.Consumer>
				{
					(value) => {
						return (
							<AppContext2.Consumer>
								{
									(value2) => {
										return (
											<div>
												<p>{value.name}</p>
												<p>{value.age}</p>
												<p>{value2.gender}</p>
											</div>
										)
									}
								}
							</AppContext2.Consumer>
						)
					}
				}
			</AppContext1.Consumer>
		)
	}
}
// 注意: 如果有多个生产者, 那么不能通过这种方式来消费
// Son.contextType = AppContext1;
// Son.contextType = AppContext2;

class Father extends React.Component {
	render() {
		return (
			<div>
				<Son></Son>
			</div>
		)
	}
}
class App extends React.Component {
	render() {
		return (
			<AppContext1.Provider value={{ name: 'lnj', age: 18 }}>
				<AppContext2.Provider value={{ gender: 'man' }}>
					<Father></Father>
				</AppContext2.Provider>
			</AppContext1.Provider>
		)
	}
}

export default App;
