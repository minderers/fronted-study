//自定义类型
var val1: string | number
var val2: object | null = null

var val3: string | number = 123
console.log(val3.toString())
/* console.log(val3.length) */

let var4: unknown = 'this is a string'
let strLength: number = (var4 as string).length
