import { isObject } from '@vue/shared'
// 1.将数据转换为响应式的数据 只能做对象的代理
const reactiveMap = new WeakMap() // key只能是对象
const enum ReactiveFlags {
  IS_REACTIVE = '__v_isReactive'
}
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
  const proxy = new Proxy(target, {
    // receiver改变调用取值时的this指向 receiver即proxy
    get(target, key, receiver) {
      if(key === ReactiveFlags.IS_REACTIVE) {
        return true
      }
      // 去代理对象上取值 就执行get
      return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
      // 去代理对象上设置值 就执行set
      return Reflect.set(target, key, value, receiver)
    }
  })
  reactiveMap.set(target, proxy)
  return proxy
}