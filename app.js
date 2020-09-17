//WHAT I NEED HELP WITH:
// 1. Switch Player function. How to switch to the other player AFTER their turn is complete?
// 2. Check for Winner Function - how to compare makeArrays to the winCombinations.
// 3. How to keep a square from being replayed?
// 4. Freeze board after a win/draw.
// 5. Clear board with my reset button.
// 6. Displaying whose turn it is. Is this with an alert? Do I add a header when the player switches?



/////////////////variables/////////////////

// const human = 'X'
// const computer = 'O'
let currentPlayer = 'X'
const boxes = document.querySelectorAll('.box')
const winCombinations = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], 
    [0, 4, 8], 
    [6, 4, 2],
]


//////////////play functions////////////////

const currentMove = () => {
     
        if (currentPlayer === 'X') {
            for (const box of boxes) {
                box.addEventListener('click', () => {
                    box.innerText= currentPlayer
                    box.classList.add('x')
                    switchPlayer()
                })
             }
        } else if (currentPlayer === "O") {
            let randomNum = Math.floor(Math.random() * 9)
            let generateIDName = `#${randomNum}`
            let computerBox = document.querySelector(generateIDName)
            computerBox.innerText = currentPlayer
            computerBox.classList.add('o')
            switchPlayer()
        }
} 

// const switchPlayer = () => {
//         if (currentPlayer === 'X') {
//             currentPlayer = 'O'
//          } else if (currentPlayer === 'O') {
//         currentPlayer = 'X'
//         }
// }  

function switchPlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

currentMove()


/////////////////////winning function//////////////////////



const makeArrays = () => {
    const xClasses = document.querySelectorAll('.x')
    console.log(xClasses)
    const oClasses = document.querySelectorAll('.o')
    console.log(oClasses)
    //loop over the xClasses array
    //loop over the winCombinations array
    //if xClasses array has same values as the options in the winCombinations array, declare X the winner
    //else if oClasses array has same vales as the options in the winCombinations array, declare o the winner
    //else, declare draw (?)
}

////////////////////reset function//////////////////////

//when button is clicked
//invoke a board reset