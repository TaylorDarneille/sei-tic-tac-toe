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

// // const statusDisplay = document.querySelector('.game--status')

// // let gameActive = true

// // let currentPlayer = "X"

// // let gameState = ["", "", "", "", "", "", "", "", ""]

// // const winningMessage = () => `Player ${currentPlayer} has won!`;
// // const drawMessage = () => `Game ended in a draw!`;
// // const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`

// // statusDisplay.innerHTML = currentPlayerTurn();


// // const winningConditions = [
// //     [0, 1, 2],
// //     [3, 4, 5],
// //     [6, 7, 8],
// //     [0, 3, 6],
// //     [1, 4, 7],
// //     [2, 5, 8],
// //     [2, 5, 8],
// //     [0, 4, 8],
// //     [2, 4, 6]
// // ]

// // //Updating game based on the player move, as well as update the UI based on the players move.
// // const handleCellPlayed = (clickedCell, clickedCellIndex) => {
// // gameState[clickedCellIndex] = currentPlayer
// // clickedCell.innerHTML = currentPlayer
// // }

// // const handlePlayerChange = () => {
// //     currentPlayer = currentPlayer === "X" ? "O" : "X";
// //     statusDisplay.innerHTML = currentPlayerTurn();
// // }

// // const handleResultValidation = () => {
// // let roundWon = false
// // for (let i = 0; i <= 7; i++) {
// //     const winCondition = winningConditions[i]
// //     let a = gameState[winCondition[0]]
// //     let b = gameState[winCondition[1]]
// //     let c = gameState[winCondition[2]]
// //     if (a === '' || b === '' || c === '') {
// //         continue
// //     }
// //     if (a === b && b === c) {
// //         roundWon = true 
// //         break
// //     }
// // }
// // if (roundWon){
// //         statusDisplay.innerHTML = winningMessage()
// //         gameActive = false
// //         return
// //     }
// //     let roundDraw = !gameState.includes('')
// //     if (roundDraw){
// //         statusDisplay.innerHTML = drawMessage()
// //         gameState.gameActive = false
// //         return
// //     }
// //     handlePlayerChange()
// // }

// // const handleCellClick = (clickedCellEvent) => {
// // const clickedCell = clickedCellEvent.target
// // const clickedCellIndex = parseInt(
// //     clickedCell.getAttribute('data-cell-index')
// //   )
// //   if (gameState[clickedCellIndex] !== '' || !gameActive){
// //       return
// //   }
// //   handleCellPlayed(clickCell, clickedCellIndex)
// //   handleResultValidation()
// // }

// // const handleRestartGame = () => {
// //     gameActive = true;
// //     currentPlayer = "X";
// //     gameState = ["", "", "", "", "", "", "", "", ""];
// //     statusDisplay.innerHTML = currentPlayerTurn();
// //     document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "")
// // }

// // document.querySelectorAll('.data-cell-index').forEach(cell => cell.addEventListener('click', handleCellClick));
// // document.querySelector('.reset').addEventListener('click', handleRestartGame);


// // const statusDisplay = document.querySelector('.game--status');

// // let gameActive = true;
// // let currentPlayer = "X";
// // let gameState = ["", "", "", "", "", "", "", "", ""];

// // const winningMessage = () => `Player ${currentPlayer} has won!`;
// // const drawMessage = () => `Game ended in a draw!`;
// // const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

// // statusDisplay.innerHTML = currentPlayerTurn();

// // const winningConditions = [
// //     [0, 1, 2],
// //     [3, 4, 5],
// //     [6, 7, 8],
// //     [0, 3, 6],
// //     [1, 4, 7],
// //     [2, 5, 8],
// //     [0, 4, 8],
// //     [2, 4, 6]
// // ];

// // function handleCellPlayed(clickedCell, clickedCellIndex) {
// //     gameState[clickedCellIndex] = currentPlayer;
// //     clickedCell.innerHTML = currentPlayer;
// // }

// // function handlePlayerChange() {
// //     currentPlayer = currentPlayer === "X" ? "O" : "X";
// //     statusDisplay.innerHTML = currentPlayerTurn();
// // }

// // function handleResultValidation() {
// //     let roundWon = false;
// //     for (let i = 0; i <= 7; i++) {
// //         const winCondition = winningConditions[i];
// //         let a = gameState[winCondition[0]];
// //         let b = gameState[winCondition[1]];
// //         let c = gameState[winCondition[2]];
// //         if (a === '' || b === '' || c === '') {
// //             continue;
// //         }
// //         if (a === b && b === c) {
// //             roundWon = true;
// //             break
// //         }
// //     }

// //     if (roundWon) {
// //         statusDisplay.innerHTML = winningMessage();
// //         gameActive = false;
// //         return;
// //     }

// //     let roundDraw = !gameState.includes("");
// //     if (roundDraw) {
// //         statusDisplay.innerHTML = drawMessage();
// //         gameActive = false;
// //         return;
// //     }

// //     handlePlayerChange();
// // }

