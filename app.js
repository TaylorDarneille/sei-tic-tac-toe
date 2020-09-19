let currentPlayer = 'X'
let invertedPlayer
let playerOne = ''
let playerTwo = ''
let turnCounter = 0
let playerOneArray = []
let playerTwoArray = []
//call boardRefresh function at start of game to make grid look nicer?

const addName1 = () => {
    const name1 = document.querySelector('#inputBox1')
    const button1 = document.querySelector('#inputButton1')

    button1.addEventListener('click', () => {
        let user1Name = name1.value
        //playerOne = name1.value
        console.log(user1Name)
        document.querySelector('#player1').innerHTML = user1Name
        name1.remove()
        button1.remove()
    })
}

const addName2 = () => {
    const name2 = document.querySelector('#inputBox2')
    const button2 = document.querySelector('#inputButton2')

    button2.addEventListener('click', () => {
        let user2Name = name2.value
        playerTwo = name2.value
        console.log(user2Name)
        document.querySelector('#player2').innerHTML = user2Name
        name2.remove()
        button2.remove()
    })
}

//try to condense buttons into one function using event listener on the button

const displayTurn = () => {
    const turnTracker = document.querySelector('#turnTracker')
    while(turnTracker.firstChild) {
        turnTracker.removeChild(turnTracker.firstChild)
    }
    
    //combine this with addPiece function?
}


const turn = () => {
    displayTurn()
    const display = document.createElement('div')
    let string24 = 'Turn: ' + currentPlayer
    display.innerHTML = string24
        document.querySelector('#turnTracker').appendChild(display)
    
}


const addPiece = (event) => {
    //event in this case is click, since players are clicking on divs to place pieces
    //need to display somewhere on page whose turn it is
    
    if(currentPlayer === 'X') {
        //displayTurn()
        
        //looks a little wonky the way code is written now, it'd be more accurate to say most recent piece played. Can displayTurn() go somewhere else in this function?
        /*
        const display = document.createElement('div')
        let string24 = 'Turn: ' + currentPlayer
        display.innerHTML = string24
        document.querySelector('#turnTracker').appendChild(display)
        */
        //piece to be placed
        event.target.classList.add('x')
        event.target.innerHTML = 'X'
        //add one to turnCounter
        turnCounter += 1
        console.log(turnCounter)
        const idToPush = event.target.getAttribute('id')
        playerOneArray.push(idToPush)
        console.log(event.target.getAttribute('id'))
        console.log(playerOneArray)
        
        //change player
        currentPlayer = 'O'
        //prevent changing innerHTML of target div
        event.target.removeEventListener('click',addPiece)
        //display next person's turn
        
        turn()
        winScenario()
    } else {
        //displayTurn()
        
        /*
        const display = document.createElement('div')
        let string24 = 'Turn: ' + currentPlayer
        display.innerHTML = string24
        document.querySelector('#turnTracker').appendChild(display)
        */
        event.target.classList.add('o')
        event.target.innerHTML = 'O'
        turnCounter += 1
        console.log(turnCounter)
        const idToPush = event.target.getAttribute('id')
        playerTwoArray.push(idToPush)
        console.log(event.target.getAttribute('id'))
        console.log(playerTwoArray)
        
        currentPlayer = 'X'
        event.target.removeEventListener('click',addPiece)
        
        turn()
        winScenario()
    }
    //winScenario()
}

//function to reset board
const boardReset = (event) => {
    playerOneArray = []
    playerTwoArray = []
    turnCounter = 0
    const container = document.querySelector('#container')
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
    for(let i = 1; i < 10; i++) {
        const board = document.createElement('div')
        board.classList.add('board')
        board.setAttribute('id', i)
        board.innerHTML = i
        container.appendChild(board)
    }
    addListeners()
}

const addListeners = () => {
    const board = document.querySelectorAll('.board')
    //returns array of DOM elements, will need to access elements in array
    console.log(board)
    
    for(let i = 0; i < board.length; i++) {
        //board[i].classList.add('test')
        board[i].addEventListener('click', addPiece)
    }

    //add an event listener for refreshing game
    const resetButton = document.querySelector('#reset')
    resetButton.addEventListener('click', boardReset)
}

const invertUser = () => {
    if(currentPlayer === 'O') {
        invertedPlayer = 'X'
    }
    if(currentPlayer === 'X') {
        invertedPlayer = 'O'
    }
}

