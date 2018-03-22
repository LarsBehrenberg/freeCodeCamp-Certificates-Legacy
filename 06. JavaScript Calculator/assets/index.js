//Declare variables
var res = 0;
var temp = 0;
var addition = false;
var subtraction = false;
var multiplication = false;
var division = false;
var calc = [];


// Number functions
function calculations(data){
    if(addition == true){
        addition = false;
        temp = data;
        res += temp;
        calc.push(temp);
        document.getElementById("resultElement").innerHTML = data;
        document.getElementById("calcElement").innerHTML = calc.join("");  
    }else if(subtraction == true){
        subtraction = false;
        temp = data;
        res -= temp;
        calc.push(temp);
        document.getElementById("resultElement").innerHTML = data;
        document.getElementById("calcElement").innerHTML = calc.join(""); 
    }
    else if(multiplication == true){
        multiplication = false;
        temp = data;
        res *= temp;
        calc.push(temp);
        document.getElementById("resultElement").innerHTML = data;
        document.getElementById("calcElement").innerHTML = calc.join(""); 
    }
    else if(division == true){
        division = false;
        temp = data;
        res /= temp;
        calc.push(temp);
        document.getElementById("resultElement").innerHTML = data;
        document.getElementById("calcElement").innerHTML = calc.join(""); 
    }
    else{
        res = data;
        calc = [];
        calc.push(res)
        document.getElementById("resultElement").innerHTML = data;
        document.getElementById("calcElement").innerHTML = calc.join(""); 
        
    }
}


// AC Button
function ac(){
    calc = [];
    res = 0; 
    temp = 0;
    subtraction = false;
    addition = false;
    document.getElementById("resultElement").innerHTML = "0";
    document.getElementById("calcElement").innerHTML = "0";
}

// CE Button
function ce(){
    if(calc.length != 0 && Number.isInteger(calc[calc.length-1]) == true){
        calc.pop();
        if(calc[calc.length-1] == "+"){res-=temp;calc.pop();add();}
        else if(calc[calc.length-1] == "-"){res+=temp;calc.pop();sub();}
        else if(calc[calc.length-1] == "x"){res/=temp;calc.pop();multi();}
        else if(calc[calc.length-1] == "÷"){res*=temp;calc.pop();divi();}
    }
    else if(addition == true || subtraction == true || multiplication == true || division == true){
        calc.pop();
        document.getElementById("resultElement").innerHTML = calc[calc.length-1];
        document.getElementById("calcElement").innerHTML = calc.join("");
        addition = false;
        subtraction = false;
        multiplication = false;
        division = false;
        temp = 0;
    }
}

//Math functions

// Equal Button
function equal(){
    document.getElementById("resultElement").innerHTML = res;
}
// Addition
function add(){
    if(subtraction == false && division == false && multiplication == false && calc[calc.length-1] != "+" && calc.length != 0){
        addition = true;
        calc.push("+");
        document.getElementById("resultElement").innerHTML = "+";
        document.getElementById("calcElement").innerHTML = calc.join("");
    }
}
// Subtraction
function sub(){
    if(addition == false && division == false && multiplication == false && calc[calc.length-1] != "-" && calc.length != 0){
        subtraction = true;
        calc.push("-");
        document.getElementById("resultElement").innerHTML = "-";
        document.getElementById("calcElement").innerHTML = calc.join("");
    }
}
// Multiplication
function multi(){
    if(addition == false && subtraction == false && division == false && calc[calc.length-1] != "x" && calc.length != 0){
        multiplication = true;
        calc.push("x");
        document.getElementById("resultElement").innerHTML = "x";
        document.getElementById("calcElement").innerHTML = calc.join("");
    }
}
// Division
function divi(){
    if(addition == false && subtraction == false && multiplication == false && calc[calc.length-1] != "÷" && calc.length != 0){
        division = true;
        calc.push("÷");
        document.getElementById("resultElement").innerHTML = "÷";
        document.getElementById("calcElement").innerHTML = calc.join("");
    }
}
//Percentage
function percent(){
    if(calc.length != 0 && addition == false && subtraction == false && multiplication == false && division == false){
        res /= 100;
        calc = [];
        calc.push(res);
        document.getElementById("resultElement").innerHTML = res;
        document.getElementById("calcElement").innerHTML = calc.join("");
    }
}