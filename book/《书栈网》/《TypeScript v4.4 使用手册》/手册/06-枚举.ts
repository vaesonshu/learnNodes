// 枚举
// 数字枚举
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right
}
console.log(Direction1.Left)

enum Response2 {
  No = 0,
  Yes = 1,
}
function respond(recipient: string, message: Response2): void {
  console.log('message', message)
}
respond("Princess Caroline", Response2.No)

// 字符串枚举
enum Direction2 {
  Up2 = "UP",
  Down2 = "DOWN",
  Lef2t = "LEFT",
  Right2 = "RIGHT",
}
console.log(Direction2.Down2)

// 异构枚举（Heterogeneous enums） 不建议
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}

// 计算的和常量成员

// 联合枚举与枚举成员的类型

// 运行时的枚举

// 编译时的枚举

// 反向映射

// 外部枚举

