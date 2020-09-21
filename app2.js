//          HTML ELEMENTS & GLOBAL VARIABLES 

const statusDiv = document.querySelector(".status");
const resetDiv = document.querySelector(".reset");
const cellDivs = document.querySelectorAll(".game-cell")

console.log(cellDivs)

//                  GAME VARIABLES

let gameIsLive = true;
let xIsNext = true;

//                   EVENT HANDLERS aka CALLBACKS

// const handleReset = (e) => {
//     console.log(e);
// }

// const handleCellClick = (e) => {
//     const classList = e.target.classList
//     const location = classList[1]

//     if (classList[2]==="x" || classList[2]==="O"){
//         return;
//     }

//     if (xIsNext === true) {
//         e.target.classList.add("x");
//         xIsNext===!true;
//     } else {
//         e.target.classList.add("O");
//         xIsNext===!!true;
//     }
// }

//                  EVENT LISTENERS


//changes all of them to x
const changeToX = () => {
    const cellDivs = document.querySelectorAll(".game-cell")
    for (let i=0; i<cellDivs.length; i++) {
        cellDivs[i].innerText="X"
    }
}

cellDivs.addEventListener("click", changeToX())



const 

// resetDiv.addEventListener("click",handleReset )

//  for (let i=0; i<cellDivs.length; i++) {
//      cellDivs[i].addEventListener("click",handleCellClick)
//  }


