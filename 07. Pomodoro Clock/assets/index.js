var sessionLength = 25;
var breakLength = 5;


// Session length increase & decrease
function sessionLengthIncrease(){
    sessionLength++;
    document.getElementById("sessionLength").innerHTML = sessionLength;
}

function sessionLengthDecrease(){
    sessionLength--;
    document.getElementById("sessionLength").innerHTML = sessionLength;
}


// Break length increase & decrease
function breakLengthIncrease(){
    breakLength++;
    document.getElementById("breakLength").innerHTML = breakLength;
}

function breakLengthDecrease(){
    breakLength--;
    document.getElementById("breakLength").innerHTML = breakLength;
}



//Setting timer
var x = setInterval(function(){
    sessionLength--;
    document.getElementById("countText").innerHTML = sessionLength;
    console.log(sessionLength);
    if(sessionLength < 0){
        document.getElementById("countText").innerHTML = "Finished";
    }
}, 1000);