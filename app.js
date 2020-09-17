const grid = document.getElementById('grid-container')

let clicker = 0 // counter to 0 or 1 to indicate turn?

// event listener to play x
const playX = (event) => {
    // if(event.target.classList !== 'o' || event.target.classList !== 'x') {
        event.target.setAttribute('class', 'x')
        event.target.innerText = 'X'
}

// event listener to play o
const playO = (event) => {
        event.target.setAttribute('class', 'o')
        event.target.innerText = 'O'
}

const logic = (event) =>{
    if (clicker === 0) {
        playX(event)
        clicker = 1
    } else if (clicker === 1) {
        playO(event)
        clicker = 0
    }
}

const main = () => {
    let squares = document.querySelectorAll('.grid-item')
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', logic)
    }
}

// start game which includes the reset
const startGame = () => {
    // when game starts, it will clear the board
    while (grid.firstChild) { 
        grid.removeChild(grid.firstChild)
    }

    // creating the divs on the grid
    for (let i =0; i < 9; i++) {
        let divGrid = document.createElement('div')
        divGrid.classList.add('grid-item')
        document.getElementById('grid-container').appendChild(divGrid)
    }

    // runs the function for the x and o click event listeners
    main()
}

// const click = () => {
//     let slots = document.querySelectorAll('grid-item')
//     for (let i = 0; i < slots.length; i++) {
//         slots[i].addEventListener('click', playO)
//     }
// }

document.addEventListener('DOMContentLoaded', ()=>{
    startGame()
    reset.addEventListener('click', startGame)
})