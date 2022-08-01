// src/index.js是js的入口文件
// 引入ReactDOM
import ReactDOM from 'react-dom/client'
import APP from './APP'
// 获取一个根容器
const root = ReactDOM.createRoot(document.getElementById('root'))
// 将APP渲染到根容器
root.render(<APP />)
