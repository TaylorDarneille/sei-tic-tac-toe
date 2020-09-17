document.addEventListener('DOMContentLoaded', () => {

  let gameOver = false; // gameOver is true if the game is over => all squares are full OR there is a winner
  let turn = 'X'; // keep track of who's turn it is

  // DOM selectors
  const message = document.querySelector('.message');
  const button = document.querySelector('button');
  const squares = document.querySelectorAll('.square');
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];


  // take an event and place the letter in the event's target
  const placeLetter = (e) => {
    // if the square is not occupied
    if (!gameOver && e.target.innerText === "") {
      e.target.innerText = turn;
      e.target.classList.add(turn)
      // set the other user's turn
      turn = turn === 'X' ? 'O' : 'X'
    }
  }


  // update the message to say who's turn it is
  const updateMessage = (text) => {
    message.innerText = text
  }

  // how to check if winner?
  const checkWin = () => {
    let gameWon = false;
    for (winArray of wins){
      if(checkOneWin(winArray)){
        gameWon = true;
      }
    }
    return gameWon;
  }

  // check one single winArray like [0,1,2]
  const checkOneWin = (winArray) =>{
    const one = document.getElementById(winArray[0]).innerText
    const two = document.getElementById(winArray[1]).innerText
    const three = document.getElementById(winArray[2]).innerText
    if(one===two && two===three && one!==""){
      updateMessage(`${one} is the winner`);
      return true
    }
    return false
  }

  // check if board is full
  const checkTie = () => {
    let tie = true;
    // loop through each square
    squares.forEach(square=>{
      // if you find a square that is empty, you know it cannot be a tie
      if(square.innerText == ""){
        tie = false;
      }
    })
    // if it is a tie. update the message to say so
    if(tie){
        updateMessage('It is a tie')
      }
    return tie;
  }


  // check game over => true if tie or win
  const checkGameOver = () => {
    // check first if there is a win
    if(checkWin()){
      gameOver = true;
    }
    // if it's not a win, check if it is a tie;
    if(!gameOver){
      if(checkTie()){
        gameOver = true;
      }
    }
  }

  // reset the game by clearing the inner text from all squares
  const resetGame = () => {
    squares.forEach(square => {
      square.innerText = ""
      square.setAttribute('class', 'square')
    });
    gameOver = false;
    turn = 'X';
    updateMessage(`It's ${turn}'s turn`)
  }



  // add event listener to button
  button.addEventListener('click', resetGame)

  // select all the squares and add event listener to each one
  squares.forEach((square) => {
    // when that square is clicked, place letter
    square.addEventListener('click', (e) => {
      placeLetter(e);
      checkGameOver();
      if(!gameOver){
        updateMessage(`It is ${turn}'s turn`);
      }
    });
  })
})
