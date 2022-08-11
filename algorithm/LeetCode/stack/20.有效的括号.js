/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) {
    return false
  }
  // 准备一个栈
  const stack = []
  // 遍历
  for (let i = 0; i < s.length; i += 1) {
    const c = s[i]
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c)
    } else {
      const t = stack[stack.length - 1]
      if (
        (t === '(' && c === ')') ||
        (t === '[' && c === ']') ||
        (t === '{' && c === '}')
      ) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}

console.log(isValid('(){}'))
