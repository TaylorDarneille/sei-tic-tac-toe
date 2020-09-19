const createGrid = () => {
    for (let i = 0; i < 9; i++){
        let cell = document.createElement('div')
        cell.classList.add('cell')
        document.querySelector('.board').appendChild(cell)
    }
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