var aiPlayer, humanPlayer;

var originalBoard = [0,1,2,3,4,5,6,7,8];

//Selecting "X" or "O" as Player
function oButtonClick(){
    humanPlayer = "o";
    aiPlayer = "x";
    console.log(humanPlayer);
    document.getElementById("oButton").style.border = "1px solid white";
    document.getElementById("xButton").style.border = "none";
}

function xButtonClick(){
    humanPlayer = "x";
    aiPlayer = "o";
    console.log(humanPlayer);
    document.getElementById("oButton").style.border = "none";
    document.getElementById("xButton").style.border = "1px solid white";
}



// Win the board function
function winningBoard (board, player){  
    if (
        board[0] == player && board[1] == player && board[2] == player ||
        board[3] == player && board[4] == player && board[5] == player ||
        board[6] == player && board[7] == player && board[8] == player ||
        board[0] == player && board[3] == player && board[6] == player ||
        board[1] == player && board[4] == player && board[7] == player ||
        board[2] == player && board[5] == player && board[8] == player ||
        board[0] == player && board[4] == player && board[8] == player ||
        board[2] == player && board[4] == player && board[6] == player
    ){
        return true;
    }else{
        return false;
    }
}

function emptySpots(board){
    return board.filter(function(data){
        if(data != "o" && data != "x"){
            return data;
        }
    })
}

function minimax(newBoard, player){

    // 
    var availableSpots = new emptySpots(newBoard);


    // Adding up scores of winning and loosing
    if(winningBoard(newBoard, humanPlayer)){
        return {score:-0}
    }else if(winningBoard(newBoard, aiPlayer)){
        return {score: 10}
    }else if(availableSpots.length === 0){
        return {score: 0}
    }

    // moves - Array
    var moves = [];

    // loop through the empty spots of the board
    for (var x = 0; x < availableSpots.length; x++){
        var move = {};
        move.index = newBoard[availableSpots[x]];

        //set empty spot to current player
        newBoard[availableSpots[x]] = player;

        
        // collect result from minimax function
        if(player == aiPlayer){
            var result = minimax(newBoard, humanPlayer);
            move.score = result.score;
        }else{
            var result = minimax(newBoard, aiPlayer);
            move.score = result.score;
        }

        //reset spot to empty for next move
        newBoard[availableSpots[x]] = move.index;

        //pushing move to moves array
        moves.push(move);
    }

    // Find and store best move
    var bestMove;

    if(player == aiPlayer){
        var bestScore = -10000;

        for(var x = 0; x < moves.length; x++){
            if(moves[x].score > bestScore){
                bestScore = moves[x].score;
                bestMove = x;
            }
        }
    }else{
        var bestScore = 10000;

        for(var x = 0; x < moves.length; x++){
            if(moves[x].score < bestScore){
                bestScore = moves[x].score;
                bestMove = x;
            }
        }
    }

    return moves[bestMove];
    console.log(moves);
    console.log(result);
}