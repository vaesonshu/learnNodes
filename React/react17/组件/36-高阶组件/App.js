import React from 'react';
/*
1.高阶组件(Higher-Order Components，简称为 HOC):
- 参数为组件，返回值为新组件的函数
https://zh-hans.reactjs.org/docs/higher-order-components.html#gatsby-focus-wrapper
* */
class Home extends React.PureComponent{
    render(){
        return (
            <div>Home</div>
        )
    }
}
function enhanceComponent(WrappedComponent) {
    class AdvComponent extends React.PureComponent{
        render() {
            return (
                <div>
                    <WrappedComponent/>
                </div>
            )
        }
    }
    return AdvComponent;
}
const AdvComponent = enhanceComponent(Home);

class App extends React.PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <AdvComponent/>
            </div>
        )
    }
}

export default App;
