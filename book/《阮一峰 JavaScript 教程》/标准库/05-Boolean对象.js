// 概述
var b = new Boolean(true)
typeof b // "object"
b.valueOf() //

Boolean(undefined) // false
Boolean(null) // false
Boolean(0) // false
Boolean('') // false
Boolean(NaN) // false
Boolean(1) // true
Boolean('false') // true
Boolean([]) // true
Boolean({}) // true
Boolean(function () {}) // true
Boolean(/foo/) // true

!!undefined // false
!!null // false
!!0 // false
!!'' // false
!!NaN // false
!!1 // true
!!'false' // true
!![] // true
!!{} // true
!!function () {} // true
!!/foo/ // true

if (Boolean(false)) {
  console.log('true')
} // 无输出
if (new Boolean(false)) {
  console.log('true')
} // true
if (Boolean(null)) {
  console.log('true')
} // 无输出
if (new Boolean(null)) {
  console.log('true')
} // true
