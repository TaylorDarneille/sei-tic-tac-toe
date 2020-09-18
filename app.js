document.addEventListener('DOMContentLoaded', () => {

  let gameOver = false; // gameOver is true if the game is over => all squares are full OR there is a winner
  let turn = 'X'; // keep track of who's turn it is
  let xWins = 0;
  let oWins = 0;
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

  // take an event and place the letter in the event's target
  const placeLetter = (e) => {
    // if the square is not occupied
    //todo,change to use board array
    if (!gameOver && e.target.innerText === "") {
      // TODO update board array
      board[e.target.id] = turn
      renderBoard(board)
      // set the other user's turn
      turn = turn === 'X' ? 'O' : 'X'
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

  // takes board (an array) and returns true if there is a winner
  const checkWin = (board) => {
    let gameWon = false;
    // look at this beast!
    //arrayofWins is an array of winArrays, this function returns true if any single winArray is satisfied
    return arrayOfWins.some(winArray => {
      let str = "";
      str = winArray.reduce((acc, elem) => {
        return acc + board[elem]
      }, "")
      if (str === "XXX" || str === "OOO"){
        // todo factor this out so checkWin is only checking for a win
        updateMessage(`${str[0]} is the winner`);
        return true;

      }
    })

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
    if (checkWin(board)) {
      gameOver = true;
    }
    // if it's not a win, check if it is a tie;
    if (!gameOver) {
      if (checkTie()) {
        gameOver = true;
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
    placeLetter(event);
    checkGameOver();
    if (!gameOver) {
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
})
