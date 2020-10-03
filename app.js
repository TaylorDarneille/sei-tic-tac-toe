let turn = prompt('select your shape', 'triangle/circle');  

const checkWinner = () => {
  let squares = document.querySelectorAll('.square');
  for (let i = 0; i < squares.length; i+=3) {
    if (squares[i].classList.contains(turn) && 
        squares[i+1].classList.contains(turn) &&
        squares[i+2].classList.contains(turn)) {
          alert(turn + ' wins')
        }
  }
  for (let i = 0; i < 3; i++) {
    if (squares[i].classList.contains(turn) &&
        squares[i+3].classList.contains(turn) &&
        squares[i+6].classList.contains(turn)) {
          alert(turn + ' wins') 
        }
  }
    if (squares[0].classList.contains(turn) &&
        squares[4].classList.contains(turn) &&
        squares[8].classList.contains(turn)) {
          alert(turn + ' wins')
        }
    if (squares[2].classList.contains(turn) &&
        squares[4].classList.contains(turn) &&
        squares[6].classList.contains(turn)) {
          alert(turn + ' wins')
        }
}

const switchPlayer = () => {
    if (turn === 'triangle') {
      let changeTurn = document.querySelector('#turn');
      changeTurn.innerHTML = 'circle';
      turn = 'circle';
    } else if (turn === 'circle') {
      let changeTurn = document.querySelector('#turn');
      changeTurn.innerHTML = 'triangle';
      turn = 'triangle';
    }
  };
    
const placeShape = (e) => {
  if (turn === 'triangle') {
    e.target.classList.add('triangle');
  } else {
    e.target.classList.add('circle');
  }
  checkWinner();
  switchPlayer();
};  
  
const mainFunction = () => {
let squares = document.querySelectorAll('.square');
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', placeShape)
}
};

const clearBoard = () => {
let squares = document.querySelectorAll('.square');
for (let i = 0; i < squares.length; i++) {
  squares[i].classList.remove('triangle');
  squares[i].classList.remove('circle');
}
}; 


    
