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
    'X' : document.querySelector('#xwins'),
    'O' : document.querySelector('#owins')
  }


  // take an event and place the letter in the event's target
  const placeLetter = (e) => {
    // if the square is not occupied
    //todo,change to use board array
    if (!gameOver && e.target.innerText === "") {
      board[e.target.id] = turn
      renderBoard(board)

    }
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


const updateScoreboard = (winner) =>{
  scoreDOM[winner].innerText = scoreboard[winner];
}


  // check if board is full
  // TODO refactor this to take a gameboard array
  const checkTie = () => {
    let tie = true;
    // loop through each square
    board.forEach(piece => {
      // if you find a square that is empty, you know it cannot be a tie
      if (piece == "") {
        tie = false;
      }
    })
    // if it is a tie. update the message to say so
    if (tie) {
      updateMessage('It is a tie')
    }
    return tie;
  }


  // check game over => true if tie or win
  const checkGameOver = () => {
    // check first if there is a win
    if (checkWin(turn,board)) {
      gameOver = true;
      scoreboard[turn]++
      updateMessage(`${turn} is the winner`)
      updateScoreboard(turn);
    }
    // if it's not a win, check if it is a tie;
    if (!gameOver) {
      if (checkTie()) {
        gameOver = true;
        updateMessage('tie')
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
    // TODO pass event target instead of entire event
    if(!gameOver){
      placeLetter(event);
      checkGameOver();
    }
    if (!gameOver) {
      turn = turn === 'X' ? 'O' : 'X'
      updateMessage(`It is ${turn}'s turn`);
    }
  };


  // add event listener to button
  button.addEventListener('click', resetGame)

  // select all the squares and add event listener to each one
  squares.forEach((square) => {
    // when that square is clicked, place letter
    square.addEventListener('click', (e) => {
      handleInput(e)
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
