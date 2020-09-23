//               VARIABLES 
let moveTracker= "user"
let cellDivs= document.querySelectorAll(".square")
const resetButton= document.querySelector("#restartButton")
const containerDiv= document.querySelector("#container")
//       EVENT HANDLERS/ CALLBACK FUNCTIONS
const makeAMove =(e)=>{   
  let chosenSquare= e.target //show me the cell that was triggered  by the event
  console.log(chosenSquare.classList[1])// 
  let typeOfMove= document.createElement("p") //create a paragraph 
  typeOfMove.classList.add("pClass") // tried to fix a bug, so I added a class.
  while(!chosenSquare.firstChild){    // this means if the div hasnt been triggered do the following
    if (moveTracker=== "user"){  // user was defined at the top. so its going to be true, aka will give us an X.
      typeOfMove.innerText= "X"  //this is adding an "X" to the paragraph we created
      moveTracker ="user2"  //changed the value of moveTracker
    }else if( moveTracker=== "user2"){  //this is how we get the O
      typeOfMove.innerText="O"  //put the O inside the paragraph we created
      moveTracker="user"   //this will keep the pattern going over and over
    }
    chosenSquare.appendChild(typeOfMove)  //attach the paragraph to the triggered cell
  }
  const selectedIndex =chosenSquare.classList[1];
  //accessing the 2nd class of the html 
  ArrayofMoves(selectedIndex)
  }

/////////////////////////////////////////////////////////////////
const ArrayofMoves = (index) => {  //we need a place to store the index of clicked cells
  let arr = []  //we start with an empty array
  for (let i=0; i<cellDivs.length; i++){   //we need this to run through the entire grid
    let cell=cellDivs[i]  //short way of accesing all the cells in the grid.
  if (cell.querySelector("p")!==null){ //if the div is not empty aka has a p tag with inntertext than push that innertext into my array
     arr.push(cell.querySelector("p").innerText)
    }else {
      arr.push(null) //if the celll hasnt been clicked then push null, so i can see it
    } 
      console.log(arr) //show me the array 
      // [0, 1, 2],
      // [3, 4, 5],
      // [6, 7, 8],
      // [0, 3, 6],
      // [1, 4, 7],
      // [2, 5, 8],
      // [0, 4, 8],
      // [2, 4, 6]
      if (arr[0] === !null)  console.log(arr[0])
      {
        console.log(arr[0])
        if (arr[0] === arr[1]) {
          console.log(arr[1])
          if (arr[0] === arr[2]) {
            console.log(arr[2])
          //  if (arr[0] === !null){
            console.log("first row horizontal");
            alert("winner!!!!!!!!");
          }
        } 
      }  {
        console.log(arr[0])
        if (arr[0] === arr[3]) {
          console.log(arr[3])
          if (arr[0] === arr[6]) {
            console.log(arr[6])
          //  if (arr[0] === !null){
            console.log("first row horizontal");
            alert("winner!!!!!!!!");
          }
        } 
      }
    }
}
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
    square.addEventListener("click",makeAMove)
  }
})