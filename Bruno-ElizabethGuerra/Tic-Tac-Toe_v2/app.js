//Next up
// [x] User can select 3x3, 4x4, or 5x5 grid
    // [x] need to create grids in the DOM
    // [x] erase previous grid
    // [x] edit win conditons for 4x4 and 5x5
// [x] fix bug when player wins on last turn
// [] play against AI
    // [x] AI logic
    // [] 1P/2P slider


//Turn Counter                                
let counter = 0
//has to be 3 by default or game keeps going forever
let gridSize = 3
//changes when someone wins // helps with ties and AI
let winner = false

// This function runs after every turn and check for 3 win conditions: X wins, O wins, or Tie    
const winCond = (num) => {
    let grid = {}
    //is there a more efficient way to do this? // Sadly I think I have to manually tell JS what "win" looks like
    //JS doesn't know TTT on its own // At least there is copy/paste

    //3x3 win condtion array 
     if (num === 3) {
        const topLeft = document.querySelector('#top-left')
        const topMid = document.querySelector('#top-mid')
        const topRight = document.querySelector('#top-right')
        const centLeft = document.querySelector('#cent-left')
        const centMid = document.querySelector('#cent-mid')
        const centRight = document.querySelector('#cent-right')
        const botLeft = document.querySelector('#bot-left')
        const botMid = document.querySelector('#bot-mid')
        const botRight = document.querySelector('#bot-right')
                
        grid = {
            topRow: [topLeft,topMid,topRight],
            centRow: [centLeft,centMid,centRight],
            botRow: [botLeft,botMid,botRight],
            leftCol: [topLeft,centLeft,botLeft],
            midCol: [topMid,centMid,botMid],
            rightCol: [topRight,centRight,botRight],
            rightDiag: [botRight,centMid,topLeft],
            leftDiag: [botLeft,centMid,topRight]
        }

    //4x4 win condition
     } else if (num === 4) {
        const topLeft = document.querySelector('#top-left')
        const topMidLeft = document.querySelector('#top-mid-left')
        const topMidRight = document.querySelector('#top-mid-right')
        const topRight = document.querySelector('#top-right')

        const centLeftTop = document.querySelector('#cent-left-top')
        const centMidLeftTop = document.querySelector('#cent-mid-left-top')
        const centMidRightTop = document.querySelector('#cent-mid-right-top')
        const centRightTop = document.querySelector('#cent-right-top')

        const centLeftBot = document.querySelector('#cent-left-bot')
        const centMidLeftBot = document.querySelector('#cent-mid-left-bot')
        const centMidRightBot = document.querySelector('#cent-mid-right-bot')
        const centRightBot = document.querySelector('#cent-right-bot')

        const botLeft = document.querySelector('#bot-left')
        const botMidLeft = document.querySelector('#bot-mid-left')
        const botMidRight = document.querySelector('#bot-mid-right')
        const botRight = document.querySelector('#bot-right')

        grid = {
            topRow: [topLeft,topMidLeft,topMidRight,topRight],
            centTopRow: [centLeftTop,centMidLeftTop,centMidRightTop,centRightTop],
            centBotRow: [centLeftBot, centMidLeftBot, centMidRightBot, centRightBot],
            botRow: [botLeft,botMidLeft,botMidRight,botRight],

            leftCol: [topLeft,centLeftTop,centLeftBot,botLeft],
            midLeftCol: [topMidLeft,centMidLeftTop,centMidLeftBot,botMidLeft],
            midRightCol: [topMidRight,centMidRightTop,centMidRightBot,botMidRight],
            rightCol: [topRight,centRightTop,centRightBot,botRight],

            rightDiag: [botRight,centMidRightBot,centMidLeftTop,topLeft],
            leftDiag: [botLeft,centMidLeftBot,centMidRightTop,topRight]
        }

    //5x5 win condition
     } else {
        const topLeft = document.querySelector('#top-left')
        const topMidLeft = document.querySelector('#top-mid-left')
        const topMid = document.querySelector('#top-mid')
        const topMidRight = document.querySelector('#top-mid-right')
        const topRight = document.querySelector('#top-right')

        const centLeftTop = document.querySelector('#cent-left-top')
        const centMidLeftTop = document.querySelector('#cent-mid-left-top')
        const centMidTop = document.querySelector('#cent-mid-top')
        const centMidRightTop = document.querySelector('#cent-mid-right-top')
        const centRightTop = document.querySelector('#cent-right-top')

        const centLeft = document.querySelector('#cent-left')
        const centLeftMid = document.querySelector('#cent-left-mid')
        const centMid = document.querySelector('#cent-mid')
        const centRightMid = document.querySelector('#cent-right-mid')
        const centRight = document.querySelector('#cent-right')

        const centLeftBot = document.querySelector('#cent-left-bot')
        const centMidLeftBot = document.querySelector('#cent-mid-left-bot')
        const centMidBot = document.querySelector('#cent-mid-bot')
        const centMidRightBot = document.querySelector('#cent-mid-right-bot')
        const centRightBot = document.querySelector('#cent-right-bot')

        const botLeft = document.querySelector('#bot-left')
        const botMidLeft = document.querySelector('#bot-mid-left')
        const botMid = document.querySelector('#bot-mid')
        const botMidRight = document.querySelector('#bot-mid-right')
        const botRight = document.querySelector('#bot-right')

        grid = {
            topRow: [topLeft,topMidLeft,topMid,topMidRight,topRight],
            centTopRow: [centLeftTop,centMidLeftTop,centMidTop,centMidRightTop,centRightTop],
            centRow: [centLeft,centLeftMid,centMid,centRightMid,centRight],
            centBotRow: [centLeftBot,centMidLeftBot,centMidBot,centMidRightBot, centRightBot],
            botRow: [botLeft,botMidLeft,botMid,botMidRight,botRight],

            leftCol: [topLeft,centLeftTop,centLeft,centLeftBot,botLeft],
            midLeftCol: [topMidLeft,centMidLeftTop,centLeftMid,centMidLeftBot,botMidLeft],
            midCol: [topMid,centMidTop,centMid,centMidBot,botMid],
            midRightCol: [topMidRight,centMidRightTop,centRightMid,centMidRightBot,botMidRight],
            rightCol: [topRight,centRightTop,centRight,centRightBot,botRight],

            rightDiag: [botRight,centMidRightBot,centMid,centMidLeftTop,topLeft],
            leftDiag: [botLeft,centMidLeftBot,centMid,centMidRightTop,topRight]
        }
     }

    const squares = document.querySelectorAll('.square')
    const gameOver = document.querySelector('#game-over')
    const change = document.querySelector('#change')
    
    //looks through arrays and determines if a player has won
    // changed 9 to squares.length so I don't have to rewrite all this code
        for (const arr in grid) {
            if (grid[arr].every(square => square.classList.contains('x'))) {
                // console.log('x wins!')
                squares.forEach(square => {
                    square.classList.add('disabled')
                    square.classList.remove('open')
            })
                change.classList.add('disabled')
                gameOver.innerText = 'x wins!'
                winner = true
            }
            else if (grid[arr].every(square => square.classList.contains('o'))) {
                // console.log('o wins!')
                squares.forEach(square => {
                    square.classList.add('disabled')
                    square.classList.remove('open')
                })
                change.classList.add('disabled')
                gameOver.innerText = 'o wins!'
                winner = true
            }
        }
    // Need something to check if one side has won before declaring a tie
    // Added 'winner' variable and got rid of original if statement

    if(counter === squares.length && winner === false) {
        //Tie   
            squares.forEach(square => {
                square.classList.add('disabled')
                square.classList.remove('open')
            })
            change.classList.add('disabled')
            gameOver.innerText = 'It\'s a tie!'
      }
}


