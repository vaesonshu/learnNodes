// 事实上，程序中现在运行的部分和将来运行的部分之间的关系就是异步编程的核心。
// 1.1　分块的程序
// 从现在到将来的“等待”，最简单的方法（但绝对不是唯一的，甚至也不是最好的！）是使用一个通常称为回调函数的函数

// 1.2　事件循环
// 它们都提供了一种机制来处理程序中多个块的执行，且执行每块时调用 JavaScript 引擎，这种机制被称为事件循环。
