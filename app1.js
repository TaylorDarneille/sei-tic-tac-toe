// player 1 turn when clicked either player 1 or player 2 turn turn X or O
let moveTracker= "user"
let cellDivs= document.querySelectorAll(".col")
const resetButton= document.querySelector("#restartButton")
const containerDiv= document.querySelector("#container")
//const makeAMove =(e)=>{ 

var turn = 1;



function playerAction(elem) {
  if (elem.innerText != "") return; // if nothing is should not do anything if blank go to first line

  if (turn == 1) {
    elem.innerText = "X";
    document.getElementById("messagesection").innerText = "Player 2 Turn";
    turn = 2;
  } else if (turn == 2) {
    elem.innerText = "O";
    document.getElementById("messagesection").innerText = "Player 1 Turn";
    turn = 1;
  }
}
//if want to use this need to give divs id 
const ArrayofMoves = (index) => {
  //we need a place to store the index of clicked cells
  let arr = []; //we start with an empty array
  for (let i = 0; i < cellDivs.length; i++) {
    //we need this to run through the entire grid
    let cell = cellDivs[i]; //short way of accesing all the cells in the grid.
    if (cell.querySelector("p") !== null) {
      //if the div is not empty aka has a p tag with inntertext than push that innertext into my array
      arr.push(cell.querySelector("p").innerText);
    } else {
      arr.push(null); //if the celll hasnt been clicked then push null, so i can see it
    }
    console.log(arr); //show me the array
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
      //&& arr[0]==!null) {
      if (arr[0] === arr[6]) {
        //  if (arr[0] === !null){
        console.log("first column ");
        alert("winner!!!!!!!!");
      }
    }
  }if (arr[0] !== null) {
    if ((arr[0] === arr[4]) == !null) {
      //&& arr[0]==!null) {
      if (arr[0] === arr[8]) {
        //  if (arr[0] === !null){
        console.log("left diagnal ");
        alert("winner!!!!!!!!");
      }
    }
  }if (arr[2] !== null) {
    if ((arr[2] === arr[4]) == !null) {
      //&& arr[0]==!null) {
      if (arr[2] === arr[6]) {
        //  if (arr[0] === !null){
        console.log("right diagnal ");
        alert("winner!!!!!!!!");
      }
    }
  }
}
/////////////////// second winning method ////////////////////////////////////////
      // [0, 1, 2], done
      // [3, 4, 5], done
      // [6, 7, 8], done
      // [0, 3, 6], done
      // [1, 4, 7],done
      // [2, 5, 8], done 
      // [0, 4, 8], done
      // [2, 4, 6], done 
// } else if (index===0){ 
//   }if(arr[index]===arr[3]){
//       if (arr[index]===arr[6]){ 
//         console.log("first column horizontal")
//           alert("winner!!!!!!!!")
//       }
// }else if (index===1){ 
//   }if(arr[index]===arr[4]){
//     if (arr[index]===arr[7]){
//       console.log("middle column")
//         alert("winner!!!!!!!!")
//     }
// }else if (index===2){ 
//   }if(arr[index]===arr[5]){
//     if (arr[index]===arr[8]){
//       console.log("last column")
//         alert("winner!!!!!!!!")}
//       } 
//     }
//   }
// }
//correct code, put this on line 53 thru 66
// if (index===0){
//   //check div 1  
//   }if(arr[index]===arr[1]){
//       if (arr[index]===arr[2]){
//        alert("winner!!!!!!!!")
//   }
// } else if (index===0){
// //check div 1  
// }if(arr[index]===arr[3]){
//     if (arr[index]===arr[6]){
//       alert("winner!!!!!!!!")
//   }
// }
// }
const h1 = document.querySelector("h1")
function changeBackgroundH1 () {
  h1.style.background="pink"
}
h1.addEventListener("click", changeBackgroundH1)
///////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', ()=>{ 
  for (let i=0; i<cellDivs.length; i++){
    let square= cellDivs[i]
    //square.addEventListener("click",makeAMove)
  }
//   for (let i=0; i<cellDivs.length; i++){
//     let square= cellDivs[i]
//     square.addEventListener("click",makeAMove2)
//  }
})

//give id to divs targe section  1, 2, 3, see does this div text of x if so x= div one 
//if div and 1, 2 = x if so alert 