//This function is the actual gamplay // it runs the winCond function after every turn to see if the game is over // 2 players
const twoPlayer = (e) => {
    const xTurn = (e) => {
        e.target.classList.add('x', 'played')
        e.target.classList.remove('open')
    }
    const oTurn = (e) => {
        e.target.classList.add('o','played')
        e.target.classList.remove('open')
    }
    const gameOver = document.querySelector('#game-over')
    if (counter % 2 === 0) {
        xTurn(e)
        counter++
        gameOver.innerText = 'o\'s turn!'
        // console.log(counter)
        winCond(gridSize)
    } else {
        oTurn(e)
        counter++
        gameOver.innerText = 'x\'s turn!'
        // console.log(counter)
        winCond(gridSize)
    }
}

//function to play against computer
const onePlayer = (e) => {
    // x logic should be the same
    // o turn needs to become computer player // o needs to come out of event function // stick to end of xTurn!
    // choose a random square that hasn't already been selected  // added class 'open'          
    const gameOver = document.querySelector('#game-over')
    
    const xTurn = (e) => {
        e.target.classList.add('x', 'played')
        e.target.classList.remove('open')
    }

    const oTurn = () => {
        const openSquares = document.querySelectorAll('.open')
        const randIndex = Math.floor(Math.random() * openSquares.length)
        openSquares[randIndex].classList.add('o','played')
        openSquares[randIndex].classList.remove('open')
        counter++
        gameOver.innerText = 'x\'s turn!'
        // console.log(counter)
        winCond(gridSize)
    }

    if (counter % 2 === 0) {
        xTurn(e)
        counter++
        gameOver.innerText = 'o\'s turn!'
        // console.log(counter)
        winCond(gridSize)
        if (winner === false) setTimeout(oTurn,1200)
    }

}
// -- So important it got its own function -- //
const reset = () => {
    let squares = document.querySelectorAll('.square')
    squares.forEach(square => {
        square.setAttribute('class','square')
        square.classList.add('open')
    })
    document.querySelector('#change').classList.remove('disabled')
    document.querySelector('#game-over').innerText = 'Click a square to start playing!'
    counter = 0
    winner = false
}

