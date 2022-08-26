// 判断数据类型方法
var type = function (o) {
  var s = Object.prototype.toString.call(o)
  return s.match(/\[object (.*?)\]/)[1].toLowerCase()
}
;[
  'Null',
  'Undefined',
  'Object',
  'Array',
  'String',
  'Number',
  'Boolean',
  'Function',
  'RegExp',
].forEach(function (t) {
  type['is' + t] = function (o) {
    return type(o) === t.toLowerCase()
  }
})
// type.isObject({}) // true
// type.isNumber(NaN) // true
// type.isRegExp(/abc/) // true
