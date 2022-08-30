import React from 'react';
/*
对于函数式组件来说:
- 没有继承关系
- 没有生命周期方法
* */
/*
1.函数组件的性能优化
对于类组件, 我们可以通过实现shouldComponentUpdate方法, 或者继承于PureComponent
来解决性能优化问题, 但是对于函数式组件, 是没有生命周期的, 是没有继承关系的
那么在函数式组件中如何解决性能优化问题呢?

2.通过React.memo()高阶函数
React.memo()会返回一个优化后的组件给我们
* */
/*
function Home() {
    console.log('Home-render被调用');
    return (
        <div>
            <p>Home</p>
        </div>
    )
}
 */
const PurHome = React.memo(function() {
    console.log('Home-render被调用');
    return (
        <div>
            <p>Home</p>
        </div>
    )
});
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
                <PurHome/>
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
