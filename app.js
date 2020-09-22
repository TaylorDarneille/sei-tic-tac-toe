// ####################### TIC-TAC-TOE ###################################

const gameBoard = document.getElementsByClassName('gridsquare')
let turns = 0
const turnDisplay = document.querySelector('#turn-display')
const turnCaption = document.querySelector('#turn-caption')


const declareWinner = () =>{
    if (turns % 2 === 0) { 
        alert('Player Two wins!\nPlay again?')
    }else {
        alert('Player One wins!\nPlay again?')
    }
    setGameBoard()
}

const findWinner = () => {
    // checks for winner
    //top row win
    if (gameBoard[0].classList.length === 2 && gameBoard[0].classList.value === gameBoard[1].classList.value && gameBoard[1].classList.value === gameBoard[2].classList.value) {
        setTimeout(declareWinner, 200)
    }
    //left column win
    else if (gameBoard[0].classList.length === 2 && gameBoard[0].classList.value === gameBoard[3].classList.value && gameBoard[3].classList.value === gameBoard[6].classList.value) {
        setTimeout(declareWinner, 200)
    }
    //top-left to bottom-right diagonal win
    else if (gameBoard[0].classList.length === 2 && gameBoard[0].classList.value === gameBoard[4].classList.value && gameBoard[4].classList.value === gameBoard[8].classList.value) {
        setTimeout(declareWinner, 200)
    }
    //center column win
    else if (gameBoard[1].classList.length === 2 && gameBoard[1].classList.value === gameBoard[4].classList.value && gameBoard[4].classList.value === gameBoard[7].classList.value) {
        setTimeout(declareWinner, 200)
    }
    //top-right to bottom-left diagonal win
    else if (gameBoard[2].classList.length === 2 && gameBoard[2].classList.value === gameBoard[4].classList.value && gameBoard[4].classList.value === gameBoard[6].classList.value) {
        setTimeout(declareWinner, 200)
    }
    //right column win
    else if (gameBoard[2].classList.length === 2 && gameBoard[2].classList.value === gameBoard[5].classList.value && gameBoard[5].classList.value === gameBoard[8].classList.value) {
        setTimeout(declareWinner, 200)
    }
    //center row win
    else if (gameBoard[3].classList.length === 2 && gameBoard[3].classList.value === gameBoard[4].classList.value && gameBoard[4].classList.value === gameBoard[5].classList.value) {
        setTimeout(declareWinner, 200)
    }
    //bottom row win
    else if (gameBoard[6].classList.length === 2 && gameBoard[6].classList.value === gameBoard[7].classList.value && gameBoard[7].classList.value === gameBoard[8].classList.value) {
        setTimeout(declareWinner, 200)
    }
}


const declareTie = () => {
// checks for tie
    const markedSquaresArr = []
    //for each gridsuare, if classlist is equal 2
    for(i=0; i<gameBoard.length; i++) {
        if (gameBoard[i].classList.length === 2){
            markedSquaresArr.push(gameBoard[i])
        }
    }
    if (markedSquaresArr.length === 9) {
        alert('No more moves. Nobody wins. That\'s just life sometimes.\nPlay again?') 
        setGameBoard()  
    }
    markedSquaresArr.length = 0;
    
}




const placeMarker = (e) => {
    turns++
    console.log(turns)
    //conditional for determining which marker to place
    if (turns % 2 === 0) { 
        e.target.classList.add('o-marker')
    }else {
        e.target.classList.add('x-marker')
    }
    //
    e.target.removeEventListener('click', placeMarker)
    displayPlayer();
    findWinner();
    setTimeout(declareTie, 200)

}

//add click event listeners for each div in the gameboard 
const setGameBoard = () => {
    turns = 0;
    turnDisplay.classList = 'x-marker'
    turnCaption.innerText = 'Player One\'s turn!'
    for(i=0; i<gameBoard.length; i++) {
    if (gameBoard[i].classList.contains('x-marker')) {
        gameBoard[i].classList.remove('x-marker')
    }else if (gameBoard[i].classList.contains('o-marker')){
        gameBoard[i].classList.remove('o-marker')
    }
    gameBoard[i].addEventListener('click', placeMarker)
    }
}

const displayPlayer = () => {
    console.log(turnDisplay.classList)
    if (turns % 2 === 0) { 
        turnDisplay.classList.remove('o-marker')
        turnDisplay.classList.add('x-marker')
        turnCaption.innerText = 'Player One\'s turn!'
    }else {
        turnDisplay.classList.remove('x-marker')
        turnDisplay.classList.add('o-marker')
        turnCaption.innerText = 'Player Two\'s turn!'
    }

}



document.addEventListener('DOMContentLoaded', ()=>{
    reset.addEventListener('click', () => {
            setGameBoard();
                  

    })
})

   