//This function sets the game up by adding event listeners to all the squares and running code for the reset button
const ticTacToe = () => {
    reset()
    let squares = document.querySelectorAll('.square')
    let playerToggle = document.querySelector('#player-toggle')

    // If user loads game or resets
    if (playerToggle.checked) {
        for (var i = 0; i<squares.length;i++){
            squares[i].addEventListener('click',twoPlayer)
        }
    } else { // 1-player
        for (var i = 0; i<squares.length;i++){
            squares[i].removeEventListener('click',twoPlayer)  
            squares[i].addEventListener('click',onePlayer)
        }
    }
    
   // When user toggles
    playerToggle.addEventListener('change',(e) => {
        reset()
        if (playerToggle.checked) { // 2-player
            for (var i = 0; i<squares.length;i++){
            squares[i].removeEventListener('click',onePlayer)
            squares[i].addEventListener('click',twoPlayer)
            }
        } else { // 1-player
            for (var i = 0; i<squares.length;i++){
            squares[i].removeEventListener('click',twoPlayer)  
            squares[i].addEventListener('click',onePlayer)
            }
       }
   })

    const resetButton = document.querySelector('#reset')
    resetButton.addEventListener('click',reset)
}

//Create the playing grid with the DOM
const makeGrid = (num) => {
    reset()
    const board = document.querySelector('.board')

    while (board.firstChild) board.removeChild(board.firstChild)

    const createDivs = (idName) => {
        let div = document.createElement('div')
        div.setAttribute('id',idName)
        div.classList.add('square','open')
        div.innerHTML = '</br>'
        board.appendChild(div)
    }
    
    //3x3
    if (num===3) {
        board.setAttribute('id','board-3x3')
        const array3x3 = [
            'top-left','top-mid','top-right',
            'cent-left','cent-mid','cent-right',
            'bot-left','bot-mid','bot-right'
        ]
        array3x3.forEach(createDivs)

    //4x4
     } else if (num===4){
        board.setAttribute('id','board-4x4')
        const array4x4 = [
            'top-left','top-mid-left','top-mid-right','top-right',
            'cent-left-top','cent-mid-left-top','cent-mid-right-top','cent-right-top',
            'cent-left-bot','cent-mid-left-bot','cent-mid-right-bot','cent-right-bot',
            'bot-left','bot-mid-left','bot-mid-right','bot-right'
        ]
        array4x4.forEach(createDivs)

    //5x5
     } else {
        board.setAttribute('id','board-5x5')
        const array5x5 = [
            'top-left','top-mid-left','top-mid','top-mid-right','top-right',
            'cent-left-top','cent-mid-left-top','cent-mid-top','cent-mid-right-top','cent-right-top',
            'cent-left','cent-left-mid','cent-mid','cent-right-mid','cent-right',
            'cent-left-bot','cent-mid-left-bot','cent-mid-bot','cent-mid-right-bot','cent-right-bot',
            'bot-left','bot-mid-left','bot-mid','bot-mid-right','bot-right'
        ]
        array5x5.forEach(createDivs)

    }

    //run the game
    ticTacToe()
}

//creates the grid from the radio button value

const createGrid = () => {
    document.querySelector('form').addEventListener('submit', (e)=>{
        gridSize = parseInt(document.querySelector('input[name=grid-size]:checked').value)
        makeGrid(gridSize)
        // reset()
        //document.querySelector('#change').classList.add('disabled')
        e.preventDefault()
    })
}

document.addEventListener('DOMContentLoaded', ()=>{
    // run the game with default value (3x3)
    ticTacToe()   
    // create grid from radio button value
    createGrid()
})