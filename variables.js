//how to declare variables in javascript

//4 ways to declare variables

//var is the original way to declare a variable in JS
//you should avoid using var
//var issues were fixed in ES6 update by introducing the let keyword
var something


//let keyword was added in ES6
//same functionality as var but with additional variable scope
//avoids the hoisting problem that var has
let a
a = 10;
console.log(a)

//can be a int then changed to a string
//example of dynamic typing
a += 'Add a string'
console.log(a)

a = 'This is a string now wow'
console.log(a)

//will give you not a number
//code will execute but will return NaN (not a number)
let x = ['A String']
let y = a / x
console.log(y)

a = 10
y = '10'
console.log(a+y)
console.log(a-y)
console.log(a*y)
console.log(a/y)
console.log(a%y)


//similar to let, but it is a constant
//once a value is assigned, it cannot be reassigned
const c = 'const'



//last way is that you don't need a keyword at all
//bad and confusing, should never be done 
d = 10;