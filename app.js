const createGrid = () => {
    for (let i = 0; i < 9; i++) {
        let square = document.createElement('div')
        square.classList.add('square')
        square.setAttribute('id', 'box'+i)
        document.querySelector('.board').appendChild(square)
    }
}
const whoWon = () => {
    
}





// const gameBoard = () => {
//     let div = document.createElement('div')
//     div.className = "board"
//     div.setAttribute('class', 'container')
    
//     // //div.addEventListener('click', changeDiv)
//     // document.body.appendChild(div) //make div a baby of container
    
// }

document.addEventListener("DOMContentLoaded", () => {
    createGrid()
})