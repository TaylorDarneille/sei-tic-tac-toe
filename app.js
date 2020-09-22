let currentPlayer = 'X'
let invertedPlayer
let playerOne = 'Player One'
let playerTwo = 'Player Two'
let turnCounter = 0
let playerOneArray = []
let playerTwoArray = []
let activeBoard = true

//Add name for player one
const addName1 = (event) => {
    const name1 = document.querySelector('#inputBox1')
    const button1 = document.querySelector('#inputButton1')
    playerOne = name1.value
    document.querySelector('#player1').innerHTML = playerOne
    event.target.removeEventListener('click',addName1)
    name1.remove()
    button1.remove()
}

//Add name for player two
const addName2 = (event) => {
    const name2 = document.querySelector('#inputBox2')
    const button2 = document.querySelector('#inputButton2')
    playerTwo = name2.value
    document.querySelector('#player2').innerHTML = playerTwo
    event.target.removeEventListener('click',addName2)
    name2.remove()
    button2.remove()
}

//displayTurn and turn display the next piece to be played on board
const displayTurn = () => {
    const turnTracker = document.querySelector('#turnTracker')
    while(turnTracker.firstChild) {
        turnTracker.removeChild(turnTracker.firstChild)
    }
}


const turn = () => {
    displayTurn()
    const display = document.createElement('div')
    let tracker = 'Next piece to be played: ' + currentPlayer
    display.innerHTML = tracker
        document.querySelector('#turnTracker').appendChild(display)
    
}

//Adding pieces to gameboard

const addPiece = (event) => {
    if(currentPlayer === 'X' && activeBoard === true) {
        //adding piece to board
        event.target.classList.add('x')
        event.target.innerHTML = 'X'
        //add one to turnCounter
        turnCounter += 1
        //each div has an id that is used to calculate win logic, so need to grab that id to store in an array that can be evaluated in win logic
        const idToPush = event.target.getAttribute('id')
        playerOneArray.push(idToPush)
        //change player
        currentPlayer = 'O'
        //prevent changing innerHTML of target div
        event.target.removeEventListener('click',addPiece)
        //display next person's turn
        turn()
        winScenario()
    } else if (currentPlayer === 'O' && activeBoard === true) {
        event.target.classList.add('o')
        event.target.innerHTML = 'O'
        turnCounter += 1
        const idToPush = event.target.getAttribute('id')
        playerTwoArray.push(idToPush)
        currentPlayer = 'X'
        event.target.removeEventListener('click',addPiece)
        turn()
        winScenario()
    }
}

//generate board
const initializeBoard = () => {
    const container = document.querySelector('#container')
    for(let i = 1; i < 10; i++) {
        const board = document.createElement('div')
        board.classList.add('board')
        board.setAttribute('id', i)
        board.innerHTML = i
        container.appendChild(board)
    }  
}

//reset board
const boardReset = (event) => {
    playerOneArray = []
    playerTwoArray = []
    turnCounter = 0
    activeBoard = true
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
    initializeBoard()
    turn()
    addListeners()
}

//adds event listeners to game board that enable pieces to be laid on board
const addListeners = () => {
    const board = document.querySelectorAll('.board')
    //console.log(board)
    for(let i = 0; i < board.length; i++) {
        board[i].addEventListener('click', addPiece)
    }
    //add an event listener for refreshing game
    const resetButton = document.querySelector('#reset')
    resetButton.addEventListener('click', boardReset)

    
}

//separated button listeners because buttons are removed once they are clicked and users are not re-prompted to enter names unless they refresh the page - restarting game doesn't refresh page
const addNameListeners = () => {
    //add event listener for add player 1 name button
    const button1 = document.querySelector('#inputButton1')
    button1.addEventListener('click', addName1)
    //add event listener for add player 2 name button
    const button2 = document.querySelector('#inputButton2')
    button2.addEventListener('click', addName2)
}

