//Define variables
//Be able to place X on grid
//Be able to place Y on grid
//check for wins
//alert wins



//greeting alerts
// const greeting = prompt("Welcome to Tic Tac Toe!?")
// const choice = prompt ("Do you want to be X or Y?")

 
const platerOne = "X"
const playerTwo = "O"

if (choice === "X") {

}


//Event listener
// let move = document.querySelector('div','#cell0')
// move.addEventListener('click', (event) => {
//   // console.log(event.target.id) //to check which cell is being clicked
// })

//Event listener
let moveOne = document.querySelector('div','#cell0')
moveOne.addEventListener('click', (event) => {
  event.target.innerText = "X"
})

//Event listener
let move = document.querySelector('div','#cell0')
move.addEventListener('click', (event) => {
  event.target.innerText = (choice)
})


document.addEventListener('DOMContentLoaded', () =>{

})

