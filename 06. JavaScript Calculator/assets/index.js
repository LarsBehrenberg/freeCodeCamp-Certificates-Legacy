var num = 0;
var result = 0;
var numArr = [];
var calcArr = [0];
var addition = false, subtraction = false, multiplication = false, division = false, equalButton = false;

// Get number function
function getNum(data) {
    if(equalButton == true){
        equalButton = false;
        numArr = [];
        calcArr = [0];
    }
    numArr.push(data);
    num = Number(numArr.slice().join(""));
    document.getElementById("resultElement").innerHTML = num;
}


function dot(){
    if(numArr.length == 0){
        numArr.push("0");
    }
    numArr.push(".");
    document.getElementById("resultElement").innerHTML = num;
    console.log(num);
    console.log(calcArr);
}

function add() {
    addition = true;
    if(equalButton == true){
        equalButton = false;
    }else if(subtraction == true){      // if subtraction is going on
        subtraction = false;
        calcArr.push("-");
        calcArr.push(num);
    }else if(multiplication == true){   // if multiplication is going on
        multiplication = false;
        calcArr.push("x");
        calcArr.push(num);
    }else if(division == true){         // if division is going on
        division = false;
        calcArr.push("÷");
        calcArr.push(num);
    }else{
        calcArr.push("+");
        calcArr.push(num);
    }
    numArr = [];
    document.getElementById("calcElement").innerHTML = calcArr.slice(2).join("");
}

function sub() {
    subtraction = true;
    if(equalButton == true){
        equalButton = false;
    }else if(addition == true){         // if addition is going on
        addition = false;
        calcArr.push("+");
        calcArr.push(num);
    }else if(multiplication == true){   // if multiplication is going on
        multiplication = false;
        calcArr.push("x");
        calcArr.push(num);
    }else if(division == true){         // if division is going on
        division = false;
        calcArr.push("÷");
        calcArr.push(num);
    }else if(calcArr.length == 1){      // if calculation just started
        calcArr.push("+");
        calcArr.push(num);
    }else{
        calcArr.push("-");
        calcArr.push(num);
    }
    numArr = [];
    document.getElementById("calcElement").innerHTML = calcArr.slice(2).join("");
}

function multi() {
    multiplication = true;
    if(equalButton == true){
        equalButton = false;
    }else if(addition == true) {        // if addition is going on
        addition = false;
        calcArr.push("+");
        calcArr.push(num);
    }else if(subtraction == true) {     // if subtraction is going on
        subtraction = false;
        calcArr.push("-");
        calcArr.push(num);
    }else if(division == true){         // if division is going on
        division = false;
        calcArr.push("÷");
        calcArr.push(num);
    }else if(calcArr.length == 1){      // if calculation just started
        calcArr.push("+");
        calcArr.push(num);
    }else{
        calcArr.push("x");
        calcArr.push(num);
    }
    numArr = [];
    document.getElementById("calcElement").innerHTML = calcArr.slice(2).join("");
}

function divi() {
    division = true;
    if(equalButton == true){
        equalButton = false;
    }else if(addition == true) {        // if addition is going on
        addition = false;           
        calcArr.push("+");
        calcArr.push(num);
    }else if(subtraction == true) {     // if subtraction is going on
        subtraction = false;
        calcArr.push("-");
        calcArr.push(num);
    }else if(multiplication == true){   // if multiplication is going on
        multiplication = false;
        calcArr.push("x");
        calcArr.push(num);
    }else if(calcArr.length == 1){      // if calculation just started
        calcArr.push("+");
        calcArr.push(num);
    }else{
        calcArr.push("÷");
        calcArr.push(num);
    }
    numArr = [];
    document.getElementById("calcElement").innerHTML = calcArr.slice(2).join("");
}



// Equal function
function equal() {
    result = 0;
    equalButton = true;

    if(addition == true){                   // IF ADDITION
        addition = false;
        calcArr.push("+");
        calcArr.push(num);
    }else if(subtraction == true){          // IF SUBTRACTION
        subtraction = false;
        calcArr.push("-");
        calcArr.push(num);
    }else if(multiplication == true){       // IF MULTIPLICATION
        multiplication = false;
        calcArr.push("x");
        calcArr.push(num);
    }else if(division == true){             // IF DIVISION
        division = false;
        calcArr.push("÷");
        calcArr.push(num);
    }
   
    if(calcArr.length != 1){
        for(var x = 0; x < calcArr.length; x++){
            if(calcArr[x-1] == "+"){
                result += calcArr[x];
            }else if(calcArr[x-1] == "-"){
                result -= calcArr[x];
            }else if(calcArr[x-1] == "x"){
                result *= calcArr[x];
            }else if(calcArr[x-1] == "÷"){
                result /= calcArr[x];
            }
        }
        document.getElementById("resultElement").innerHTML = result;
        document.getElementById("calcElement").innerHTML = calcArr.slice(2).join("");
    }else{
        addition = true;
        equal();
    }

    console.log(calcArr);
    console.log(result);
}

// AC FUNCTION - Reset everything
function ac(){
    num = 0;
    result = 0;
    numArr = [];
    calcArr = [0];
    addition = false, subtraction = false, multiplication = false, division = false, equalButton = false;    
    document.getElementById("resultElement").innerHTML = result;
    document.getElementById("calcElement").innerHTML = 0;
    console.log(calcArr);
    console.log(result);
}