//need to invert player to display winner of game
const invertUser = () => {
    if(currentPlayer === 'O') {
        invertedPlayer = playerOne
    }
    if(currentPlayer === 'X') {
        invertedPlayer = playerTwo
    }
}

//lock board
const disableBoard = () => {
    activeBoard = false
}

//evaluate in conditions
const winScenario = () => {
    //need to invert use because of way code is set up. Tried putting winScenario in different places within addPiece but couldn't get code to run properly
    invertUser()
    
    if(playerOneArray.includes('1') && playerOneArray.includes('2') &&playerOneArray.includes('3') || playerTwoArray.includes('1') && playerTwoArray.includes('2') && playerTwoArray.includes('3')) {
        document.querySelector('#turnTracker').innerHTML = invertedPlayer + ' wins! Please hit the reset button if you want to start a new game.'
        disableBoard()
    }
    if(playerOneArray.includes('4') && playerOneArray.includes('5') &&playerOneArray.includes('6') || playerTwoArray.includes('4') && playerTwoArray.includes('5') && playerTwoArray.includes('6')) {
        document.querySelector('#turnTracker').innerHTML = invertedPlayer + ' wins! Please hit the reset button if you want to start a new game.'
        disableBoard()
    }
    if(playerOneArray.includes('7') && playerOneArray.includes('8') &&playerOneArray.includes('9') || playerTwoArray.includes('7') && playerTwoArray.includes('8') && playerTwoArray.includes('9')) {
        document.querySelector('#turnTracker').innerHTML = invertedPlayer + ' wins! Please hit the reset button if you want to start a new game.'
        disableBoard()
    }
    if(playerOneArray.includes('1') && playerOneArray.includes('4') &&playerOneArray.includes('7') || playerTwoArray.includes('1') && playerTwoArray.includes('4') && playerTwoArray.includes('7')) {
        document.querySelector('#turnTracker').innerHTML = invertedPlayer + ' wins! Please hit the reset button if you want to start a new game.'
        disableBoard()
    }
    if(playerOneArray.includes('2') && playerOneArray.includes('5') &&playerOneArray.includes('8') || playerTwoArray.includes('2') && playerTwoArray.includes('5') && playerTwoArray.includes('8')) {
        document.querySelector('#turnTracker').innerHTML = invertedPlayer + ' wins! Please hit the reset button if you want to start a new game.'
        disableBoard()
    }
    if(playerOneArray.includes('3') && playerOneArray.includes('6') &&playerOneArray.includes('9') || playerTwoArray.includes('3') && playerTwoArray.includes('6') && playerTwoArray.includes('9')) {
        document.querySelector('#turnTracker').innerHTML = invertedPlayer + ' wins! Please hit the reset button if you want to start a new game.'
        disableBoard()
    }
    if(playerOneArray.includes('1') && playerOneArray.includes('5') &&playerOneArray.includes('9') || playerTwoArray.includes('1') && playerTwoArray.includes('5') && playerTwoArray.includes('9')) {
        document.querySelector('#turnTracker').innerHTML = invertedPlayer + ' wins! Please hit the reset button if you want to start a new game.'
        disableBoard()
    }
    if(playerOneArray.includes('3') && playerOneArray.includes('5') &&playerOneArray.includes('7') || playerTwoArray.includes('3') && playerTwoArray.includes('5') && playerTwoArray.includes('7')) {
        document.querySelector('#turnTracker').innerHTML = invertedPlayer + ' wins! Please hit the reset button if you want to start a new game.'
        disableBoard()
    }
    if(turnCounter === 9) {
        //game is a draw
        document.querySelector('#turnTracker').innerHTML ='The game is a draw. Please hit the reset button if you want to start a new game.'
        //Kept disableBoard function in this condition even though it doesn't really impact game because no open squares are left, but its intent is to "lock" the board
        disableBoard()
   }
}


document.addEventListener('DOMContentLoaded',() => {
    initializeBoard()
    addListeners()
    addNameListeners()
    turn()
})