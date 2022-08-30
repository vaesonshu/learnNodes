import React from 'react';
/*
1.如何获取函数式组件中的元素
如果要获取的不是函数式组件本身,
而是想获取函数式组件中的某个元素
那么我们可以使用Ref转发来获取
* */


const About = React.forwardRef(function(props, myRef) { // myRef === this.myRef
    return (
        <div>
            <p>我是段落</p>
            <span ref={myRef}>我是span</span>
        </div>
    )
});
class App extends React.PureComponent{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }
    render(){
        return (
            <div>
                <About ref={this.myRef}/>
                <button onClick={()=>{this.btnClick()}}>APP按钮</button>
            </div>
        )
    }
    btnClick(){
        console.log(this.myRef.current);
    }
}

export default App;