// // function handleCellClick(clickedCellEvent) {
// //     const clickedCell = clickedCellEvent.target;
// //     const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

// //     if (gameState[clickedCellIndex] !== "" || !gameActive) {
// //         return;
// //     }

// //     handleCellPlayed(clickedCell, clickedCellIndex);
// //     handleResultValidation();
// // }

// // function handleRestartGame() {
// //     gameActive = true;
// //     currentPlayer = "X";
// //     gameState = ["", "", "", "", "", "", "", "", ""];
// //     statusDisplay.innerHTML = currentPlayerTurn();
// //     document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
// // }

// // document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
// // document.querySelector('.game--restart').addEventListener('click', handleRestartGame);

// const startGame = () => {
//     for(let i = 1; i <= 9; i++){
//         clearBox(i)
//     }

//     document.turn = 'x'
//     document.winner = null
// }

// const nextMove = (square) => {
//     if(document.winner !== null){
//         alert('Games over!')
//     } else if(square.innerText == ''){
//         square.innerText = document.turn
//         switchTurn()
//     } 
// }

// const switchTurn = () => {
//     if(checkForWinner(document.turn)){
//         alert('You win !')
//         document.winner = document.turn
//     }
//     if(document.turn == 'x'){
//         document.turn = 'o'
//     } else {
//         document.turn = 'x'
//     }
// }

// const checkForWinner = (move) => {
//     //Before the boolean the false is stating there is no winner.
//     let result = false
//     //winning conditions
//     if( checkRow(1, 2, 3, move) || 
//         checkRow(4, 5, 6, move) || 
//         checkRow(7, 8, 9, move) || 
//         checkRow(1, 4, 7, move) || 
//         checkRow(2, 5, 8, move) || 
//         checkRow(3, 6, 9, move) || 
//         checkRow(1, 5, 9, move) || 
//         checkRow(3, 5, 7, move)) {
//         //Result becomes true since we have an array of winning conditions
//         result = true
//         }
//         return result
// }

// const checkRow = (a, b, c, move) => {
//     let result = false
//     if(getBox(a) == move && getBox(b) == move && getBox(c) == move){
//         result = true
//     }
//     return result
// }

// const getBox = (number) => {
//    return document.getElementById('s' + number).innerText
// }

// const clearBox = (number) => {
//     document.getElementById('s' + number).innerText = ''
// }

// document.addEventListener("DOMContentLoaded", startGame)




//==============
//My old LOVE :( this is the code i initally started.
//==============
const resetGame = document.querySelector('.reset')
const cellDivs = document.querySelectorAll('.cell')

let player1 = 'x'
let player2 = 'o'


let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']//add event listener/click, make a class in css that will change div to x or an o
]
//game board
// document.querySelector('game-board').addEventListener('click', (e) =>{
//     console.log('this is working')
// })



const handleReset = (e) => {
    console.log(e)
}
resetGame.addEventListener('click', handleReset)



//adding event listener to reset button

//loop through each of my cell divs and add a click event to each cell
for(let cellDiv of cellDivs){
    cellDiv.addEventListener('click', (e) => {
        let span = document.createElement('span')
        span.innerText = 'x'
        e.target.appendChild(span)
        console.log(cellDiv[1])
    })
}

// for(let i = 1; i <= 8; i++){
//     console.log(cellDivs)
// }


























