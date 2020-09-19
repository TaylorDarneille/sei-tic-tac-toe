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
// array of player choices
let playerChoices = []
// array of computer choices
let computerChoices = []
// boolean that forces a player to wait until they can move
let canMove = false

// create event listeners for tiles
const initializeBoard = () => {
    //remove any tile styling classes
    for (let i = 0; i < tiles.length; i++){
        if (tiles[i].classList.contains('x')){
            tiles[i].classList.remove('x')
        } else if (tiles[i].classList.contains('o')){
            tiles[i].classList.remove('o')
        }
    }

    document.querySelector('.gameInfo').innerText = ''
    //loop through tiles to create event listeners
    for (let i = 0; i<tiles.length; i++){
        tiles[i].addEventListener('click', markShape)
    }
}

//callback function for the event listeners on each tile that will mark shapes during each side's turn
const markShape = (e) => {
        // conditional to prevent tile from being changed
    if (canMove === true){
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
            //increment turn order
            turnCount++
            // remove index from tileIndexes array
            const indexNum = tileIndexes.indexOf(parseInt(e.target.id) - 1)
            // push tile id into player choices array
            playerChoices.push(parseInt(e.target.id))
            tileIndexes.splice(indexNum, 1)
            // check for win
            winCheck(playerChoices)
            // prevent player from moving until computer moves
            canMove = false
            //after player clicks on a tile, computer moves
            if (turnCount < 9){
            computerMove()
            } 
        }  
    }
}

// function to randomly pick shapes and whether player or computer goes first
const pickSides = () => {
    let selector = Math.random()
    if (selector < 0.5){
        playerFirst = true
        canMove = true
        // set info on screen
        document.querySelector('.playerInfo').innerHTML = 'Player: O'
        document.querySelector('.computerInfo').innerText = 'Computer: X'
    }// if the player does not move first, make computer take a turn
    else {
        document.querySelector('.playerInfo').innerText = 'Player: X'
        document.querySelector('.computerInfo').innerText = 'Computer: O'
        computerMove()
    }
    // the player who goes first will be circle, which will be defined in markShape function
}

// function for computer to move
const computerMove = () =>  {
    // (9 - turnCount) allows the random number to be contained within the shrinking tile Index array
    // use a timer to make the computer choice not appear instantly
    setTimeout(()=> {
        let randTileIndex = 0
        if (turnCount === 9){
            let randTileIndex = 0
        } else {
        let randTileIndex = Math.floor(Math.random() * (8 - turnCount))
        }
        let tileID = tileIndexes[randTileIndex]
        computerChoices.push(tileID + 1)
        console.log(computerChoices)
        //grab all tiles
        // decide what computer should mark each square based on who went first
        if (turnCount % 2 === 0){
            tiles[tileID].innerText = 'O' 
        }
        else {
            tiles[tileID].innerText = 'X'
        }
        // need to randomly pick an index, than use that index to pick a tile
        let iD = tileIndexes.indexOf(tileID)
        tileIndexes.splice(iD, 1)
        turnCount++
        // check for win
        winCheck(computerChoices) 
        canMove = true  
        }, 500) 
}

//function to determine whether player or computer array was tested for win
const playerCheck = (choicesArray) => {
    if (choicesArray === playerChoices){
        document.querySelector('.gameInfo').innerText = 'Player Wins!'
    } else {
        document.querySelector('.gameInfo').innerText = 'Computer Wins!'
    }

    //set turnCount to 9 or above to end game
    turnCount = 10
}

//function to change style of winning line
const winLine = (a, b, c) => {
    if (tiles[a-1].innerText === 'X'){
        tiles[a-1].classList.add('x')
        tiles[b-1].classList.add('x')
        tiles[c-1].classList.add('x')
    } else {
        tiles[a-1].classList.add('o')
        tiles[b-1].classList.add('o')
        tiles[c-1].classList.add('o')
    }
}

//function to remove event listeners so that player cannot continue to play after a win condition is met
const removeListeners = () => {
    for (let i = 0; i < tiles.length; i++){
        tiles[i].removeEventListener('click', markShape)
    }
}


// function to test win conditions at the end of every move
const winCheck = (choicesArray) => {
    // have an array for computer and player selections, check if either array includes any of the 8 possible victory conditions
    if (choicesArray.includes(1) && choicesArray.includes(2) && choicesArray.includes(3)) {
        playerCheck(choicesArray)
        winLine(1, 2, 3)
        removeListeners()
    } else if (choicesArray.includes(4) && choicesArray.includes(5) && choicesArray.includes(6)) {
        playerCheck(choicesArray)
        winLine(4, 5, 6)
        removeListeners()
    } else if (choicesArray.includes(7) && choicesArray.includes(8) && choicesArray.includes(9)) {
        playerCheck(choicesArray)
        winLine(7, 8, 9)
        removeListeners()
    } else if (choicesArray.includes(1) && choicesArray.includes(4) && choicesArray.includes(7)) {
        playerCheck(choicesArray)
        winLine(1, 4, 7)
        removeListeners()
    } else if (choicesArray.includes(2) && choicesArray.includes(5) && choicesArray.includes(8)) {
        playerCheck(choicesArray)
        winLine(2, 5, 8)
        removeListeners()
    } else if (choicesArray.includes(3) && choicesArray.includes(6) && choicesArray.includes(9)) {
        playerCheck(choicesArray)
        winLine(3, 6, 9)
        removeListeners()
    } else if (choicesArray.includes(1) && choicesArray.includes(5) && choicesArray.includes(9)) {
        playerCheck(choicesArray)
        winLine(1, 5, 9)
        removeListeners()
    } else if (choicesArray.includes(3) && choicesArray.includes(5) && choicesArray.includes(7)) {
        playerCheck(choicesArray)
        winLine(3, 5, 7)
        removeListeners()
    } else if (turnCount === 9){
        document.querySelector('')
        removeListeners()
    }
}

// get reset button, allow button to reset game without refreshing page
const resetButton = () => {
    const button = document.querySelector('button')
    button.addEventListener('click', resetGame)
}

//call back function for resetting game
const resetGame = () => {
    // loop through tiles to remove all innertext
    for (let i = 0; i < 9; i++){
        if (tiles[i].innerText !== ""){
            tiles[i].innerText = ""
        }
    }
    turnCount = 0
    playerChoices = []
    computerChoices = []
    tileIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    initializeBoard()
    pickSides()
}


document.addEventListener('DOMContentLoaded', ()=>{
    initializeBoard()
    pickSides()
    resetButton()
})
