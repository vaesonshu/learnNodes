import { isObject } from '@vue/shared'
import { mutableHandles, ReactiveFlags } from './baseHandler'
// 1.将数据转换为响应式的数据 只能做对象的代理
const reactiveMap = new WeakMap() // key只能是对象

// 实现同一个对象 代理返回同一个代理、
// 代理对象被再次代理 可以直接返回
export function reactive(target) {  
  if(!isObject(target)) {
    return
  }
  if(target[ReactiveFlags.IS_REACTIVE]) {
    return target
  }
  // 缓存机制
  let existingProxy = reactiveMap.get(target)
  if(existingProxy){
    return existingProxy
  }
  const proxy = new Proxy(target, mutableHandles)
  reactiveMap.set(target, proxy)
  return proxy
}