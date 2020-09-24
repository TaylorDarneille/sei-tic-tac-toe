// // title--
// // 3x3 grid--
// // the grid should be clickable--
// // the grid cells should have the correct player sign displayed an information display
// // should display a message informing the current player it’s their turn
// // should show us who won the game
// // should show us if the game ended in a draw
// // restart button
// // will restart the entire game
// // Next, let’s break down the game flow for a cell click:

// // needs to track any clicks that happen on our cells
// // needs to check if a valid move has been made
// // needs to make sure nothing happens if an already played cell has been clicked
// // we should update our game state
// // we should validate the game state
// // check if a player has won
// // check if the game ended in a draw
// // either stop the game or change the active player, depending on the above checks
// // reflect the updates made on the UI
// // rinse and repeat


// //track game, global
// //click on square x or an o, alternating 
// //cant click square more than once
// //listeners for each cell



//==============
//My old LOVE :( this is the code i initally started.
//==============
const resetGame = document.querySelector('.reset')
const cellDivs = document.querySelectorAll('.cell')


let currentPlayer = true
winner = null


let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']//add event listener/click, make a class in css that will change div to x or an o
]
//game board
// document.querySelector('game-board').addEventListener('click', (e) =>{
//     console.log('this is working')
// })


const gameStatus = () => {
    const topLeft = cellDivs [0].classList[2]
    const topMiddle = cellDivs [1].classList[2]
    const topRight = cellDivs [2].classList[2]
    const middleLeft = cellDivs [3].classList[2]
    const middleMiddle = cellDivs [4].classList[2]
    const middleRight = cellDivs [5].classList[2]
    const bottomLeft = cellDivs [6].classList[2]
    const bottomMiddle = cellDivs [7].classList[2]
    const bottomRight = cellDivs [8].classList[2]
    
    //checking for winner
    if(topLeft && topLeft === topMiddle && topLeft === topRight){
        alert('Winner!')
    } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight){
        alert('Winner!')
    } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight){
        alert('Winner!')
    } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft){
        alert('Winner!')
    } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle){
        alert('Winner')
    } else if (topRight && topRight === middleRight && topRight === bottomRight) {
        alert('Winner!')
    } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight){
        alert('Winner')
    } else if (topRight && topRight === middleMiddle && topRight === bottomLeft){
        alert('Winner!')
    } else if(topLeft && topMiddle && topRight && middleLeft && middleMiddle && 
        middleRight && bottomLeft && bottomMiddle && bottomRight){
        alert('Its a tie!')
    }
        
    

}

//couldnt get the game to reset
const handleReset = (e) => {
    // console.log(e)
    winner = null
    for (const cellDiv of cellDivs){
        cellDivs.classList.remove('x')
        cellDivs.classList.remove('o')
    }
}
resetGame.addEventListener('click', handleReset)


//this is keep tracked of each cell boc clicked
const cellClicked = (e) => {
    const classList = e.target.classList
    // console.log(e.target.classList)
    const location = classList[1]
    console.log('location', location)

    if(classList[2] === 'x' || classList[2] === 'o'){
        return
    }
    //adding x and o to our game board
    if(currentPlayer === true){
    classList.add('x')
    gameStatus()
    currentPlayer = !currentPlayer
    } else {
    classList.add('o')
    gameStatus()
    currentPlayer = !currentPlayer
    }
}
//event listener for our game board
for(let cellDiv of cellDivs){
    cellDiv.addEventListener('click', cellClicked)
}





//adding event listener to reset button



//loop through each of my cell divs and add a click event to each cell

//loop attempts
// for(let cellDiv of cellDivs){
    //     cellDiv.addEventListener('click', (e) => {
        //         let span = document.createElement('span')
        //         span.innerText = 'x'
        //         e.target.appendChild(span)
        //         console.log(cellDiv)
        //     }) 
        // }
        
        
        
        
        
        // for(let i = 1; i <= 8; i++){
            //     console.log(cellDivs)
            // }










