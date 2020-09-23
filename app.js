//DOM Manipulations
// function createId(event) {
//     for (let i = 0; i < 9; i++) {
//         const square = document.querySelectorAll('[data-cell]')
//         //square.classList.add('square')
//         square.setAttribute('id', i)
        
//     }
// }

//HTML Elements
const whoTurn = document.querySelector('.turn');
const resetButton = document.querySelector('.reset');
const gameDivs = document.querySelectorAll('[data-cell]')//used data-cell to pull them for js
const XLETTER = 'X'
const OLETTER = 'O'
let oTurn

const playerWins = [ //ways to win the game
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    
];

//game variables
let xTurn = true;
let gameIsOn = true;



//Functions
function handleClicks(event) {
    
    let square = event.target //click on certain divs
    console.log(square.classList[1]) //grasp individual div

    //const currentClass = oTurn ? OLETTER : XLETTER //if O turn get Oletter if not get Xletter
    //placeLetter(square, currentClass)
    //check for win 
    //check for draw
    //switch turns
}

function placeLetter(square, currentClass) {
    square.classList.add('x')
}

function clickedReset(event) {
    startGame()
}

function startGame() {
    reload = location.reload()
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

resetButton.addEventListener('click', clickedReset)



///////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < gameDivs.length; i++) {
        let square = gameDivs[i];
        square.addEventListener("click", handleClicks, { once:true});
    }
});




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