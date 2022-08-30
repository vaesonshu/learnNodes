import React from 'react';
/*
1.受控组件:
值受到react控制的表单元素
https://zh-hans.reactjs.org/docs/forms.html#controlled-components
* */
class App extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            name: 'lnj'
        }
    }
    render(){
        return (
            <form>
                <input type="text"
                       value={this.state.name}
                        onChange={(e)=>{this.change(e)}}/>
            </form>
        )
    }
    change(e){
        console.log(e.target.value);
        this.setState({
            name: e.target.value
        })
    }
}

export default App;
