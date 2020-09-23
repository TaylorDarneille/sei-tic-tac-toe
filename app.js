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
    let square = event.target //click on certain divs
    const currentClass = oTurn ? O_LETTER : X_LETTER //if its not o's turn grab o if not grab x
    placeLetter(square, currentClass) //places the letter in div
    if (winnerWinner(currentClass)) {
        endGame(false)
    } else if (isDraw()) {
        endGame(true)
    } else {
        togglePlayers()
        switchTurns()
    }
}

function isDraw() {
    return [...gameDivs].every((square) => {
        return ( square.classList.contains(X_LETTER) || square.classList.contains(O_LETTER));
    }); //every square is feeled with eiher x or o
}

function placeLetter(square, currentClass) { //function that places the letter
    square.classList.add(currentClass)
}

function switchTurns() { //switch turn back and forth
    oTurn = !oTurn
}

function clickedReset(event) { // clicks reset button
    startGame()
}

function startGame() { // actually resets game when button is pushed
    reload = location.reload()
}

function winnerWinner(currentClass) { //goes thru array
    return playerWins.some((combination) => { //grabs one of the combination
        return combination.every((index) => { // of each combination of arrays
            return gameDivs[index].classList.contains(currentClass); //to return 1 array that contains either an x or an o
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

function togglePlayers() { // toggles the .turn to let user know whoes turn it is.
    var player = document.getElementById("turn");
    if (player.innerHTML === "X Turn") {
        player.innerHTML = "O Turn";
    } else {
        player.innerHTML = "X Turn";
    }
}




//////EventListeners
document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < gameDivs.length; i++) {
        let square = gameDivs[i];
        square.addEventListener("click", handleClicks, { once: true });
    }
});

resetButton.addEventListener('click', clickedReset)



////////////////////Trash//////////////////////////////////////////
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

//DOM Manipulations
// function createId(event) {
    //     for (let i = 0; i < 9; i++) {
        //         const square = document.querySelectorAll('[data-cell]')
        //         //square.classList.add('square')
                    //         square.setAttribute('id', i)
                    
                    //     }
                    // }
                    
                    
                    //place an x or an o
                    //check for win
                    //check for draw
                    //end game
//


// resetButton.addEventListener('click', () => {
    
    // })
    
    
    
    
    
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
    
    
    
    
    
    









            // const gameBoard = () => {
            //     let div = document.createElement('div')
            //     div.className = "board"
            //     div.setAttribute('class', 'container')
                
            //     // //div.addEventListener('click', changeDiv)
            //     // document.body.appendChild(div) //make div a baby of container
                
            // }