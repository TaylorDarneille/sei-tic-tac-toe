//               VARIABLES
let moveTracker = "user";
let cellDivs = document.querySelectorAll(".square");
const resetButton = document.querySelector("#restartButton");
let containerDiv = document.querySelector("#container");

// const deleteAll= () =>{
//   let containerDiv= document.querySelector("#container")
//   while(containerDiv.firstChild){
//     containerDiv.firstChild.remove()
//   }
// }

// const remakeAll = () =>{
//   let containerDiv= document.querySelector("#container")
//   let newDiv1= document.createElement("div")
//   containerDiv.appendChild(newDiv1)
// }

// const newGame= (deleteAll, remakeAll) => {
// deleteAll()
// remakeAll()
// }

//resetButton.addEventListener("click", startAgain)

//       EVENT HANDLERS/ CALLBACK FUNCTIONS
const makeAMove = (e) => {
  let chosenSquare = e.target; //show me the cell that was triggered  by the event
  console.log(chosenSquare.classList[1]); //
  let typeOfMove = document.createElement("p"); //create a paragraph
  typeOfMove.classList.add("pClass"); // tried to fix a bug, so I added a class.
  while (!chosenSquare.firstChild) {
    // this means if the div hasnt been triggered do the following
    if (moveTracker === "user") {
      // user was defined at the top. so its going to be true, aka will give us an X.
      typeOfMove.innerText = "X"; //this is adding an "X" to the paragraph we created
      moveTracker = "user2"; //changed the value of moveTracker
    } else if (moveTracker === "user2") {
      //this is how we get the O
      typeOfMove.innerText = "O"; //put the O inside the paragraph we created
      moveTracker = "user"; //this will keep the pattern going over and over
    }
    chosenSquare.appendChild(typeOfMove); //attach the paragraph to the triggered cell
  }
  const selectedIndex = chosenSquare.classList[1];
  //accessing the 2nd class of the html
  ArrayofMoves(selectedIndex);
};
/////////////////////////////////////////////////////////////////
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
  }
  if (arr[1] !== null) {
    if ((arr[1] === arr[4]) == !null) {
      //&& arr[0]==!null) {
      if (arr[1] === arr[7]) {
        //  if (arr[0] === !null){
        console.log("middle column ");
        alert("winner!!!!!!!!");
      }
    }
  }
  if (arr[0] !== null) {
    if ((arr[0] === arr[3]) == !null) {
      //&& arr[0]==!null) {
      if (arr[0] === arr[6]) {
        //  if (arr[0] === !null){
        console.log("first column ");
        alert("winner!!!!!!!!");
      }
    }
  }
  if (arr[0] !== null) {
    if ((arr[0] === arr[4]) == !null) {
      //&& arr[0]==!null) {
      if (arr[0] === arr[8]) {
        //  if (arr[0] === !null){
        console.log("left diagnal ");
        alert("winner!!!!!!!!");
      }
    }
  }
  if (arr[2] !== null) {
    if ((arr[2] === arr[4]) == !null) {
      //&& arr[0]==!null) {
      if (arr[2] === arr[6]) {
        //  if (arr[0] === !null){
        console.log("right diagnal ");
        alert("winner!!!!!!!!");
      }
    }
  }
  if (arr[0] !== null) {
    if (arr[1] !== null) {
      if (arr[2] !== null) {
        if (arr[3] !== null) {
          if (arr[4] !== null) {
            if (arr[5] !== null) {
              if (arr[6] !== null) {
                if (arr[7] !== null) {
                  if (arr[8] !== null) {
                    console.log("this is a tie");
                    const userInput = prompt(
                      "this is a tie, do you want to play again?",
                      "yes or no"
                    );
                    if (userInput === "yes") {
                      console.log("we made it this far");
                      alert("Yay");
                    } else if (userInput === "no") {
                      alert("game over");
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

function startAgain() {
  moveTracker = "user";
  arr = [];
  let cellDivs = document.querySelectorAll(".square");
  while (cellDivs.firstChild) {
    cellDivs.firstChild.remove();
  }
}

resetButton.addEventListener("click", startAgain);

//resetButton.addEventListener("click", startAgain)

// const startAgain = () => {
//  while(containerDiv.firstChild){
//    containerDiv.firstChild.remove()
//  }
// }
// const resetButton= ()=>
// arr.splice(0, arr.length)

// resetButton.addEventListener("click", startAgain)

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
const h1 = document.querySelector("h1");
function changeBackgroundH1() {
  h1.style.background = "pink";
}
h1.addEventListener("click", changeBackgroundH1);
///////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < cellDivs.length; i++) {
    let square = cellDivs[i];
    square.addEventListener("click", makeAMove);
  }
  //   for (let i=0; i<cellDivs.length; i++){
  //     let square= cellDivs[i]
  //     square.addEventListener("click",makeAMove2)
  //  }
});