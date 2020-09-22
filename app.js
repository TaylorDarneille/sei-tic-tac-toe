const h1 = document.querySelector("h1")
//h1.addEventListener("click", function() {
  //  h1.style.background="black"});
  function changeBackgroundH1 () {
    h1.style.background="pink"
}
h1.addEventListener("click", changeBackgroundH1)
//////////////////////////////////////////////////////////////////


// // // - the function must be able to compare the choices in the grid to see if they're all zeros or x's
// // // - the function must be able to tell whether the player has won or if it's a tie
// // // - the function must be able to make comparisons diagonally, vertically and horizontally
// // // - add event listener for when the user clicks on grid
// // //  determine which space on the grid the user has clicked on
// // //  determine which space on the grid the computer has chosen

// // this initializes the first move to be for the user to start the game
let moveTracker= "user"
// // winning combos




// let board= [
//   // row1 
//   ["cell1", "cell2", "cell3"],
//   // row2
//   ["cell4", "cell5", "cell6"],
//   //row3
//   ["cell7", "cell8", "cell9"]
// ]

// const fillBoard =()=>{

// }

// // checkwin will run after every move to see if the game has been won
// // first we need to grab all the cells separately and check what symbol they have
const checkWin= ()=>{

  

  

// let cell1= .innerHTML
// console.log(cell1)



}
// // console.log(cell1)

// // grab the cells. This creates an array of all the divs which is equal to nine pieces
let cellDivs= document.querySelectorAll(".square")
// console.log(cellDivs)


// //grab the reset button
const resetButton= document.querySelector("#restartButton")

// // grab the container Div
const containerDiv= document.querySelector("#container")




// // EVENT HANDLERS/ CALLBACK FUNCTIONS

// const handleReset= (e)=>{

// console.log(e)

// }

const makeAMove =(e)=>{

  let chosenSquare= e.target
  console.log(chosenSquare)// gives the HTML element of the square that's clicked

  let typeOfMove= document.createElement("p")
 
  // doesn't allow person to click in the square more than once
  while(!chosenSquare.firstChild){
    if (moveTracker=== "user"){
      typeOfMove.innerText= "X"
      moveTracker ="user2"
    }else if( moveTracker=== "user2"){
      typeOfMove.innerText="O"
      moveTracker="user"
    }
    chosenSquare.appendChild(typeOfMove)
    // console.log(typeOfMove.innerHTML)
      

    
    }
    // checkforWin()
   
  }

// // EVENT LISTENERS

// // for reset button

// console.log(resetButton)

// // 





///////////////////////////////////////////////////////// starting from scratch again
// Grab the cells
// cellDivs= document.querySelectorAll(".square")

// console.log(cellDiv)





document.addEventListener('DOMContentLoaded', ()=>{ 
  
  

  for (let i=0; i<cellDivs.length; i++){
    let square= cellDivs[i]
    
    
    
   
    square.addEventListener("click",makeAMove)
  }
})