const h1 = document.querySelector("h1");
//h1.addEventListener("click", function() {
//  h1.style.background="black"});
function changeBackgroundH1() {
  h1.style.background = "pink";
}
h1.addEventListener("click", changeBackgroundH1);
//////////////////////////////////////////////////////////////////

// // // - the function must be able to compare the choices in the grid to see if they're all zeros or x's
// // // - the function must be able to tell whether the player has won or if it's a tie
// // // - the function must be able to make comparisons diagonally, vertically and horizontally
// // // - add event listener for when the user clicks on grid
// // //  determine which space on the grid the user has clicked on
// // //  determine which space on the grid the computer has chosen
//               VARIABLES
let moveTracker = "user";
let cellDivs = document.querySelectorAll(".square");
const resetButton = document.querySelector("#restartButton");
const containerDiv = document.querySelector("#container");


//       EVENT HANDLERS/ CALLBACK FUNCTIONS


const buttonClicked =(event)=>{


}
const makeAMove = (e) => {
  let chosenSquare = e.target;
  console.log(chosenSquare); // gives the HTML element of the square that's clicked
  let typeOfMove = document.createElement("p");
  typeOfMove.classList.add("pClass");
  // doesn't allow person to click in the square more than once
   if (!chosenSquare.firstChild) {
    // if the cell hasn't been clicked then...
    if (moveTracker === "user") {
      //.... the person clicking is user
      typeOfMove.innerText = "X"; // makes X the first move always
      moveTracker = "user2"; // after the cell has been clicked the the mover tracker changes to user 2. Here we change the value of move tracker
    } else if (moveTracker === "user2") {
      typeOfMove.innerText = "O"; // if mover tracker changes to user2 the type of move changes to "o"
      moveTracker = "user"; // then we move the movertracker back to user
    }
    chosenSquare.appendChild(typeOfMove); // shows which cell was clicked by appending a paragraph of X or O to the chosen cell
  }
  const selectedIndex = chosenSquare.classList[1];
  //accessing the 2nd class of the html
  ArrayofMoves(selectedIndex);
};

document.querySelectorAll(".square");

/////////////////////////////////////////////////////////////////

const ArrayofMoves = (index) => {
  let arr = []; // this is an empty array into which we will push the index of the clicked cells to compare for winning conditions.
  for (let i = 0; i < cellDivs.length; i++) {
    let cell = cellDivs[i]; // gives the index of the cell that's been clicked

    if (cell.querySelector("p") !== null) {
      // if the clicked cell has a paragraph, push the paragraph/inner text to the array
      arr.push(cell.querySelector("p").innerText); // go through every cell and if there's nothing in it ie there's null push the value of X or O in the array.
    } else {
      arr.push(null);
    }
    // console.log(arr)

    // WINNING CONDITIONS
    if (arr[0] !== null) {
      if ((arr[0] === arr[1]) == !null) {
        //&& arr[0]==!null) {
        if (arr[0] === arr[2]) {
          //  if (arr[0] === !null){
          console.log("first row");
          alert("winner!!!!!!!!");
        }
      }
    }
  }
  if (arr[3] !== null) {
    if ((arr[3] === arr[4]) == !null) {
      //&& arr[0]==!null) {
      if (arr[3] === arr[5]) {
        //  if (arr[0] === !null){
        console.log("middle row");
        alert("winner!!!!!!!!");
      }
    }
  }
  if (arr[6] !== null) {
    if ((arr[6] === arr[7]) == !null) {
      //&& arr[0]==!null) {
      if (arr[6] === arr[8]) {
        //  if (arr[0] === !null){
        console.log("bottom row");
        alert("winner!!!!!!!!");
      }
    }
  }
  if (arr[2] !== null) {
    if ((arr[2] === arr[5]) == !null) {
      //&& arr[0]==!null) {
      if (arr[2] === arr[8]) {
        //  if (arr[0] === !null){
        console.log("last column ");
        alert("winner!!!!!!!!");
      }
    }
  } if (arr[1] !== null) {
    if ((arr[1] === arr[4]) == !null) {
      //&& arr[0]==!null) {
      if (arr[1] === arr[7]) {
        //  if (arr[0] === !null){
        console.log("middle column ");
        alert("winner!!!!!!!!");
      }
    }
  } if (arr[0] !== null) {
    if ((arr[0] === arr[3]) == !null) {
      
      if (arr[0] === arr[6]) {
        // console.log("first column ");
        alert("winner!!!!!!!!");
      }
    }
  }if (arr[0] !== null) {
    if ((arr[0] === arr[4]) == !null) {
      if (arr[0] === arr[8]) {
        
        // console.log("left diagonal ");
        alert("winner!!!!!!!!");
      }
    }
  }if (arr[2] !== null) {
    if ((arr[2] === arr[4]) == !null) {
      if (arr[2] === arr[6]) {
        
        console.log("right diagnal ");
        alert("winner!!!!!!!!");
      }
    }
  }
}

///////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < cellDivs.length; i++) {
    let square = cellDivs[i];
    square.addEventListener("click", makeAMove)
    resetButton.addEventListener("click", buttonClicked)
  }
})
