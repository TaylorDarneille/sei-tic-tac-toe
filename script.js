const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
    //HORIZONTAL WINNING COMBOS
    [0,1,2],
    [3,4,5],
    [6,7,8],
    //DIAG WINNING COMBOS
    [0,4,8],
    [2,4,6],
    //VERTICAL WINNING COMBOS
    [0,3,6],
    [1,4,7],
    [2,5,8],

]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let circleTurn

startGame()

restartButton.addEventListener('click', startGame)

function startGame() {
    circleTurn = false 
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(CIRCLE_CLASS)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, {once: true})
    })
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
}


cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true })
})

function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    // Place the mark
    placeMark(cell, currentClass)
    // Check for a Win
    if (checkWin(currentClass)) {
        endGame(false)
    // Check for a Draw
    } else if (isDraw()) {
        endGame(true)
    } else {
     
    // Switch Turns
    swapTurns()
    setBoardHoverClass()
    }
}

function endGame(draw) {
    if(draw) {
        winningMessageTextElement.innerText = 'Its a Draw!'
    } else {
        winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
    }
    winningMessageElement.classList.add('show')
}

function isDraw() {
    //[...] destructers the element into an array
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    })
}


function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    circleTurn = !circleTurn //!opposite circleTurn
}

function setBoardHoverClass() {
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS)
    } else {
        board.classList.add(X_CLASS)
    }
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    }
    )
}























































// let counter = 0

// const classes = ['circle', 'box','square']


// const generateBoard = () =>{
//   const container = document.querySelector('.container')
//   for (let i = 0; i < 9; i++) {
//   let div = document.createElement('div')
//       div.classList.add('square')  
//   document.querySelector('.container').appendChild(div)
  
//   }
// }

// const changeShape = (e) => {

//   const box = e.target.className
//   e.target.classList.remove(box)
//   e.target.classList.add(classes[counter])
//   counter++
//   console.log(counter)
//   if (counter >= classes.length) {
//       counter = 0
//   }
//   console.log(counter)
// }

// document.addEventListener ('DOMContentLoaded', ()=> {
//   generateBoard()
//   const boxes = document.querySelectorAll('.square')
//     console.log(boxes)
//     // for(shape of shapes){
//     //     shape.addEventListenerconst shapes = document.querySelectorAll('.triangle')

//     //     console.log(shapes)
//     for(let i=0; i< boxes.length; i++){
//         boxes[i].addEventListener('click', changeShape)
//     }
// })

//winning logic to determine if it is a win or draw

// need to write code that understands that there are 3 of a kind in a row and have that notify the winner that they have won.

// all need code that will recognize when all of the squares have been filled but there is no winner.