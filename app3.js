const h1 = document.querySelector("h1")
//h1.addEventListener("click", function() {
  //  h1.style.background="black"});
  function changeBackgroundH1 () {
    h1.style.background="pink"
}
h1.addEventListener("click", changeBackgroundH1)


//               VARIABLES 
let moveTracker= "user"
let cellDivs= document.querySelectorAll(".square")
const resetButton= document.querySelector("#restartButton")
const containerDiv= document.querySelector("#container")

//       EVENT HANDLERS/ CALLBACK FUNCTIONS

const makeAMove =(e)=>{
  let chosenSquare= e.target
  console.log(chosenSquare.classList[1])// gives the HTML element of the square that's clicked
  let typeOfMove= document.createElement("p")
  typeOfMove.classList.add("pClass")
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
  }
  const selectedIndex =chosenSquare.classList[1];
  //accessing the 2nd class of the html 
  ArrayofMoves(selectedIndex)
  }


document.querySelectorAll(".square");

/////////////////////////////////////////////////////////////////

const ArrayofMoves = (index) => {
  let arr = []
  for (let i=0; i<cellDivs.length; i++){
    let cell=cellDivs[i]
    if (cell.querySelector("p")!==null){
        arr.push(cell.querySelector("p").innerText)
      } else {arr.push(0)}
      console.log(arr)
    } 
if (index===0){
  //check div 1  
  }if(arr[index]===arr[1]){
      if (arr[index]===arr[2]){
       alert("winner!!!!!!!!")
  }
} else if (index===0){
//check div 1  
}if(arr[index]===arr[3]){
    if (arr[index]===arr[6]){
      alert("winner!!!!!!!!")
  }
}else if (index===1){
  //check div 1  
  }if(arr[index]===arr[4]){
      if (arr[index]===arr[7]){
        alert("winner!!!!!!!!")
    }
}else if (index===2){
  //check div 1  
  }if(arr[index]===arr[5]){
      if (arr[index]===arr[8]){
        alert("winner!!!!!!!!")
    }
} 
}









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








///////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', ()=>{ 
  for (let i=0; i<cellDivs.length; i++){
    let square= cellDivs[i]
    square.addEventListener("click",makeAMove)
  }
})