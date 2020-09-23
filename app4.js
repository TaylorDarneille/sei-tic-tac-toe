//VARIABLES
alert("Welcome to my Tic Tac Toe")

const statusDisplay = document.querySelector('.game--status');

let gameActive = true;

let currentPlayer = "X";

let gameState = ["", "", "", "", "", "", "", "", ""];

const body = document.querySelector("body")


//time out to change background coor after 5 secs and then back to white in 9 secs.
setTimeout(()=>{
    body.style.backgroundColor = 'black'
}, 5000)
setTimeout(()=>{
    body.style.backgroundColor = 'white'
},9000)


//time out to change title info after 5 secs and 9 secs 
let gameContainer = document.querySelector(".game--title")

setTimeout(()=>{
    gameContainer.innerText = "Welcome to the Halloween Edition!!!  muahahahahah"
}, 5000)
setTimeout(()=>{
    gameContainer.innerText = "jk back to normal!!"
},9000)


//time out to change title info after 5 secs and 9 secs 

setTimeout(function() {
    gameContainer.innerText = "Welcome to Tic Tac Toe!!"
}, 10000);


setTimeout(()=>{
    gameContainer.style.color = "red"
}, 5000)
setTimeout(()=>{
    gameContainer.style.color = "salmon"
},9000)


//backgroud img 

var timeout = setTimeout(function() {
    document.getElementById('image').style.display = 'block';
}, 5000);

var timeout = setTimeout(function() {
    document.getElementById('image').style.display = 'none';
}, 9000);




const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;


statusDisplay.innerHTML = currentPlayerTurn();
function handleCellPlayed() {

}
function handlePlayerChange() {

}
function handleResultValidation() {

}
function handleCellClick() {

}
function handleRestartGame() {

}


document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);


function handleCellClick(clickedCellEvent) {
        const clickedCell = clickedCellEvent.target;
        const clickedCellIndex = parseInt(
          clickedCell.getAttribute('data-cell-index')
        );

        if (gameState[clickedCellIndex] !== "" || !gameActive) {
            return;
        }  
        handleCellPlayed(clickedCell, clickedCellIndex);
        handleResultValidation();
    }


    function handleCellPlayed(clickedCell, clickedCellIndex) {
            gameState[clickedCellIndex] = currentPlayer;
            clickedCell.innerHTML = currentPlayer;
        }



        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        function handleResultValidation() {
            let roundWon = false;
            for (let i = 0; i <= 7; i++) {
                const winCondition = winningConditions[i];
                let a = gameState[winCondition[0]];
                let b = gameState[winCondition[1]];
                let c = gameState[winCondition[2]];
                if (a === '' || b === '' || c === '') {
                    continue;
                }
                if (a === b && b === c) {
                    roundWon = true;
                    break
                }
            }
        if (roundWon) {
                statusDisplay.innerHTML = winningMessage();
                gameActive = false;
                return;
            }
        let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }
    handlePlayerChange();
}


function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell')
               .forEach(cell => cell.innerHTML = "");
}

