import React from 'react';
/*
1.嵌套组件的render调用
默认情况下, 只要父组件render被调用, 那么所有后代组件的render也会被调用

2.当前存在的问题
如果我们只修改了父组件的数据, 并没有修改子组件的数据, 并且子组件中也没有用到父组件中的数据
那么子组件还是会重新渲染, 子组件的render方法还是会重新执行, 这样就带来了性能问题

https://zh-hans.reactjs.org/docs/react-component.html#shouldcomponentupdate
* */
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            age : 18
        }
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // return true;
        // return false;
        if(this.state.age !== nextState.age){
            return true;
        }
        return false;
    }

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
