document.addEventListener('DOMContentLoaded', () => {

  let gameOver = false; // gameOver is true if the game is over => all squares are full OR there is a winner
  let turn = 'X'; // keep track of who's turn it is
  // keep track of number of wins for each
  const scoreboard = {
    "X": 0,
    "O": 0
  }
  const board = new Array(9).fill("") //an array which represents the board state
  const arrayOfWins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  // DOM selectors
  const message = document.querySelector('.message');
  const button = document.querySelector('button');
  const squares = document.querySelectorAll('.square');
  const scoreDOM = {
    'X': document.querySelector('#xwins'),
    'O': document.querySelector('#owins')
  }

  // returns an array of indexes where the board is empty?
  const getEmptyPlaces = (board) =>{
    const emptyPlaces = [];
    board.map((val,idx)=>{
      if(val===""){
        emptyPlaces.push(idx)
      }
    })
    return emptyPlaces
  }

  // take an index and place the letter in the board
  const placeLetter = (index) => {
    // if the square is not occupied
    board[index] = turn
    renderBoard(board)
    getEmptyPlaces(board)
  }

  //  a function that takes the board array and updates the DOM
  const renderBoard = (board) => {
    squares.forEach((square, index) => {
      square.innerText = board[index];
      if (board[index]) {
        square.classList.add(board[index])
      } else {
        square.setAttribute('class', 'square')
      }
    })
  }

  // update the message to say who's turn it is
  const updateMessage = (text) => {
    message.innerText = text
  }

  // takes a player and board (an array) and returns true if that player has won
  const checkWin = (player, board) => {
    let gameWon = false;
    //arrayofWins is an array of winArrays, this function returns true if any single winArray is satisfied
    gameWon = arrayOfWins.some(winArray => {
      // returns true if every winning place on the board is occupied by the player i.e. board[0,1,2]==player or board[1,4,7]=player
      return winArray.every(place => {
        return board[place] === player
      })
    })
    return gameWon
  }


  const updateScoreboard = (winner) => {
    scoreDOM[winner].innerText = scoreboard[winner];
  }


  // check if board is full
  const checkTie = () => {
    let tie = true;
    // if there are still empty places on the board
    if (getEmptyPlaces(board).length>0){
      tie = false;
    }
    if (tie) {
      updateMessage('It is a tie')
    }
    return tie;
  }


  // check game over => true if tie or win
  const checkGameOver = () => {
    // check first if there is a win
    if (checkWin(turn, board)) {
      gameOver = true;
      scoreboard[turn]++
      updateMessage(`${turn} is the winner. Press Reset to play again`)
      updateScoreboard(turn);
    }
    // if it's not a win, check if it is a tie;
    if (!gameOver) {
      if (checkTie()) {
        gameOver = true;
        updateMessage('A tie! Press Reset to play again')
      }
    }
  }

  // reset the game by clearing the inner text from all squares
  const resetGame = () => {
    board.forEach((elem, index) => {
      board[index] = ""
    })
    renderBoard(board)
    gameOver = false;
    turn = 'X';
    updateMessage(`It's ${turn}'s turn`)
  }

  // handle the user input
  const handleInput = (event) => {
    // get the number of the board square that was clicked
    let index = event.target.id
    // if the board is empty there
    if (board[index] === "") {
      placeLetter(index);
      checkGameOver();
      // if game is not over, update the turn and message
      if (!gameOver) {
        turn = turn === 'X' ? 'O' : 'X'
        updateMessage(`It is ${turn}'s turn`);
      }
    }

  };


  // add event listener to button
  button.addEventListener('click', resetGame)
  // select all the squares and add event listener to each one
  squares.forEach((square) => {
    // when that square is clicked, place letter
    square.addEventListener('click', (e) => {
      if (!gameOver) {
        handleInput(e)
      }
    })
  })
});

/// testing out a new win logic
// const checkWinner = (player, board) => {
//   const arrayOfWins = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];
//   // look at this beast!
//   //arrayofWins is an array of winArrays, this function returns true if any single winArray is satisfied
//   return arrayOfWins.some(winArray => {
//     return winArray.every(place => {
//       // debugger;
//       return board[place] === player
//     })
//   })
// }
//
// board = ["O", "O", "O",
//   "O", "X", "",
//   "", "", "X"
// ];
// console.log(checkWinner("O", board))
