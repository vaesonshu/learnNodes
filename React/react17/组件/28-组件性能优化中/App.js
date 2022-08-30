import React from 'react';
/*
1.shouldComponentUpdate存在的问题
所有需要优化子组件都需要实现这个方法, 但这个方法并没有技术含量

2.解决方法
让组件继承于PureComponent, 让React自动帮我们实现
* */
// class Home extends React.Component{
class Home extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            age : 18
        }
    }
    /*
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(this.state.age !== nextState.age){
            return true;
        }
        return false;
    }
    */
    render(){
        console.log('Home-render被调用');
        return (
            <div>
                <p>{this.state.age}</p>
            </div>
        )
    }
}
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : 'lnj'
        }
    }
    render(){
        console.log('App-render被调用');
        return (
            <div>
                <p>{this.state.name}</p>
                <button onClick={()=>{this.btnClick()}}>APP按钮</button>
                <Home/>
            </div>
        )
    }
    btnClick(){
        this.setState({
            name:'知播渔'
        })
    }
}

export default App;
