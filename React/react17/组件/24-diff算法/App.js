import React from 'react';
/*
1.React渲染流程
- 执行render方法
<div>
    <div><p>我是段落</p></div>
    <div><span>我是span</span></div>
</div>
- 将JSX转换成createElement
React.createElement("div", null,
    React.createElement("div", null,
        React.createElement("p", null, "我是段落")),
    React.createElement("div", null,
        React.createElement("span", null, "我是span"))
);
- 执行createElement创建虚拟DOM, 得到虚拟DOM树
{
 targetName: 'div',
 children:[
    {
     targetName: 'div',
     children:[
        {
         targetName: 'p'
        }
     ]
    },
    {
     targetName: 'div',
     children:[
        {
         targetName: 'span'
        }
     ]
    }
 ]
}
- 根据虚拟DOM树在界面上生成真实DOM
*/

/*
2.React更新流程
- props/state发生改变
- render方法重新执行
- 将JSX转换成createElement
- 利用createElement重新生成新的虚拟DOM树
- 新旧虚拟DOM通过'diff算法'进行比较
- 每发现一个不同就生成一个mutation
- 根据mutation更新真实DOM

3.React-Diff算法
- 只会比较同层元素
- 只会比较同位置元素(默认)
- 在比较过程中:
    + 同类型元素做修改
    + 不同类型元素重新创建
https://zh-hans.reactjs.org/docs/reconciliation.html#the-diffing-algorithm
* */
class Home extends React.Component{
    constructor(props){
        super(props);
        console.log('挂载时- 创建组件constructor');
        this.state = {
            count: 0,
        }
    }

    render(){
        return (
            <div>
                <p>Home</p>
                <p>{this.state.count}</p>
                <p>{this.state.gender}</p>
                <p>{this.state.name}</p>
                <button onClick={()=>{this.btnClick()}}>按钮</button>
            </div>
        )
    }
    btnClick(){
        this.setState({
            count: 1
        });
    }
}
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            flag : true
        }
    }
    render(){
        return (
            <div>
                {this.state.flag && <Home name={'lnj'}/>}
                <button onClick={()=>{this.btnClick()}}>父按钮</button>
            </div>
        )
    }
    btnClick(){
        this.setState({
            flag:false
        })
    }
}

export default App;
