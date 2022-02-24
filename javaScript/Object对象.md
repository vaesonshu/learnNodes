# 判断数据类型的方法

1. `Object.prototype.toString`方法会返回对象的类型字符串
2. 通过函数`call`调用`Object.prototype.toString`方法，即`Object.prototype.toString.call(value)`来判断值的类型

```javascript
Object.prototype.toString.call("测试") // "[object String]"
```