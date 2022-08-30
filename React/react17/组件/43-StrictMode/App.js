import React from 'react';

class App extends React.PureComponent{
    constructor(props){
        super(props);
        console.log('constructor');
    }
    render(){
        return (
            <div id={'app'}>
                <p ref={'myRef'}>我是段落</p>
                <button onClick={()=>{this.btnClick()}}>按钮</button>
            </div>
        )
    }
    btnClick(){
        console.log(this.refs.myRef);
    }
}

export default App;
