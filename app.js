
//create an empty array that will be filled if/when a cell is clicked. This will tie into the id of each box
const gameSlots = ['','','','','','','','','']
//Create the options to win
const winningOptions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const status = document.querySelector('.status')

//player's turn function

const playerTurn = (event) => {
    const clickedBox = event.target
    const boxNumber = clickedBox.id
    if (gameSlots[boxNumber] === ''){
        gameSlots[boxNumber] = 'X'
        clickedBox.innerText = gameSlots[boxNumber]
        status.innerText = ('Nice move!')
        setTimeout(checkStatus, 1000)
    } else if(gameSlots[boxNumber] === 'X'){
        playerTurn()
    }
    setTimeout(computerTurn, 1000)
}
document.querySelectorAll('.box').forEach(box => box.addEventListener('click', playerTurn))
//computer's turn
const computerTurn = () => {
    checkStatus()
    let computerSlot = Math.floor(Math.random()*9)
    let boxNumber = document.getElementById(computerSlot)
    if (boxNumber.innerText === 'X' || boxNumber.innerText === 'O'){
        computerTurn()
    } else if(boxNumber.innerText === ''){
        boxNumber.innerText = 'O'
        gameSlots[computerSlot] = boxNumber.innerText
        console.log(gameSlots[computerSlot])
        console.log(gameSlots)
        checkStatus()
    }
}
  
//winning status function
let gameWon = false
const checkStatus = (event) => {
    for (let i=0; i<8; i++){
        const winningCombo = winningOptions[i]
        const indexOne = gameSlots[winningCombo[0]]
        const indexTwo = gameSlots[winningCombo[1]]
        const indexThree = gameSlots[winningCombo[2]]
        if (indexOne === 'X' && indexTwo === 'X' && indexThree === 'X'){
            status.innerText = 'Congratulations! You have won the game!'
            const boxes = document.querySelectorAll('.box')
            for(box of boxes) {
                box.style.background = 'green'
            }
            gameWon === true
            return computerTurn()
            
         }
        else if (indexOne === 'O' && indexTwo === 'O' && indexThree === 'O'){
            status.innerText = 'The computer has won the game!'
            gameWon === true
            const boxes = document.querySelectorAll('.box')
            for(box of boxes) {
                box.style.background = 'red'
            }
            
        } else if (indexOne !== '' && indexTwo !== '' && indexThree !== '') {
            const boxes = document.querySelectorAll('.box')
            status.innerText = 'It is a tie. Play again!'
        } else {
           status.innerText = 'Your turn!'
           continue
        }
    }}

//restart function
const restart = (event) => {
        const boxes = document.querySelectorAll('.box')
        document.querySelector('#button').addEventListener('click', ()=>{
            for (box of boxes) {
               box.innerText=''
            }
            for(let i=0;i<9; i++){
                gameSlots[i] = ''
            }
            status.innerText = "Click on a box to play!"
        })
    }
    document.querySelector('#button').addEventListener('click', restart)