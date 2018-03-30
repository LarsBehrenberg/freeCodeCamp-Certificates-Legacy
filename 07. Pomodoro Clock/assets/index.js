var sessionLengthTotal = 25;
var sessionLengthMinutes = 0;

var breakLengthTotal = 5;
var breakLengthMinutes = 0;

var seconds = 60;

var start = 0;

var pomodoroSession, pomodoroBreak;

// Session length increase & decrease
function sessionLengthIncrease(){
    if(start == 0){
        sessionLengthTotal++;
        document.getElementById("sessionLength").innerHTML = sessionLengthTotal;
    }else{
        alert("Please stop the timer first.");
    }
}

function sessionLengthDecrease(){
    if(sessionLengthTotal == 1){
        alert("The break length cannot go below 1 minute.");
    }else if(start == 0){
    sessionLengthTotal--;
    document.getElementById("sessionLength").innerHTML = sessionLengthTotal;
    }
    else{
        alert("Please stop the timer first.");
    }
}


// Break length increase & decrease
function breakLengthIncrease(){
    if(start == 0){
    breakLengthTotal++;
    document.getElementById("breakLength").innerHTML = breakLengthTotal;
    }else{
        alert("Please stop the timer first.");
    }
}

function breakLengthDecrease(){
    if(breakLengthTotal == 1){
        alert("The session length cannot go below 1 minute.");
    }else if(start == 0){
    breakLengthTotal--;
    document.getElementById("breakLength").innerHTML = breakLengthTotal;
    }else{
        alert("Please stop the timer first.");
    }
}



//Setting timer
 
function startTimer(){
    if(start == 0){
        start = 1;
        sessionTimer();
        document.getElementById("sessionText").innerHTML = "Stop";
    }else{
        start = 0;
        clearInterval(pomodoroSession);
        clearInterval(pomodoroBreak);
        document.getElementById("sessionText").innerHTML = "Start";
        document.getElementById("currentSession").innerHTML = "";
        document.getElementById("countText").innerHTML = "0:00";
    }
}

function breakTimer(){
    breakLengthMinutes = breakLengthTotal-1;
    document.getElementById("currentSession").innerHTML = "On Break";
    pomodoroBreak = setInterval(function(){
        seconds--;
        document.getElementById("countText").innerHTML = breakLengthMinutes + ":" + seconds;

        if(seconds <= 0){
            breakLengthMinutes--;
            seconds = 60;
        }
        if(breakLengthMinutes < 0){
            clearInterval(pomodoroBreak);
            sessionTimer();
        }
        console.log(breakLengthMinutes);
    }, 1000);
}


function sessionTimer(){
    sessionLengthMinutes = sessionLengthTotal-1;
    document.getElementById("currentSession").innerHTML = "On Session";
    pomodoroSession = setInterval(function(){
        seconds--;
        document.getElementById("countText").innerHTML = sessionLengthMinutes + ":" + seconds;
        if(seconds <= 0){
            sessionLengthMinutes--;
            seconds = 60;
        }
        if(sessionLengthMinutes < 0){
            clearInterval(pomodoroSession);
            breakTimer();
        }
        
        console.log(sessionLengthMinutes);
    }, 1000);
}