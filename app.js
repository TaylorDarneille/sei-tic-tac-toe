//blank array in which to add game plays
const gameSlots = ['','','','','','','','','']
//winning arrays to compare to the game slots
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
//declare commonly used query selectors as variables
const status = document.querySelector('.status')
const boxes = document.querySelectorAll('.box')
const zero = document.getElementById(0)
const one = document.getElementById(1)
const two = document.getElementById(2)
const three = document.getElementById(3)
const four = document.getElementById(4)
const five = document.getElementById(5)
const six = document.getElementById(6)
const seven = document.getElementById(7)
const eight = document.getElementById(8)



//player's turn function
const playerTurn = (event) => {
    //check the game status at the start of the turn
    checkStatus()
    const clickedBox = event.target
    const boxNumber = clickedBox.id
    if (gameSlots[boxNumber] === ''){
        gameSlots[boxNumber] = 'X'
        clickedBox.innerText = gameSlots[boxNumber]
        status.innerText = ('Nice move!')
        //checkthe status after the turn
        setTimeout(checkStatus, 500)
    } else if(gameSlots[boxNumber] === 'X'){
        //if the box already has an x, restart the playerTurn function
        playerTurn()
    }
    setTimeout(computerTurn, 500)
}
//click event that invokes the playerTurn function
document.querySelectorAll('.box').forEach(box => box.addEventListener('click', playerTurn))

//computer's turn
const computerTurn = () => {
    checkStatus()
    //generate a random number between 0 and 8
    let computerSlot = Math.floor(Math.random()*9)
    //get the id of the box that matches the random number
    let boxNumber = document.getElementById(computerSlot)
    //if there is already an x or o in the box, restart the computer turn
    if (boxNumber.innerText === 'X' || boxNumber.innerText === 'O'){
        computerTurn()
    } else if(boxNumber.innerText === ''){
        boxNumber.innerText = 'O'
        gameSlots[computerSlot] = boxNumber.innerText
        setTimeout(checkStatus, 500)
    }
}
  
//winning status function
const checkStatus = (event) => {
    for (let i=0; i<8; i++){
        //loop through the winning options array
        //camille helped me with this function during a lab last week
        const winningCombo = winningOptions[i]
        const indexOne = gameSlots[winningCombo[0]]
        const indexTwo = gameSlots[winningCombo[1]]
        const indexThree = gameSlots[winningCombo[2]]
        if (indexOne === 'X' && indexTwo === 'X' && indexThree === 'X'){
            status.innerText = 'Congratulations! You have won the game!'
            for(box of boxes) {
                box.style.background = 'green'
            }
            return computerTurn()
            return playerTurn()
         }
        else if (indexOne === 'O' && indexTwo === 'O' && indexThree === 'O'){
            status.innerText = 'The computer has won the game!'
            for(box of boxes) {
                box.style.background = 'red'
            }
            return computerTurn()
            return playerTurn()
        } else if (one.innerText !== '' && two.innerText !== '' && three.innerText !== '' && four.innerText !== '' && five.innerText !== '' && six.innerText !== '' && seven.innerText !== '' && eight.innerText !== '') {
            status.innerText = 'It is a tie. Play again!'
            for(box of boxes) {
                box.style.background = 'yellow'
            }
            return computerTurn()
            return playerTurn()
        } else {
           status.innerText = 'Your turn!'
           continue
        }
    }
}

//restart function
const restart = (event) => {
    document.querySelector('#button').addEventListener('click', ()=>{
        for (box of boxes) {
            box.innerText=''
            box.style.background = 'white'
        }
        for(let i=0;i<9; i++){
            gameSlots[i] = ''
        }
        status.innerText = "Click on a box to play again!"
    })
 }
//invoke the restart function when button is clicked
 document.querySelector('#button').addEventListener('click', restart)