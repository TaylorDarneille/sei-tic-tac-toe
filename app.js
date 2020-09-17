var board = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
const determineTurn = (currentBoard) => {
    let xCount = 1;
    let oCount = 1;
    for(sublist of currentBoard){
        for(placement of sublist){
            if (placement === 1){
                xCount++;
            }else if(placement === -1){
                oCount++;
            }
        }
    }
    let turnDis = document.querySelector("#turn");
    if(!(xCount >= oCount)){
        turnDis.setAttribute("class","Xplayer")
        return true;
    }else{
        turnDis.setAttribute("class","Oplayer")
        return false;
    }
}

const checkIfWon = (currentBoard) => {
    for(var i = 0; i < currentBoard.length; i++){
        if(currentBoard[i][0] !== 0){
            if(currentBoard[i][0] === currentBoard[i][1] && currentBoard[i][1] === currentBoard[i][2]){
                if(currentBoard[i][0] === 1){
                    return 1;
                }else{
                    return -1;
                }
            }
        }
    }
    for(var i = 0; i < currentBoard.length; i++){
        if(currentBoard[0][i] !== 0){
            if(currentBoard[0][i] === currentBoard[1][i] && currentBoard[1][i] === currentBoard[2][i]){
                if(currentBoard[0][i]=== 1){
                    return 1;
                }else{
                    return -1;
                }
            }
        }
    }
    if(currentBoard[0][0] === currentBoard[1][1] && currentBoard[1][1] === currentBoard[2][2]){
        if (currentBoard[0][0] !== 0){
            if(currentBoard[0][0] === 1){
                return 1;
            }else{
                return -1;
            }
        }
    }else if(currentBoard[2][0] === currentBoard[1][1] && currentBoard[1][1] === currentBoard[0][2]){
        if (currentBoard[2][0] !== 0){
            if(currentBoard[2][0] === 1){
                return 1;
            }else{
                return -1;
            }
        }
    }else{
        if(!(currentBoard[0].includes(0) || currentBoard[1].includes(0) || currentBoard[2].includes(0))){
            alert("TIE GAME")
        }
        return 0;
    }
    
}


const playerMove = (event, currentBoard) =>{
    var isPlayerXturn = determineTurn(currentBoard);
    console.log(currentBoard);
    // get obj and set it to correct thing
    var targetPosition = event.target.id;
    targetPosition = parseInt(targetPosition);
    let index1 = Math.floor(targetPosition/3);
    let index2 = targetPosition%3;
    console.log(checkIfWon(currentBoard))
    if((!(event.target.classList.contains("Oplayer")  || event.target.classList.contains("Xplayer"))) && (checkIfWon(currentBoard) === 0) || checkIfWon(currentBoard) === undefined){
        if (isPlayerXturn){
            event.target.className += " Oplayer";
            board[index1][index2] = 1;
        }else{
            event.target.className += " Xplayer";
            board[index1][index2] = -1;
        }
    }
    let winner = checkIfWon(currentBoard);
    
    if (winner === 1){
        // figure out what to do
        alert("O's win");
    }else if (winner === -1){
        // figure out what to do
        alert("X's win");
    }
}

const reset = () => {
    board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]
    let placements = document.querySelectorAll(".placement");
    for(placement of placements){
        placement.setAttribute("class","placement");
    }
    let turnDis = document.querySelector("#turn");
    turnDis.setAttribute("class","Xplayer")
}



const main = () => {
    let placements = document.querySelectorAll(".placement");
    for(placement of placements){
        placement.addEventListener("click", (event) => {
            playerMove(event,board)
        })
    }
    var button = document.querySelector("#reset");
    button.addEventListener("click",reset)
}

main();