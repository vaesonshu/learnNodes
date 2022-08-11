/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  const stack = []
  for (let i = 0; i < s.length; i += 1) {
    const c = s[i]
    if (
      stack.length > 0 &&
      stack[stack.length - 1].toLowerCase() === s.charAt(i).toLowerCase() &&
      stack[stack.length - 1] !== s.charAt(i)
    ) {
      stack.pop()
    } else {
      stack.push(s.charAt(i))
    }
  }
  return stack.join('')
}
console.log(makeGood('abBAcC'))
