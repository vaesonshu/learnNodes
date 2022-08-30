import React from 'react';

/*
1.如果传递数据层次太深, 一层一层的传递比较麻烦, 所以React也提供了其它的解决方案
1.1 通过context上下文传递
1.2 通过Redux传递  (相当于Vuex)
1.3 通过Hooks传递  (相当牛X)
* */
/*
2.如何通过context上下文来传递数据
2.1调用创建上下文的方法, 只要我们调用了创建上下文的方法, 这个方法就会给我们返回两个容器组件
	 生产者容器组件(Provider) / 消费者容器组件(Consumer)
2.2只要拿到了这两个容器组件, 那么我们就可以通过这两个容器组件从祖先传递数据给所有的后代了
2.3首先在祖先组件中利用 '生产者容器组件' 包裹后代组件
2.4然后在后代组件中利用 '消费者容器组件' 获取祖先组件传递过来的数据即可
* */

// 1.创建一个上下文对象
const AppContext = React.createContext({});
// 2.从上下文对象中获取容器组件
// Provider: 生产者容器组件, 专门用于负责生产数据
// Consumer: 消费者容器组件, 专门用于消费生产者容器组件生产的数据的
// 容器组件  : 专门用于包裹其它组件的组件, 我们就称之为容器组件
const { Provider, Consumer } = AppContext;
class Son extends React.Component {
	render() {
		return (
			<Consumer>
				{
					(value) => {
						return (
							<div>
								<p>{value.name}</p>
								<p>{value.age}</p>
							</div>
						)
					}
				}
			</Consumer>
		)
	}
}
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
			/*我们可以在生产者容器组件中通过value来生产数据*/
			<Provider value={{ name: 'lnj', age: 18 }}>
				<Father></Father>
			</Provider>
		)
	}
}

export default App;
