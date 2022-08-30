import React from 'react';
/*
1.React中获取元素的方式
- 字符串
- 对象
- 回调函数
https://zh-hans.reactjs.org/docs/refs-and-the-dom.html#gatsby-focus-wrapper
* */
class App extends React.PureComponent{
    constructor(props){
        super(props);
        // this.oPRef = React.createRef();
        this.oPRef = null;
    }
    render(){
        console.log('App-render被调用');
        return (
            <div>
                {/*
                <p id={'box'}>我是段落</p>
                */}
                {/*
                <p ref={'box'}>我是段落</p>
                */}
                {/*
                <p ref={this.oPRef}>我是段落</p>
                */}
                <p ref={(arg)=>{this.oPRef = arg}}>我是段落</p>
                <button onClick={()=>{this.btnClick()}}>APP按钮</button>
            </div>
        )
    }
    btnClick(){
        // 第一种获取方式: 传统方式(在React中及其不推荐)
        // let oP = document.getElementById('box');
        // 第二种获取方式: 通过ref='字符串' / this.refs.字符串 (通过字符串的方式即将被废弃, 也不推荐)
        // let oP = this.refs.box;
        // 第三种获取方式: 通过createRef()创建一个对象, 然后将这个对象传递给ref (推荐)
        // let oP = this.oPRef.current;
        // 第四种获取方式: 通过传递一个回调函数, 然后保存回调函数参数的方式(推荐)
        let oP = this.oPRef;
        oP.innerHTML = 'www.it666.com';
        console.log(oP);
    }
}

export default App;
