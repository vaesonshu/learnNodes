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
            name: 'lnj',
            email: '97606813@qq.com',
            phone: '13554499311'
        }
    }
    render(){
        return (
            <form>
                <input type="text"
                       value={this.state.name}
                       name={'name'}
                       onChange={(e)=>{this.change(e)}}/>
                <input type="text"
                       name={'email'}
                       value={this.state.email}
                       onChange={(e)=>{this.change(e)}}/>
                <input type="text"
                       name={'phone'}
                       value={this.state.phone}
                       onChange={(e)=>{this.change(e)}}/>
            </form>
        )
    }
    change(e){
        console.log(e.target.name);
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    /*
    nameChange(e){
        console.log(e.target.name);
        this.setState({
            name: e.target.value
        })
    }
    emailChange(e){
        console.log(e.target.name);
        this.setState({
            email: e.target.value
        })
    }
    phoneChange(e){
        console.log(e.target.name);
        this.setState({
            phone: e.target.value
        })
    }
     */
}

export default App;
