let mathFunc = (a,b,c) => {
    return (a*b)/c;
}

console.log(`calling function with 0 params: ${mathFunc()}`);
console.log(`calling function with 1 params: ${mathFunc(1)}`);
console.log(`calling function with 2 params: ${mathFunc(10,2)}`);
console.log(`calling function with 3 params: ${mathFunc(10,2,4)}`);
console.log(`calling function with 4 params: ${mathFunc(10,2,4,5)}`);

//default value for param if not defined
//if param is passed with another value, it overwrites
let mathFunc2 = (a,b,c=1) => {
    return (a*b)/c;
}

console.log(`\n\ncalling function with 0 params: ${mathFunc2()}`);
console.log(`calling function with 1 params: ${mathFunc2(1)}`);
console.log(`calling function with 2 params: ${mathFunc2(10,2)}`);
console.log(`calling function with 3 params: ${mathFunc2(10,2,4)}`);
console.log(`calling function with 4 params: ${mathFunc2(10,2,4,5)}\n\n`);

let avg = (a,b, ...params) => {
    let total = a+b;
    for (let i = 0; i < params.length; i++){
        total += params[i];
    }
    return total/params.length + 2
}

console.log(`Average of: 12,124,1,24,123,12,3,123,12,312,31 = ${avg(12,124,1,24,123,12,3,123,12,312,31)}`);