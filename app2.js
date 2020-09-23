//created global square variable to grab elements with class square
const square = document.querySelectorAll('.square')

//set turn count equal to 0 and to keep track of turns
let turnCount = 0

//defined userMove
let userMove = 'X'

//defined computer Move
let compMove = 'O'

//list all possibilities of how to win game
const possibleWins = [[0, 4, 8], [0, 1, 2], [0,3,6], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]]

//make an empty array for userMove and a separate one for compMove
let userMoveArr = []
let compMoveArr = []

const changeShape = () => {
    //for loop for event
    for(let i = 0; i < square.length; i++){
    square[i].addEventListener('click', makeMove)
    }
}

//
const makeMove = (e) => {
    const boxClick = event.target
    let numBox = boxClick.id
    //if turn count is divisble by 2 then the box clicked should print 'o' and push it to the compMoveArr
    if(turnCount % 2 === 0){
        boxClick.innerText ='O'
        compMoveArr.push()
        //else print 'x' then push into userMoveArr
    }else{
        boxClick.innerText = 'X'
        userMoveArr.push()
    }
    turnCount++
    console.log(compMoveArr)
    console.log(userMoveArr)
}

//ending game statements
const winningMessage = () =>{
    for(let i = 0; i < possibleWins.length; i++){
        //if user gets any element in possibleWins array then user wins
        if(userMoveArr === possibleWins[i]){
            const winMessage = document.createElement('p')
            winMessage.innerText = 'user wins!'
            //if computer gets any element in possibleWins then computer wins
        }else if(compMoveArr === possibleWins[i]){
            const compWin = document.createElement('p')
            compWin.innerText = 'computer wins!'
            //otherwise it is a draw
        }else{
            const drawMess = document.createElement('p')
            drawMess.innerText = 'Game ended in a draw!'
        }
    }
    document.querySelector('body').appendChild(winMessage)
    document.querySelector('body').appendChild(compWin)
    document.querySelector('body').appendChild(drawMess)
}

//function to reset game
const resetGame = () => {
    for(let i = 0; i < square.length; i++){
        //if square has x remove x
        if(square[i].contains('x')){
            square[i].remove('x')
        //else remove o
        }else{
            square[i].remove('o')
        }
    }
}

//setting up the game layout
const body = document.querySelector('body')
const gameBoard = () => {
    for(let i = 0; i < 9; i++){
        const div = document.createElement('div')
        const container = document.querySelector('.container')
        div.classList.add('square')
        div.setAttribute('id', i)
        container.appendChild(div)
    }
}
document.addEventListener('DOMContentLoaded', ()=>{
    gameBoard()
    changeShape()
})
//eventlistener for button
const button = document.querySelector('button')
button.addEventListener('click', resetGame)