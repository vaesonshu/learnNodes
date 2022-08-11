import { activeEffect } from "./effect"
export const enum ReactiveFlags {
  IS_REACTIVE = '__v_isReactive'
}
export const mutableHandles = {
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
}