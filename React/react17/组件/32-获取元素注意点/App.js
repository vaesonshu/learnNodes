import React from 'react';
/*
1.React中获取元素注意点
- 获取原生元素, 拿到的是元素本身
- 获取类组件元素, 拿到的是组件实例对象
- 获取函数组件元素, 拿不到任何内容
https://zh-hans.reactjs.org/docs/refs-and-the-dom.html#gatsby-focus-wrapper
* */
class Home extends React.PureComponent{
    render(){
        return (
            <div>Home</div>
        )
    }
}
function About() {
    return (
        <div>About</div>
    )
}
class App extends React.PureComponent{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }
    render(){
        return (
            <div>
                {/*
                <p ref={this.myRef}>我是段落</p>
                */}
                {/*
                <Home ref={this.myRef}/>
                */}
                <About ref={this.myRef}/>
                <button onClick={()=>{this.btnClick()}}>APP按钮</button>
            </div>
        )
    }
    btnClick(){
        // 如果获取的是原生的元素, 那么拿到的就是元素本身
        // 如果获取的是类组件元素, 那么拿到的就是类组件的实例对象
        // 如果获取的是函数组件元素, 那么什么都拿不到
        console.log(this.myRef.current);
    }
}

export default App;
