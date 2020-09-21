// Tic Tac Toe!

//1. Make a grid that is 3 by 3 
//done with html

//2. Create two different variables.


//3. Variables should be X and O


//4. Player 1 gets X  consistent
//5. player 2 gets O   consistent
//6. This must be consistant throughout the entire game!
//7. Each player will have their own turn, player 1 will put their variable of choice on the grid, by clicking on any square of their choice that does not already have a variable on.  
//8. Once player 1 selects their square of choice, it is now player 2 turn.
//9. Player 2 can now select to put their varialble on the grid. They can only select a square that does not have a variable already on it.
//10. Each player can have up to 3 turns.
//11. Optional, maybe put an alert that says whos turn it is. Also, maybe add another alert that stops a player from cliking anything if it is not their turn.
//12. Alert  when game ends. If there is a winner, alert the name.

// How to win?

//1. Whichever player is able to get 3 of their variables in a row wins. Row has a flexible meaning, it can be up, down or diagnol. As long as the variables are connected to eachother.

//2. Possibilty of a tie. If players are unable to create a row, the game ends in a tie. Maybe add an alert that says Tied Game.

//3. I would have a score board somewhere in the page. Tic Tac Toe is a fun game & players will most likely play more than once. Make sure the scoreboard is keeping track of who is winning the game. Everytime a player wins, add +1 to the scoreboard. If it is a tie, don't add anything


//AFTER GAME ENDS

//1. Give the players an option to play again. Maybe set an alert and say, play again? I would also give them the option to choose another variable. Maybe they want to be X now instead of O.




//////////////////////////////////////////////////////////////////

function cellClicked(){
  
}

let square= document.querySelectorAll(".square")
  for (let i=0; i<square.length; i++){
    square.addEventListener('click', cellClicked)
  }

    cell1.addEventListener("click", function() {
        cell1.style.background="black"});

//////////////////////////////////////////////////////




//const squareElements= document.getElementsByClassName("square");
const h1 = document.querySelector("h1")
//h1.addEventListener("click", function() {
  //  h1.style.background="black"});

  function changeBackgroundH1 () {
    //h1.style.background="black"
    h1.classList.add("black")
}
h1.addEventListener("click", changeBackgroundH1)



//////                       variables:

let moveTracker="user"

let cellDivs= document.querySelectorAll(".square")

const resetButton=document.querySelector("#restartButton")

const containerDiv=document.querySelector("#container")


////          EVENT HANDLERS AKA CALLBACKS

const handleReset = (e)=>{
  console.log(e)
}


const makeAMove =(e)=>{
    let chosenSquare= e.target
    console.log(chosenSquare)// gives the HTML element of the square that's clicked
  ​
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
      // console.log(typeOfMove.innerText)
      }
      // checkforWin()
     
    }


const randomFunc= (e)=>{
for (let i=0; i<cellDivs.length; i++){
  let square= cellDivs[i]
  square.addEventListener("click",makeAMove)
}
}
 


document.addEventListener("DOMContentLoaded", ()=> {

const cell5 = document.getElementById("cell5")
cell5.addEventListener("click", ()=>{
  cell5.classList.add("classofX")
  randomFunc()
} )
 })











// const gridGenerator = () => {
// for (let i = 0; i < 9; i++) {
//     let div = document.createElement('div')
//     div.classList.add('square')
//     //div.addEventListener('click', changeDiv)
//    document.querySelector('#container').appendChild(div) //make div a baby of container
// }
// }


// document.addEventListener("DOMContentLoaded", ()=> {
//    gridGenerator()
// })

