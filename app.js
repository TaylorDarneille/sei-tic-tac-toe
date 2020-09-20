document.addEventListener("DOMContentLoaded", () => {
  let gameOver = false; // gameOver is true if the game is over => all squares are full OR there is a winner
  let turn = "X"; // keep track of who's turn it is
  // keep track of number of wins for each player
  const scoreboard = {
    X: 0,
    O: 0,
  };
  const board = new Array(9).fill(""); //an array which represents the board state
  const arrayOfWins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let singlePlayerMode = true;

  // DOM selectors
  const message = document.querySelector(".message");
  const resetButton = document.querySelector("#reset");
  const squares = document.querySelectorAll(".square");
  const scoreDOM = {
    X: document.querySelector("#xwins"),
    O: document.querySelector("#owins"),
  };
  const singlePlayerButton = document.querySelector('input[value=single]')
  const multiPlayerButton = document.querySelector('input[value=multi]')



  // changes the game mode from singleplayer to multiplayer, resets the game if needed.
  const changeMode = (mode) =>{
    if(getEmptyPlaces(board).length !== 9){
      resetGame()
    }
    singlePlayerMode = (mode==='single')?true:false
  }

  // returns an array of indexes where the board is empty?
  const getEmptyPlaces = (board) => {
    const emptyPlaces = [];
    board.map((val, idx) => {
      if (val === "") {
        emptyPlaces.push(idx);
      }
    });
    return emptyPlaces; // example [0,6,7,8]
  };


  // takes an array and returns a random entry from that array
  const getRandomEntry = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };


  // take an index and place the letter in the board
  const placeLetter = (index) => {
    // if the square is not occupied
    board[index] = turn;
    renderBoard(board);
  };


  //  a function that takes the board array and updates the DOM
  const renderBoard = (board) => {
    squares.forEach((square, index) => {
      // update the text to say X or O
      square.innerText = board[index];
      if (board[index]) {
        // if X or O, assign the class
        square.classList.add(board[index]);
      } else {
        // if an empty square, it just has class 'square'
        square.setAttribute("class", "square");
      }
    });
  };


  // update the message
  const updateMessage = (text) => {
    message.innerText = text;
  };


  // takes a player and board (an array) and returns true if that player has won
  const checkWin = (player, board) => {
    let gameWon = false;
    //arrayofWins is an array of winArrays, this function returns true if any single winArray is satisfied
    gameWon = arrayOfWins.some((winArray) => {
      // returns true if every winning place on the board is occupied by the player i.e. board[0,1,2]==player or board[1,4,7]=player
      return winArray.every((place) => {
        return board[place] === player;
      });
    });
    return gameWon;
  };


  // Update the scoreboard, called only on games that are won
  const updateScoreboard = (winner) => {
    scoreDOM[winner].innerText = scoreboard[winner];
  };


  // check if board is full
  const checkTie = () => {
    let tie = true;
    // if there are still empty places on the board
    if (getEmptyPlaces(board).length > 0) {
      tie = false;
    }
    if (tie) {
      updateMessage("It is a tie");
    }
    return tie;
  };


  // check game over => true if tie or win
  const checkGameOver = () => {
    // check first if there is a win
    if (checkWin(turn, board)) {
      gameOver = true;
      scoreboard[turn]++;
      updateMessage(`${turn} is the winner. Press Reset to play again`);
      updateScoreboard(turn);
    }
    // if it's not a win, check if it is a tie;
    if (!gameOver) {
      if (checkTie()) {
        gameOver = true;
        updateMessage("A tie! Press Reset to play again");
      }
    }
  };


  // reset the game by clearing the inner text from all squares
  const resetGame = () => {
    board.forEach((elem, index) => {
      board[index] = "";
    });
    // render the now empty board
    renderBoard(board);
    gameOver = false;
    turn = "X";
    updateMessage(`It's ${turn}'s turn`);
  };


  // handle the user input todo make this take event.target.id
  const handleInput = (index) => {
    // if the board is empty there
    if (board[index] === "") {
      placeLetter(index);
      checkGameOver();
      // if game is not over, update the turn and message
      if (!gameOver) {
        turn = turn === "X" ? "O" : "X";
        updateMessage(`It is ${turn}'s turn`);
      }
    }
  };

  // the computer's turn to place a letter in a random empty square
  const computerTurn = () => {
    //get a first empty square
    const computerMove = getRandomEntry(getEmptyPlaces(board));
    // handleInput on that square
    handleInput(computerMove);
  };


  // add event listener to the game mode options
  singlePlayerButton.addEventListener('click',(e)=>{
    changeMode(e.target.value)
  })
  multiPlayerButton.addEventListener('click',(e)=>{
    changeMode(e.target.value)
  })

  // add event listener to resetButton
  resetButton.addEventListener("click", resetGame);


  // select all the squares and add event listener to each one
  squares.forEach((square) => {
    // when that square is clicked, place letter
    square.addEventListener("click", (e) => {
      if (!gameOver) {
        handleInput(e.target.id);
        // after the user's turn, make a computer turn if it is not Gameover
      }
      if (!gameOver && singlePlayerMode) {
        setTimeout(computerTurn, 200);
      }
    });
  });
});
