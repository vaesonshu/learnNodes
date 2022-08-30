import React from 'react';
/*
<ul>
    <li>鲁班</li>
    <li>虞姬</li>
    <li>黄忠</li>
</ul>
<ul>
    <li>鲁班</li>
    <li>虞姬</li>
    <li>黄忠</li>
    <li>阿珂</li>
</ul>
<ul>
    <li>阿珂</li>
    <li>鲁班</li>
    <li>虞姬</li>
    <li>黄忠</li>
</ul>
* */
/*
1.列表渲染优化
由于diff算法在比较的时候默认情况下只会进行同层同位置的比较
所以在渲染列表时可能会存在性能问题

2.如何让diff算法递归比较同层所有元素?
给列表元素添加key,告诉React除了和同层同位置比, 还需要和同层其它位置比
https://zh-hans.reactjs.org/docs/reconciliation.html#the-diffing-algorithm
* */
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            heroList : ['鲁班', '虞姬', '黄忠']
        }
    }

    render(){
        return (
            <div>
                <ul>{
                    this.state.heroList.map(name=>{
                        return <li key={name}>{name}</li>
                    })
                }</ul>
                <button onClick={()=>{this.btnClick()}}>按钮</button>
            </div>
        )
    }
    btnClick(){
        this.setState({
            // heroList: [...this.state.heroList, '阿珂']
            heroList: ['阿珂', ...this.state.heroList]
        })
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
                <Home/>
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
