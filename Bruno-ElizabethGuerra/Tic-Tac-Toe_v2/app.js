//Next up
// User can select 3x3, 4x4, or 5x5 grid
    // need to create grids in the DOM
    // erase previous grid
    // maybe use classes so I don't have to rewrite everything? // 3x3 as super class and then build 4x4 and 5x5?
// play against AI

//Create the playing grid with the DOM
const makeGrid = (num) => {
    const board = document.querySelector('.board')

    while (board.firstChild) board.removeChild(board.firstChild)

    const createDivs = (idName) => {
        let div = document.createElement('div')
        div.setAttribute('id',idName)
        div.classList.add('square')
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
     } else if (num===4){
        board.setAttribute('id','board-4x4')
        const array4x4 = [
            'top-left','top-mid-left','top-mid-right','top-right',
            'cen-left-top','cen-mid-left-top','cen-mid-right-top','cen-right-top',
            'cen-left-bot','cen-mid-left-bot','cen-mid-right-bot','cen-right-bot',
            'bot-left','bot-mid-left','bot-mid-right','bot-right'
        ]
        array4x4.forEach(createDivs)
     } else if (num===5){
        board.setAttribute('id','board-5x5')
        const array5x5 = [
            'top-left','top-mid-left','top-mid','top-mid-right','top-right',
            'cen-left-top','cen-mid-left-top','cen-mid-top','cen-mid-right-top','cen-right-top',
            'cent-left','cen-left-mid','cent-mid','cen-right-mid','cent-right',
            'cen-left-bot','cen-mid-left-bot','cen-mid-bot','cen-mid-right-bot','cen-right-bot',
            'bot-left','bot-mid-left','bot-mid','bot-mid-right','bot-right'
        ]
        array5x5.forEach(createDivs)

    }
    else{return}
}
//creates the grid from the radio button value
const createGrid = () => {
    document.querySelector('form').addEventListener('submit', (e)=>{
        let gridSize = parseInt(document.querySelector('input[name=grid-size]:checked').value)
        makeGrid(gridSize)
        e.preventDefault()
    })
}



//Turn Counter                                
let counter = 0


//This function runs after every turn and check for 3 win conditions: X wins, O wins, or Tie    
const winCond = () => {
    const topLeft = document.querySelector('#top-left')
    const topMid = document.querySelector('#top-mid')
    const topRight = document.querySelector('#top-right')
    const centLeft = document.querySelector('#cent-left')
    const centMid = document.querySelector('#cent-mid')
    const centRight = document.querySelector('#cent-right')
    const botLeft = document.querySelector('#bot-left')
    const botMid = document.querySelector('#bot-mid')
    const botRight = document.querySelector('#bot-right')
    
    const grid = {
        topRow: [topLeft,topMid,topRight],
        centRow: [centLeft,centMid,centRight],
        botRow: [botLeft,botMid,botRight],
        leftCol: [topLeft,centLeft,botLeft],
        midCol: [topMid,centMid,botMid],
        rightCol: [topRight,centRight,botRight],
        rightDiag: [botRight,centMid,topLeft],
        leftDiag: [botLeft,centMid,topRight]
    }
    
    const squares = document.querySelectorAll('.square')
    const gameOver = document.querySelector('#game-over')
    
    //looks through arrays and determines if a player has won   
    if (counter < 9) {
        for (const arr in grid) {
            if (grid[arr].every(square => square.classList.contains('x'))) {
                //   console.log('x wins!')
                squares.forEach(square => square.classList.add('disabled'))
                gameOver.innerText = 'x wins!'
            }
            else if (grid[arr].every(square => square.classList.contains('o'))) {
                //    console.log('o wins!')
                squares.forEach(square => square.classList.add('disabled'))
                gameOver.innerText = 'o wins!'
            }
        }
    }   
    else if (counter === 9) {
        // Need something to check if one side has won before declaring a tie
        // only works for direction / - all others still say it's a tie
        for (const arr in grid) {
            if (grid[arr].every(square => square.classList.contains('x'))) {
                //   console.log('x wins!')
                squares.forEach(square => square.classList.add('disabled'))
                gameOver.innerText = 'x wins!'
            }
            else if (grid[arr].every(square => square.classList.contains('o'))) {
                //    console.log('o wins!')
                squares.forEach(square => square.classList.add('disabled'))
                gameOver.innerText = 'o wins!'
            }
            else {
                //   console.log('It\'s a tie!')
                squares.forEach(square => square.classList.add('disabled'))
                gameOver.innerText = 'It\'s a tie!'
            }
        }
    }
}

//This function is the actual gamplay // it runs the winCond function after every turn to see if the game is over
const play = (e) => {
    const xTurn = (e) => e.target.classList.add('x', 'played')
    const oTurn = (e) => e.target.classList.add('o','played')
    const gameOver = document.querySelector('#game-over')
    if (counter % 2 === 0) {
        xTurn(e)
        counter++
        gameOver.innerText = 'o\'s turn!'
        //    console.log(counter)
        winCond()
    } else {
        oTurn(e)
        counter++
        gameOver.innerText = 'x\'s turn!'
        //    console.log(counter)
        winCond()
    }
}


//This function sets the game up by adding event listeners to all the squares and running code for the reset button
const ticTacToe = () => {
    let squares = document.querySelectorAll('.square')
    for (var i = 0; i<squares.length;i++){
        squares[i].addEventListener('click',play)
    }  
    
    const reset = document.querySelector('#reset')
    reset.addEventListener('click', () => {
        squares.forEach(square => {
            square.setAttribute('class','square')
        })
        document.querySelector('#game-over').innerText = 'Click a square to start playing!'
        counter = 0
    })
}




document.addEventListener('DOMContentLoaded', ()=>{   
    // create grid from radio button value
    createGrid()
    //run the game
    ticTacToe()
})