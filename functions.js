let x = function(){
    console.log(`I am a function`);
}

x();

function callFunctionWithHelloWord (funcToCall) {
    funcToCall("Hello World");
}

let print = function(stringToPrint){
    console.log(stringToPrint);
}

callFunctionWithHelloWord(print);

function thatDisplaysSomethingpretty(){

}

function putsABorderAroundDisplay(display){
    makeFancyBorder = true;
    fancyBorder();
    display();
}

function sendRequestToDatabase(whatToDoWithReturnedData){
    let data = snendRequest();
    whatToDoWithReturnedData(data);
}

//lambda functions

callFunctionWithHelloWord((st)=>{
    st += st;
    console.log(`My string is ${st}`);
});

function hoc (params, functionToCall){
    functionToCall(params);
}