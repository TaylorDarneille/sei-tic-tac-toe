// player 1 turn when clicked either player 1 or player 2 turn turn X or O
var turn = 1;

function playerAction(elem) {
  if (elem.innerText != "") return; // if nothing is should not do anything if blank go to first line

  if (turn == 1) {
    elem.innerText = "X";
    document.getElementById("messagesection").innerText = "Player 2 Turn";
    turn = 2;
  } else if (turn == 2) {
    elem.innerText = "O";
    document.getElementById("messagesection").innerText = "Player 1 Turn";
    turn = 1;
  }
}
//if want to use this need to give divs id 
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (let i = 0; i < winningConditions; i++) {
  console.log(winningConditions);
}

document.addEventListener("DOMContentLoader", () => {});


//give id to divs targe section  1, 2, 3, see does this div text of x if so x= div one 
//if div and 1, 2 = x if so alert 

