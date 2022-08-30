import React from 'react';
/*
1.state注意点
永远不要直接修改state中的数据
如果要修改state中的数据, 必须通过setState传递一个新的值
 */
class App extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            age : 0
        }
    }
    render(){
        console.log('App-render被调用');
        return (
            <div>
                <p>{this.state.age}</p>
                <button onClick={()=>{this.btnClick()}}>APP按钮</button>
            </div>
        )
    }
    /*
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(this.state.age, nextState.age); // 0 1 //1 1
        if(this.state.age !== nextState.age){
            return true;
        }
        return false;
    }
    */
    btnClick(){
        // 以下两种写法区别:
        // 上面一种方式是设置了一个新的对象
        // 下面这种方式是设置了以前的对象

        // this.setState({
        //     age:this.state.age + 1
        // })
        this.state.age = this.state.age + 1;
        this.setState(this.state);
    }
}

export default App;
