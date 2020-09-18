//GLOBAL VARIABLES
//boolean to keep track of which player goes first
let playerFirst = false
//counter to keep track of which turn we are on
let turnCount = 0
//boolean to allow for looping through turns until game ends
let gameOver = false
//array of indexes to remove tiles from potential computer choices
let tileIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8]
//nodeList of all .tile divs
const tiles = document.querySelectorAll('.tile')

// create event listeners for tiles
const initializeBoard = () => {
    //loop through tiles to create event listeners
    for (let i = 0; i<tiles.length; i++){
        tiles[i].addEventListener('click', markShape)
    }
}

//callback function for the event listeners on each tile that will mark shapes during each side's turn
const markShape = (e) => {
    // conditional to prevent tile from being changed
    if (e.target.innerText){
        alert('Square already marked! Try again')
    } 
    // if tile is unmarked, conditionals to decide what shape should be placed on tiles
    else {
        if (turnCount % 2 === 0){
            e.target.innerText = 'O'
        } else {
            e.target.innerText = 'X'
        }
    }
    //increment turn order
    turnCount++
    // remove index from tileIndexes array
    const indexNum = tileIndexes.indexOf(parseInt(e.target.id) - 1)
    tileIndexes.splice(indexNum, 1)
    //after player clicks on a tile, computer moves
    if (turnCount < 9){
     computerMove()
    } 
}

// function to randomly pick shapes and whether player or computer goes first
const pickSides = () => {
    let selector = Math.random()
    if (selector < 0.5){
        playerFirst = true
    }// if the player does not move first, make computer take a turn
    else {
        computerMove()
    }
    // the player who goes first will be circle, which will be defined in markShape function
}

// function for computer to move
const computerMove = () =>  {
    // (9 - turnCount) allows the random number to be contained within the shrinking tile Index array
    let randTileIndex = Math.floor(Math.random() * (9 - turnCount)) 
    let tileID = tileIndexes[randTileIndex]
    //grab all tiles
    // decide what computer should mark each square based on who went first
    if (turnCount % 2 === 0){
        tiles[tileID].innerText = 'O'
    } else {
        tiles[tileID].innerText = 'X'
    }
    // need to randomly pick an index, than use that index to pick a tile
    let iD = tileIndexes.indexOf(tileID)
    tileIndexes.splice(iD, 1)
    turnCount++
    // return a game over message if all tiles have been marked
    if (turnCount === 9) {
        alert('Game over')
    }
}


document.addEventListener('DOMContentLoaded', ()=>{
    initializeBoard()
    pickSides()
})
