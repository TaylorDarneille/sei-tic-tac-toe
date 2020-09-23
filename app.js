//DOM Manipulations
// function createId(event) {
//     for (let i = 0; i < 9; i++) {
//         const square = document.querySelectorAll('[data-cell]')
//         //square.classList.add('square')
//         square.setAttribute('id', i)
        
//     }
// }

//HTML Elements
const X_LETTER = 'x'
const O_LETTER = 'o'
let whoTurn = document.querySelector('.turn');
const resetButton = document.querySelector('.reset');
const gameDivs = document.querySelectorAll('[data-cell]')//used data-cell to pull them for js
let oTurn
const playerWins = [ //ways to win the game
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];






//Functions
function handleClicks(event) {
    whoTurn.innerText= "X Turn"
    let square = event.target //click on certain divs
    const currentClass = oTurn ? O_LETTER : X_LETTER
    placeLetter(square, currentClass)
    if (winnerWinner(currentClass)) {
        endGame(false)
    } else if (isDraw()) {
        endGame(true)
    } else {
        switchTurns()
    }
    //}
    // console.log(mySquare.classList[1]) //grasp individual div
    // if (xTurn = 1) {
    //     mySquare.innerText = "X";
    //     whoTurn.innerText = 'O Turn';
    //     xTurn--;
    //     //handleClicks()
    // } else if(xTurn = 0) {
    //     mySquare.innerText = "O";
    //     whoTurn.innerText = 'X Turn';
    //     xTurn++;
    // }


        //const currentClass = oTurn ? OLETTER : XLETTER //if O turn get Oletter if not get Xletter
        //placeLetter(square, currentClass)
        //check for win 
        //check for draw
        //switch turns
}

function isDraw() {
    return [...gameDivs].every((square) => {
    return ( square.classList.contains(X_LETTER) || square.classList.contains(O_LETTER));
    });
}

function placeLetter(square, currentClass) {
    square.classList.add(currentClass)
}

function switchTurns() {
    oTurn = !oTurn
    whoTurn.innerText = 'O Turn'
}

function clickedReset(event) {
    startGame()
}

function startGame() {
    reload = location.reload()
}

function winnerWinner(currentClass) {
  return playerWins.some((combination) => {
    return combination.every((index) => {
      return gameDivs[index].classList.contains(currentClass);
    });
  });
}

function endGame(draw) {
    if (draw) {
    alert("its a draw")
    } else {
    alert(`${oTurn ? "O's" : "X's"} Wins!`);
    }
clickedReset()
}
//event Listeners
// document.addEventListener("DOMContentLoaded", () => {
//     createId() //creates id for my square divs
// })
// gameDivs.forEach(square => {
//     square.addEventListener('click', handleClicks, { once: true })
// })

// gameDivs.forEach(square => {
//     square.removeEventListener('click', handleClicks)
// })




//////EventListeners
document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < gameDivs.length; i++) {
        let square = gameDivs[i];
        square.addEventListener("click", handleClicks, { once: true });
    }
});

resetButton.addEventListener('click', clickedReset)



//place an x or an o
//check for win
//check for draw
//end game
//


// resetButton.addEventListener('click', () => {
    
// })




















            // const gameBoard = () => {
            //     let div = document.createElement('div')
            //     div.className = "board"
            //     div.setAttribute('class', 'container')
                
            //     // //div.addEventListener('click', changeDiv)
            //     // document.body.appendChild(div) //make div a baby of container
                
            // }