const disableBoard = () => {
    //remove board class
    const board = document.querySelectorAll('.board')
    for(let i = 0; i < board.length; i++) {
        //board[i].classList.add('test')
        board[i].classList.add('hideText')
        board[i].classList.remove('board')
    }
}

const winScenario = () => {
    /*
    if() {
       //if 1-2-3 OR 4-5-6 OR 7-8-9 OR 1-4-7 OR 2-5-8 OR 3-6-9 OR 1-5-9 OR 7-5-3 are all populated with same type of piece, player with that piece wins 
    } else if() {
        alert('The game is a draw! There are no open spaces')
    } else {
        
    }
    */
    //need to invert use because of way code is set up. Tried putting winScenario in different places within addPiece but couldn't get code to cun properly
    invertUser()
    
    if(playerOneArray.includes('1') && playerOneArray.includes('2') &&playerOneArray.includes('3') || playerTwoArray.includes('1') && playerTwoArray.includes('2') && playerTwoArray.includes('3')) {
        document.querySelector('#turnTracker').innerHTML = invertedPlayer + ' wins! Please hit the reset button if you want to keep playing.'
        disableBoard()
    }
    if(playerOneArray.includes('4') && playerOneArray.includes('5') &&playerOneArray.includes('6') || playerTwoArray.includes('4') && playerTwoArray.includes('5') && playerTwoArray.includes('6')) {
        document.querySelector('#turnTracker').innerHTML = invertedPlayer + ' wins! Please hit the reset button if you want to keep playing.'
        disableBoard()
    }
    if(playerOneArray.includes('7') && playerOneArray.includes('8') &&playerOneArray.includes('9') || playerTwoArray.includes('7') && playerTwoArray.includes('8') && playerTwoArray.includes('9')) {
        document.querySelector('#turnTracker').innerHTML = invertedPlayer + ' wins! Please hit the reset button if you want to keep playing.'
        disableBoard()
    }
    if(playerOneArray.includes('1') && playerOneArray.includes('4') &&playerOneArray.includes('7') || playerTwoArray.includes('1') && playerTwoArray.includes('4') && playerTwoArray.includes('7')) {
        document.querySelector('#turnTracker').innerHTML = invertedPlayer + ' wins! Please hit the reset button if you want to keep playing.'
        disableBoard()
    }
    if(playerOneArray.includes('2') && playerOneArray.includes('5') &&playerOneArray.includes('8') || playerTwoArray.includes('2') && playerTwoArray.includes('5') && playerTwoArray.includes('8')) {
        document.querySelector('#turnTracker').innerHTML = invertedPlayer + ' wins! Please hit the reset button if you want to keep playing.'
        disableBoard()
    }
    if(playerOneArray.includes('3') && playerOneArray.includes('6') &&playerOneArray.includes('9') || playerTwoArray.includes('3') && playerTwoArray.includes('6') && playerTwoArray.includes('9')) {
        document.querySelector('#turnTracker').innerHTML = invertedPlayer + ' wins! Please hit the reset button if you want to keep playing.'
        disableBoard()
    }
    if(playerOneArray.includes('1') && playerOneArray.includes('5') &&playerOneArray.includes('9') || playerTwoArray.includes('1') && playerTwoArray.includes('5') && playerTwoArray.includes('9')) {
        document.querySelector('#turnTracker').innerHTML = invertedPlayer + ' wins! Please hit the reset button if you want to keep playing.'
        disableBoard()
    }
    if(playerOneArray.includes('3') && playerOneArray.includes('5') &&playerOneArray.includes('7') || playerTwoArray.includes('3') && playerTwoArray.includes('5') && playerTwoArray.includes('7')) {
        document.querySelector('#turnTracker').innerHTML = invertedPlayer + ' wins! Please hit the reset button if you want to keep playing.'
        disableBoard()
    }
    if(turnCounter === 9) {
    //create a div or show winning text somewhere else   
    //alert('The game is a draw!')
        document.querySelector('#turnTracker').innerHTML ='The game is a draw. Please hit the reset button if you want to keep playing.'
   }
}

//to clear board, need to clear innerHTML of divs with class .board
//preventDefault to stop whole page from refreshing

document.addEventListener('DOMContentLoaded',() => {
    addName1()
    addName2()
    addListeners()
    //winScenario()
    turn()
})