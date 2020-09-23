// //put X or O into array
// let moves = ['X', 'O']
//created global square variable to grab elements with class square
const square = document.querySelectorAll('.square')

//set turn count equal to 0 and to keep track of turns
let turnCount = 0

//defined userMove
let userMove = 'X'

//defined computer Move
let compMove = 'O'
//console.log(userMove.currentChoice = moves[1])

// //if userMove=X then compMove=O, else compMove=X
// const computerChoice = () => {
//     if(userMove.currentChoice === moves[0]){
//         compMove.currentChoice === moves[1];
//     }else{
//         compMove.currentChoice === moves[0];
//     }
// }

//list all possibilities of how to win game
const possibleWins = [[0, 4, 8], [0, 1, 2], [0,3,6], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]]

//make an empty array for userMove and a separate one for compMove
let userMoveArr = []
let compMoveArr = []
console.log(userMoveArr)
console.log(compMoveArr)
//toggle squares between x and o in each div once it is clicked
//currentPlayer = currentPlayer === "X" ? "O" : "X"

//for loop for event
for(let i = 0; i < square.length; i++){
    square[i].addEventListener('click', changeShape)
}

//
const changeShape = (e) => {
    //if turn count is divisble by 2 then the box clicked should print 'o' and push it to the compMoveArr
    if(turnCount % 2 === 0){
        e.target.innerText ='O'
        compMoveArr.push()
        //else print 'x' then push into userMoveArr
    }else{
        e.target.innerText = 'X'
        userMoveArr.push()
    }
    turnCount++
}
//ending game statements
const winningMessage = () =>{
    for(let i = 0; i < possibleWins.length; i++){
        //if user gets any element in possibleWins array then user wins
        if(userMoveArr === possibleWins[i]){
            alert('user wins!')
            //if computer gets any element in possibleWins then computer wins
        }else if(compMoveArr === possibleWins[i]){
            alert('computer wins!')
            //otherwise it is a draw
        }else(
            alert('Game ended in a draw')
        )
    }
}

//function to reset game
const resetGame = () => {
    for(let i = 0; i < square.length; i++){
        if(square[i].contains('x')){
            square[i].remove('x')
        }else if(square[i].contains('o')){
            square[i].remove('o')
        }
    }
}


//setting up the game
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
    resetGame()
})

const button = document.querySelector('button')
button.addEventListener('click', resetGame)