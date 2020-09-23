
//1. Make a grid that is 3 by 3
//2. Create two different variables.
//3. Variables should be X and O
//4. Player 1 gets X  consistent
//5. player 2 gets O   consistent
//6. This must be consistant throughout the entire game!
//7. Each player will have their own turn, player 1 
//   will put their variable of choice on the grid, by clicking on any
//   square of their 
//   choice that does not already have a variable on.
//8. Once player 1 selects their square of choice, 
    //it is now player 2 turn.
//9. Player 2 can now select to put their
     // varialble on the grid. 
    //They can only select a square that does 
    //not have a variable already on it.

// This will be used to indicate whether or not to 
// draw an `X` or an `O`.
// top, middle, bottom
// target.event x or o
// document.addEventListener('DOMContentLoaded', ()=>{
// One.addEventListerner("click", addX0)}




//-------------EVENT LISTENERS----------//

// Add eventlisterner click plus new function

// Use target to get the div you clicked on

document.addEventListener('DOMContentLoaded', ()=>{    
document.querySelector(".top").addEventListener("click", (event)=> {
    event.target.top.
})

}) 

//--------------VARIABLES------------------//

// Do I need this if I already have a container div with specific ids and classes?
// let board = [
//     [' ', ' ', ' '],
//     [' ', ' ', ' '],
//     [' ', ' ', ' '],
// ];

// How to let the player choose
let player1= "x"
let player2 ="o"

const winCombos = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,5,9],
    [3,5,7],
    [1,4,7],
    [2,5,8],
    [3,6,9]
]


// let turnCount = 0
// let turn count= 0 % 2


// * You will also need a variable to keep track of moves.
const moveTracker







//--------------FUNCTIONS-----------------//

// Do I need this if I alreaday have board with divs assigned ids and classes?
// const makeBoard = () => {
//     const board = document.querySelectorAll("#container")
//     for(container of board) {
//         container.addEventListerner("click" (event) => {
//             event.target.idName
//         })
//     }
//    }

// Select elements and attach functions via event listeners
const div1 = document.querySelector(.1)
div1.innerText= "X"

// Make a function that adds the event listeners
// to each div class top middle bottom and then add x or o


// Write startGame function
startGame = () => {
    const container = document.querySelector("#container");
    for(i = 0; i < container.length; i++)
    container[i].innerText = ""
    container[i].addEventListener("click", turnClick)
}

// Make the callback function that tells the div what to do when its clicked
// Write function that has something happen when each specific div is clicked
turnClick = () => {
    turn(container.target.id,)
    
}

turn = (containerId, player) => {
    document.getElementById(containerId).innerText = player;
}


// Need to make a function that adds 
// an x and an o alternatley? 
// Make an array of choices

makeMark = () => {
    const choices = ["x", "o"]
    div.innerText = choices[turnCount%2] //alternate between 0 and 1
    if(choices[i] === 0)
    console.log("X")
    } else if (choices[i]=== 1 )
    console.log("O")

// Make an array of choices
const addXo = () => {
const choices = ["x", "o"]
div.One.innerText = choices[count%2] //alternate between 0 and 1
if(choices[i] === 0)
console.log("X")
} else if (choices[i]=== 1 )
console.log("O")

//Make a Check Winner Function






// Make a Check Draw Function
// If all the boxes are selected with no winning combinations

 














































