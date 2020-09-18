//GLOBAL VARIABLES
//boolean to keep track of which player goes first
let playerFirst = false
//counter to keep track of which turn we are on
let turnCount = 0
//boolean to allow for looping through turns until game ends
let gameOver = false


// create event listeners for tiles
const initializeBoard = () => {
    // grab all tiles
    const tiles = document.querySelectorAll('.tile')
    //loop through tiles to create event listeners
    for (let i = 0; i<tiles.length; i++){
        tiles[i].addEventListener('click', markShape)
    }
}

//callback function for the event listeners on each tile that will mark shapes during each side's turn
const markShape = (e) => {
    if (turnCount % 2 === 0){
        e.target.innerText = 'O'
    } else {
        e.target.innerText = 'X'
    }

    //increment turn order
    turnCount++
}

// function to randomly pick shapes and whether player or computer goes first
const pickSides = () => {
    let selector = Math.random()
    if (selector < 0.5){
        playerFirst = true
    }
    // the player who goes first will be circle, which will be defined in markShape function
}

// function for computer to move
const computerMove = () =>  {
    let randTile = Math.floor(Math.random() * 9) + 1
    randTile.innerText = 'X'
}

document.addEventListener('DOMContentLoaded', ()=>{
    initializeBoard()
    pickSides()
})
