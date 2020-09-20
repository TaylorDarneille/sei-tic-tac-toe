
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
  //remove event listener after X or O is added to div
  cell.removeEventListener("click", playerMove)
  //update turn by 1 
  turn = turn+1
  checkWinner()
}
    
const removeListener = ()

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

const checkWinner = () =>{
    const div1 = document.querySelector("#div1").innerText
    const div2 = document.querySelector("#div2").innerText
    const div3 = document.querySelector("#div3").innerText
    const div4 = document.querySelector("#div4").innerText
    const div5 = document.querySelector("#div5").innerText
    const div6 = document.querySelector("#div6").innerText
    const div7 = document.querySelector("#div7").innerText
    const div8 = document.querySelector("#div8").innerText
    const div9 = document.querySelector("#div9").innerText
    if (div1 === div2 && div2 === div3){
        alert("Player " + div1+ " is the winner!")
        gameBoard()
    }else if (div4 === div5 && div5 === div6){
        alert("Player " + div4+ " is the winner!")
        gameBoard()
    }else if (div7 === div8 && div8 === div9){
        alert("Player " + div7+ " is the winner!")
        gameBoard()
    }else if (div1 === div5 && div5 === div9){
        alert("Player " + div1+ " is the winner!")
        gameBoard()
    }else if (div3 === div5 && div5 === div7){
        alert("Player " + div3+ " is the winner!")
        gameBoard()
    }
//     const div = div.innerHTML
}