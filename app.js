//DOM Manipulations
// const createGrid = () => {
//     for (let i = 0; i < 9; i++) {
//         let square = document.createElement('div')
//         square.classList.add('square')
//         square.setAttribute('id', 'box')
//         document.querySelector('.board').appendChild(square)
//     }
// }
//HTML Elements
const whoTurn = document.querySelector('.turn');
const resetButton = document.querySelector('.reset');
const gameDivs = document.querySelectorAll('[data-cell]')//used data-cell to pull them for js

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
    function handleClick(event) {
        console.log('clicked')
    }

function clickedReset(event) {
    console.log('clicked reset')
}



//event Listeners
// document.addEventListener("DOMContentLoaded", () => {
//     createGrid() //creates my divs for my board
// })

gameDivs.forEach(square => {
    square.addEventListener('click', handleClick, {once: true})
})


resetButton.addEventListener('click', clickedReset)
// gameDivs.forEach(square)


// resetButton.addEventListener('click', () => {
    
// })




















            // const gameBoard = () => {
            //     let div = document.createElement('div')
            //     div.className = "board"
            //     div.setAttribute('class', 'container')
                
            //     // //div.addEventListener('click', changeDiv)
            //     // document.body.appendChild(div) //make div a baby of container
                
            // }