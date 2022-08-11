export let activeEffect = undefined
class ReactiveEffect {
  // 这里表示在实例上新增了active属性
  active = true // 这个effect默认是激活状态
  constructor(public fn) { // 用户传递的参数也会放到this上 this.fn = fn

  }

  // run就是执行effect
  run() {
    if(!this.active) { this.fn() } // 这里表如果是非激活的状态 只需要执行函数 不需要进行依赖收集

    // 依赖收集 核心就是将当前的effect 和 稍后渲染的属性关联在一起
    try{
      activeEffect = this
      return this.fn() // 当稍后调用取值的时候 就可以获取到这个全局的activeEffect
    }finally {
      activeEffect = undefined
    }
    
  }
}

export function effect(fn) {
  // fn可以根据状态变化 重新执行 effect可以嵌套着写

  // 创建一个响应式的_effect
  const _effect = new ReactiveEffect(fn)
  // 默认先执行一次
  _effect.run()
}