import React from 'react';
/*
1.Fragment:
- 由于React规定, 组件中只能有一个根元素
  所以每次编写组件的时候, 我们都需要在最外层包裹一个冗余的标签
- 如果不想渲染这个冗余的标签, 那么就可以使用Fragment来代替
https://zh-hans.reactjs.org/docs/fragments.html
* */
class Home extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            heroList: ['鲁班', '虞姬', '黄忠']
        }
    }
    render() {
        // 如果组件的结构比较复杂, 那么只能有一个根元素
        return (
            /*
            <React.Fragment>
                <p>{this.state.heroList[0]}</p>
                <p>{this.state.heroList[1]}</p>
                <p>{this.state.heroList[2]}</p>
            </React.Fragment>
            */
            // 如果需要给Fragment添加key, 那么就不能使用语法糖
            <>
                {
                    this.state.heroList.map(name=>{
                        return (
                            <React.Fragment key={name}>
                              <p >{name}</p>
                            </React.Fragment>
                        )
                    })
                }
            </>
        )
    }
}
class App extends React.PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        return (
            /*
            <React.Fragment id={'app'}>
                <Home/>
            </React.Fragment>
             */
            // 下面的这种写法就是上面写法的语法糖
            <>
                <Home/>
            </>
        )
    }
}

export default App;
