import React from 'react';
/*
1.高阶组件应用场景:
- 增强Props
https://zh-hans.reactjs.org/docs/higher-order-components.html#gatsby-focus-wrapper
* */
const UserContext = React.createContext({});
const {Provider, Consumer} = UserContext;
class Son1 extends React.PureComponent{
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
                <p>{this.props.country}</p>
            </div>
        )
    }
}
class Son2 extends React.PureComponent{
    render() {
        return (
            <ul>
                <li>{this.props.name}</li>
                <li>{this.props.age}</li>
                <li>{this.props.country}</li>
            </ul>
        )
    }
}
function EnhancedComponent (WrappedComponent) {
    class Father extends React.PureComponent{
        render() {
            return (
                <Consumer>{
                    value =>{
                        return (
                            /*
                            <WrappedComponent name={value.name} age={value.age}/>
                            */
                            <WrappedComponent {...value} {...this.props}/>
                        )
                    }
                }</Consumer>
            )
        }
    }
    return Father;
}
const Father1 = EnhancedComponent(Son1);
const Father2 = EnhancedComponent(Son2);

class App extends React.PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Provider value={{name:'zs', age:18}}>
                <Father1 country={'中国'}/>
                <Father2 country={'俄罗斯'}/>
            </Provider>
        )
    }
}

export default App;
