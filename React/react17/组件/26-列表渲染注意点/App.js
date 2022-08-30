import React from 'react';
/*
1.key注意点:
如果列表中出现相同的key, 所以我们必须保证列表中key的取值唯一
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