//============================
//paolas code
//============================
//              VARIABLES 
// let moveTracker= "user"
// let cellDivs= document.querySelectorAll(".square")
// const resetButton= document.querySelector("#restartButton")
// const containerDiv= document.querySelector("#container")
// //       EVENT HANDLERS/ CALLBACK FUNCTIONS
// const makeAMove =(e)=>{   
//   let chosenSquare= e.target //show me the cell that was triggered  by the event
//   console.log(chosenSquare.classList[1])// 
//   let typeOfMove= document.createElement("p") //create a paragraph 
//   typeOfMove.classList.add("pClass") // tried to fix a bug, so I added a class.
//   while(!chosenSquare.firstChild){    // this means if the div hasnt been triggered do the following
//     if (moveTracker=== "user"){  // user was defined at the top. so its going to be true, aka will give us an X.
//       typeOfMove.innerText= "X"  //this is adding an "X" to the paragraph we created
//       moveTracker ="user2"  //changed the value of moveTracker
//     }else if( moveTracker=== "user2"){  //this is how we get the O
//       typeOfMove.innerText="O"  //put the O inside the paragraph we created
//       moveTracker="user"   //this will keep the pattern going over and over
//     }
//     chosenSquare.appendChild(typeOfMove)  //attach the paragraph to the triggered cell
//   }
//   const selectedIndex =chosenSquare.classList[1];
//   //accessing the 2nd class of the html 
//   ArrayofMoves(selectedIndex)
//   }
// /////////////////////////////////////////////////////////////////
// const ArrayofMoves = (index) => {
//   //we need a place to store the index of clicked cells
//   let arr = []; //we start with an empty array
//   for (let i = 0; i < cellDivs.length; i++) {
//     //we need this to run through the entire grid
//     let cell = cellDivs[i]; //short way of accesing all the cells in the grid.
//     if (cell.querySelector("p") !== null) {
//       //if the div is not empty aka has a p tag with inntertext than push that innertext into my array
//       arr.push(cell.querySelector("p").innerText);
//     } else {
//       arr.push(null); //if the celll hasnt been clicked then push null, so i can see it
//     }
//     console.log(arr); //show me the array
//     if (arr[0] !== null) {
//       if ((arr[0] === arr[1]) == !null) {
//         //&& arr[0]==!null) {
//         if (arr[0] === arr[2]) {
//           //  if (arr[0] === !null){
//           console.log("first row");
//           alert("winner!!!!!!!!");
//         }
//       }
//     }
//   }
//   if (arr[3] !== null) {
//     if ((arr[3] === arr[4]) == !null) {
//       //&& arr[0]==!null) {
//       if (arr[3] === arr[5]) {
//         //  if (arr[0] === !null){
//         console.log("middle row");
//         alert("winner!!!!!!!!");
//       }
//     }
//   }
//   if (arr[6] !== null) {
//     if ((arr[6] === arr[7]) == !null) {
//       //&& arr[0]==!null) {
//       if (arr[6] === arr[8]) {
//         //  if (arr[0] === !null){
//         console.log("bottom row");
//         alert("winner!!!!!!!!");
//       }
//     }
//   }
//   if (arr[2] !== null) {
//     if ((arr[2] === arr[5]) == !null) {
//       //&& arr[0]==!null) {
//       if (arr[2] === arr[8]) {
//         //  if (arr[0] === !null){
//         console.log("last column ");
//         alert("winner!!!!!!!!");
//       }
//     }
//   } if (arr[1] !== null) {
//     if ((arr[1] === arr[4]) == !null) {
//       //&& arr[0]==!null) {
//       if (arr[1] === arr[7]) {
//         //  if (arr[0] === !null){
//         console.log("middle column ");
//         alert("winner!!!!!!!!");
//       }
//     }
//   } if (arr[0] !== null) {
//     if ((arr[0] === arr[3]) == !null) {
//       //&& arr[0]==!null) {
//       if (arr[0] === arr[6]) {
//         //  if (arr[0] === !null){
//         console.log("first column ");
//         alert("winner!!!!!!!!");
//       }
//     }
//   }if (arr[0] !== null) {
//     if ((arr[0] === arr[4]) == !null) {
//       //&& arr[0]==!null) {
//       if (arr[0] === arr[8]) {
//         //  if (arr[0] === !null){
//         console.log("left diagnal ");
//         alert("winner!!!!!!!!");
//       }
//     }
//   }if (arr[2] !== null) {
//     if ((arr[2] === arr[4]) == !null) {
//       //&& arr[0]==!null) {
//       if (arr[2] === arr[6]) {
//         //  if (arr[0] === !null){
//         console.log("right diagnal ");
//         alert("winner!!!!!!!!");
//       }
//     }
//   }
  
// }



// /////////////////// second winning method ////////////////////////////////////////


//       // [0, 1, 2], done
//       // [3, 4, 5], done
//       // [6, 7, 8], done
//       // [0, 3, 6], done
//       // [1, 4, 7],done
//       // [2, 5, 8], done 
//       // [0, 4, 8], done
//       // [2, 4, 6], done 

// // } else if (index===0){ 
// //   }if(arr[index]===arr[3]){
// //       if (arr[index]===arr[6]){ 
// //         console.log("first column horizontal")
// //           alert("winner!!!!!!!!")
// //       }
// // }else if (index===1){ 
// //   }if(arr[index]===arr[4]){
// //     if (arr[index]===arr[7]){
// //       console.log("middle column")
// //         alert("winner!!!!!!!!")
// //     }
// // }else if (index===2){ 
// //   }if(arr[index]===arr[5]){
// //     if (arr[index]===arr[8]){
// //       console.log("last column")
// //         alert("winner!!!!!!!!")}
// //       } 
// //     }
// //   }
// // }
// //correct code, put this on line 53 thru 66
// // if (index===0){
// //   //check div 1  
// //   }if(arr[index]===arr[1]){
// //       if (arr[index]===arr[2]){
// //        alert("winner!!!!!!!!")
// //   }
// // } else if (index===0){
// // //check div 1  
// // }if(arr[index]===arr[3]){
// //     if (arr[index]===arr[6]){
// //       alert("winner!!!!!!!!")
// //   }
// // }
// // }
// const h1 = document.querySelector("h1")
// function changeBackgroundH1 () {
//   h1.style.background="pink"
// }
// h1.addEventListener("click", changeBackgroundH1)
// ///////////////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', ()=>{ 
//   for (let i=0; i<cellDivs.length; i++){
//     let square= cellDivs[i]
//     square.addEventListener("click",makeAMove)
//   }
// //   for (let i=0; i<cellDivs.length; i++){
// //     let square= cellDivs[i]
// //     square.addEventListener("click",makeAMove2)
// //  }
// })