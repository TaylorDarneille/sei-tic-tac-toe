var grid = 3,
boxes = [],
player1 = "x",
computer = "o",

// Initializes the Tic Tac toe Board and starts the game
function init() {
    var board = document.createElement('table');
    board.setAttribute("border", 1);
    board.setAttribute("cellspacing", 0);
const identifier =1;
for (let i = 0; i < grid; i++) {
    var row = document.createElement
}
}
//player's turn function
const playerTurn = (event) => {
    //check the game status at the start of the turn
    checkStatus()
    const clickedBox = event.target
    const boxNumber = clickedBox.id
    if (gameSlots[boxNumber] === ''){
        gameSlots[boxNumber] = 'X'
        clickedBox.innerText = gameSlots[boxNumber]
        status.innerText = ('Great Move!')
        //checkthe status after the turn
        setTimeout(checkStatus, 1000)
    } else if(gameSlots[boxNumber] === 'X'){
        //if the box already has an x, restart the playerTurn function
        playerTurn()
    }
    setTimeout(computerTurn, 1000)
}

//computer's turn
const computerTurn = () => {
    checkStatus()
    //generate a random number between 0 and 8
    let computerSlot = Math.floor(Math.random()*9)
    //get the id of the box that matches the random number
    let boxNumber = document.getElementById(computerSlot)
    //if there is already an x or o in the box, restart the computer turn
    if (boxNumber.innerText === 'X' || boxNumber.innerText === 'O'){
        computerTurn()
    } else if(boxNumber.innerText === ''){
        boxNumber.innerText = 'O'
        gameSlots[computerSlot] = boxNumber.innerText
        setTimeout(checkStatus, 500)
    }
}
const winningOptions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

// check game over => true if win or tie
const checkGameOver = () => {
    // check first if there is a win
    if (checkWin(turn, board)) {
      gameOver = true;
      scoreboard[turn]++;
      updateMessage(`${turn} There's a WINNER in the house`);
      updateScoreboard(turn);
    }
    // if it's not a win, check if it is a tie;
    if (!gameOver) {
      if (checkTie()) {
        gameOver = true;
        updateMessage("Don't be a sore loser! Play again.");
      }
    }
  };

  // check if board is full
  const checkTie = () => {
    let tie = true;
    // if there are still empty places on the board
    if (getEmptyPlaces(board).length > 0) {
      tie = false;
    }
    if (tie) {
      updateMessage("Tie!");
    }
    return tie;
  };

  // add event listener to the game mode options
  singlePlayerButton.addEventListener("click", (e) => {
    changeMode(e.target.value);
  });

  // add event listener to resetButton
  resetButton.addEventListener("click", resetGame);
  // select all the squares and add event listener to each one
  squares.forEach((square) => {
    // when that square is clicked, place letter x or y
    square.addEventListener("click", (e) => {
      if (!gameOver) {
        handleInput(e.target.id);
      }
      // after player 1's turn, make a computer turn if it is not Gameover and if game mode is singleplayer;
      if (!gameOver && singlePlayerMode) {
        setTimeout(computerTurn, 200);
      }
    });
  });
