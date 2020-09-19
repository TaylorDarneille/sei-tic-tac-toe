let currentPlayer = 'X'
let playerOne = ''
let playerTwo = ''
let turnCounter = 0

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




/*
const counter = document.querySelector('#counter')
counter.innerHTML = 'Number of turns: ' + turnCounter
*/


const displayTurn = () => {
    const turnTracker = document.querySelector('#turnTracker')
    while(turnTracker.firstChild) {
        turnTracker.removeChild(turnTracker.firstChild)
    }
    
    //variable to create and grab h3 element
    //conditional to determine who's name is displayed
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
        //change player
        currentPlayer = 'O'
        //prevent changing innerHTML of target div
        event.target.removeEventListener('click',addPiece)
        //display next person's turn
        winScenario()
        turn()
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
        currentPlayer = 'X'
        event.target.removeEventListener('click',addPiece)
        winScenario()
        turn()
    }
    //winScenario()
}

//function to reset board
const boardReset = (event) => {
    const container = document.querySelector('#container')
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
    for(let i = 0; i < 9; i++) {
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

const winScenario = () => {
    /*
    if() {
       //if 1-2-3 OR 4-5-6 OR 7-8-9 OR 1-4-7 OR 2-5-8 OR 3-6-8 OR 1-5-9 OR 7-5-3 are all populated with same type of piece, player with that piece wins 
    } else if() {
        alert('The game is a draw! There are no open spaces')
    } else {
        
    }
    */
   if(turnCounter === 9) {
       alert('The game is a draw!')
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