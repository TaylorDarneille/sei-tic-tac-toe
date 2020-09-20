

// const buttonX = document.querySelector("#X")
// const buttonO = document.querySelector("#O")
// const choices = ["x","o"]
// document.querySelector("#scoreX").innerText = Xscore()
// document.querySelector("#scoreO").innerText = Oscore()

//    const playerSelect = () => {
//        //if PlayerX button is pushed start input at Xo[0]
//        //if PlayerY button is pushed start input as Xo[1]
//    }
// const scoreX;
// const scoreY;
let turn = 1;
const choices =["X","O"]

const makePink = (event) =>{
    event.target.style.backgroundColor = "pink"
}


const playerMove = (event) => {
    // playerSelect()
   const cell = event.target    
    if (turn%2 === 0){
        cell.innerHTML = choices[0]
    }
    else {
        cell.innerHTML= choices[1]
  }
  turn = turn+1
}
    


const gameBoard =()=> {
    
    const div = document.querySelectorAll(".cell")
    console.log(div)
    for (let i=0; i<div.length; i++){
        div[i].addEventListener("click", playerMove)
    }
     
}


document.addEventListener("DOMContentLoaded", ()=>{
    gameBoard()

//funciton that checks for win condition
})