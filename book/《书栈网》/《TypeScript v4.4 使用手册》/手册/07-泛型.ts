// 我们需要一种方法使返回值的类型与传入参数的类型是相同的。 这里，我们使用了类型变量，它是一种特殊的变量，只用于表示类型而不是值。
function identity<T>(arg: T): T {
  return arg;
}
const result = identity('hello')
console.log(result)

// 使用泛型变量
function loggingIdentity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);  // Array has a .length, so no more error
  return arg;
}
const result2 = loggingIdentity<number>([1,2,3,4])
console.log(result2)

// 泛型类型
interface GenericIdentityFn<T> {
  (arg: T): T;
}
function identity3<T>(arg: T): T {
  return arg;
}
let myIdentity: GenericIdentityFn<number> = identity3;

// 泛型类
// class GenericNumber<T> {
//   zeroValue: T;
//   add: (x: T, y: T) => T;
// }

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x, y) { return x + y; };

// let stringNumeric = new GenericNumber<string>();
// stringNumeric.zeroValue = "";
// stringNumeric.add = function(x, y) { return x + y; };

// 泛型约束
interface Lengthwise {
  length: number;
}
function loggingIdentity2<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);  // Now we know it has a .length property, so no more error
  return arg;
}
loggingIdentity2([1,2,3,4])
loggingIdentity2({length: 10, value: 3});

// 在泛型约束中使用类型参数
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a"); // okay
getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

// 在泛型里使用类类型
