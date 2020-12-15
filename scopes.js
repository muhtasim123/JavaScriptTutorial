//3 scopes in JS
//JS always uses the MOST local version of variables with the same name

//global scope
//anything in our running program can access it
let x = 10;

//let and var are identical on the global scope
var y = 10;
function fun() {

    //block scope

    let x = 'a string';
    var y = 1000
    console.log(x);
    console.log(y);
    console.log(x+y);

    if(true){
        //local scope
        let x = 10;
        var y = 1000;
        console.log(x);
        console.log(y);
    }
}

fun();