//console.log('test')

let currentPlayer = 'X'

const addName1 = () => {
    const name1 = document.querySelector('#inputBox1')
    const button1 = document.querySelector('#inputButton1')

    button1.addEventListener('click', () => {
        let user1Name = name1.value
        //console.log(user1Name)
        document.querySelector('#player1').innerHTML += user1Name
        name1.remove()
        button1.remove()
    })
}

const addName2 = () => {
    const name2 = document.querySelector('#inputBox2')
    const button2 = document.querySelector('#inputButton2')

    button2.addEventListener('click', () => {
        let user2Name = name2.value
        console.log(user2Name)
        document.querySelector('#player2').innerHTML += user2Name
        name2.remove()
        button2.remove()
    })
}

//try to condense buttons into one function using event listener on the button
let turnCounter = 0

const resetTurn = () => {
    const turnTracker = document.querySelector('#turnTracker')
    while(turnTracker.firstChild) {
        turnTracker.removeChild(turnTracker.firstChild)
    }    
}

/*
const turn = () => {
    resetTurn()
    if(turnCounter % 2 === 0) {
        const display = document.createElement('h2')
        display.innerHTML = 
        turnCounter += 1
    } else {
        const display = document.createElement('h2')
        display.innerHTML = 'It is ' + 
        turnCounter += 1 
    }
          
}
*/

const addPiece = (event) => {
    //event in this case is click, since players are clicking on divs to place pieces
    if(currentPlayer === 'X') {
        //piece to be placed
        event.target.innerHTML = 'X'
        //change player
        currentPlayer = 'O'
        //prevent changing innerHTML of target div
        event.target.removeEventListener('click',addPiece)
    } else {
        event.target.innerHTML = 'O'
        currentPlayer = 'X'
        event.target.removeEventListener('click',addPiece)
    }
    
}


const addListeners = () => {
    const board = document.querySelectorAll('.board')
    //returns array of DOM elements, will need to access elements in array
    console.log(board)
    
    for(let i = 0; i < board.length; i++) {
        board[i].addEventListener('click', addPiece)
    }


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
}

document.addEventListener('DOMContentLoaded',() => {
    addName1()
    addName2()
    addListeners()
})