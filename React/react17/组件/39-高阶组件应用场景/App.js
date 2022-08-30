import React from 'react';
import {EventEmitter} from 'events';
/*
1.高阶组件应用场景:
- 代码复用/增强Props/抽离State/生命周期拦截
https://zh-hans.reactjs.org/docs/higher-order-components.html#gatsby-focus-wrapper
* */
const UserContext = React.createContext({});
const {Provider, Consumer} = UserContext;
const eventBus = new EventEmitter();
class Son1 extends React.PureComponent{
    /*
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        eventBus.addListener('update', this.update.bind(this));
    }
    componentWillUnmount() {
        eventBus.removeListener('update', this.update.bind(this));
    }
    update(list){
        this.setState({
            list: list
        })
    }
     */

    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
                <p>{this.props.country}</p>
                {
                    this.props.list.map(name=>{
                        return <p key={name}>{name}</p>
                    })
                }
            </div>
        )
    }
}
class Son2 extends React.PureComponent{
    /*
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        eventBus.addListener('update', this.update.bind(this));
    }
    componentWillUnmount() {
        eventBus.removeListener('update', this.update.bind(this));
    }
    update(list){
        this.setState({
            list: list
        })
    }
     */
    render() {
        return (
            <ul>
                <li>{this.props.name}</li>
                <li>{this.props.age}</li>
                <li>{this.props.country}</li>
                {
                    this.props.list.map(name=>{
                        return <li key={name}>{name}</li>
                    })
                }
            </ul>
        )
    }
}
function EnhancedComponent (WrappedComponent) {
    class Father extends React.PureComponent{
        constructor(props){
            super(props);
            this.state = {
                list: []
            }
        }
        componentDidMount() {
            eventBus.addListener('update', this.update.bind(this));
        }
        componentWillUnmount() {
            eventBus.removeListener('update', this.update.bind(this));
        }
        update(list){
            this.setState({
                list: list
            })
        }
        render() {
            return (
                <Consumer>{
                    value =>{
                        return (
                            <WrappedComponent {...value} {...this.props} {...this.state}/>
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
                <button onClick={()=>{this.btnClick()}}>按钮</button>
            </Provider>
        )
    }
    btnClick(){
        eventBus.emit('update', ['鲁班', '虞姬', '黄忠']);
    }
}

export default App;
