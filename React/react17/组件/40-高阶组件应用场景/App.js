import React from 'react';
/*
1.高阶组件应用场景:
- 代码复用/增强Props/抽离State/生命周期拦截
- 权限控制
https://zh-hans.reactjs.org/docs/higher-order-components.html#gatsby-focus-wrapper
* */
class Info extends React.PureComponent{
    render() {
        return (
            <div>用户信息</div>
        )
    }
}
class Login extends React.PureComponent{
    render() {
        return (
            <div>用户登录</div>
        )
    }
}
function EnhancedComponent (WrappedComponent) {
    class Authority extends React.PureComponent{
        render() {
            if(this.props.isLogin){
                return <Info/>
            }else{
                return <Login/>
            }
        }
    }
    return Authority;
}
const AuthorityInfo = EnhancedComponent(Info);

class App extends React.PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <AuthorityInfo isLogin={true}/>
        )
    }
}

export default App;
