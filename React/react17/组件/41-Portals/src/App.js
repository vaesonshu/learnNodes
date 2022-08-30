import React from 'react';
import ReactDOM from 'react-dom';
/*
1.Portals:
- 默认情况下, 所以的组件都是渲染到root元素中的
  Portal提供了一种将组件渲染到其它元素中的能力
https://zh-hans.reactjs.org/docs/portals.html
* */
class Modal extends React.PureComponent{
    render() {
        /*
        this.props.children: 可以获取到当前组件所有的子元素或者子组件
        createPortal: 接收两个参数
        第一个参数: 需要渲染的内容
        第二个参数: 渲染到什么地方
        * */
        return ReactDOM.createPortal(this.props.children, document.getElementById('other'));
    }
}
class App extends React.PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div id={'app'}>
                <Modal>
                    <div id={'modal'}>Modal</div>
                </Modal>
            </div>
        )
    }
}

export default App;
