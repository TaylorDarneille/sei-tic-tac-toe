// Variables used throughout the entire array
const status = document.querySelector('.status')
let divs = document.querySelectorAll('.box')
const divsArray = Array.from(divs)
let currentPlayer = "User"
let turns = 0
let userWins = 0
let compWins = 0
//Create an array with the options to win
const winningOptions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


////============FUNCTIONS THAT RUN THROUGHOUT THE GAME============////


////============1.USER TURN============////
const boxClick = (event) => {
    //grab the index of the div that was clicked (target)
    const playerTurn = divsArray.indexOf(event.target)
    console.log(playerTurn)
    //Check if the box has already been clicked - prevent this from happening again
    // If no....
    if (divsArray[playerTurn].getAttribute('class') === 'box') {
        divsArray[playerTurn].innerText = 'X'
        divsArray[playerTurn].setAttribute('class', 'red')
        // If yes....   
    } else if (divsArray[playerTurn].innerText !== ''){
        console.log(divsArray[playerTurn])
        alert('Try again. You cannot select a spot that has already been filled.')
        boxClick()
    }
    //update the divsArray to remove the current index and replace it with the new that has a new class assigned
    divsArray.splice(playerTurn, 1, divsArray[playerTurn])
    console.log(divsArray[playerTurn])
    turns++
    //change the user
    currentPlayer = "Computer"
    //change the status of the game
    status.innerText = `Game Status: It\'s the ${currentPlayer}'s turn.`
	checkStatus()
    //wait 2 secs for the computer to execute it's turn
    setTimeout(computerTurn, 2000)
}

////============2.COMPUTER TURN============////
const computerTurn = () => {
    //create a number at random from the available slots
    let computerSlot = Math.floor(Math.random() * 9)
    //grab the div of the divsArray at that number    
    let boxNumber = divsArray[computerSlot]
    //Check if the box has already been clicked
    // If yes....
    if (boxNumber.innerText === 'X' || boxNumber.innerText === 'O') {
        computerTurn()
        //If no....
    } else if (boxNumber.innerText === '') {
        boxNumber.innerText = 'O'
        boxNumber.setAttribute('class', 'blue')
        console.log(divsArray[computerSlot])
		turns++
        //update the divsArray to remove the current index and replace it with the new that has a new class assigned
        divsArray.splice(computerSlot, 1, boxNumber)
        //change the user
        currentPlayer = "User"
        //change the status of the game
        status.innerText = `Game Status: It\'s the ${currentPlayer}'s turn.`
		checkStatus()
    }
}


// ////============3.CHECK FOR WINNER============////
const checkStatus = () => {
//Loop through each winning option
    for (winningOption of winningOptions) {
        //Grab the index value of each of the indices and assign it to a variable 
        const index0 = winningOption[0]
        const index1 = winningOption[1]
		const index2 = winningOption[2]
		//Assign a variable that grabs the class of each index as you loop through
		let div0 = divsArray[index0].getAttribute('class')
        let div1 = divsArray[index1].getAttribute('class')
		let div2 = divsArray[index2].getAttribute('class')
        //If the classes of each index is red (user), change the status to reflect the winner  
        if ((div0 === 'red') && (div1 === 'red') && (div2 === 'red')){
            status.innerText = 'Congratulations! You have won the game!'
            userWins++
            console.log(userWins)
        	document.querySelectorAll('.box').forEach(box => box.removeEventListener('click', boxClick))
        	restar()
        	break
        //If the classes of each index is blue (computer), change the status to reflect the winner    
        } else if ((div0 === 'blue') && (div1 === 'blue') && (div2 === 'blue')) {
            status.innerText = 'The computer has won the game. Try again.'
            compWins++
            console.log(compWins)
			document.querySelectorAll('.box').forEach(box => box.removeEventListener('click', boxClick))
			restar()
			break
        } else if ((turns===9) && (userWins !==0)){
			status.innerText = 'It\'s a tie! Play again.'
			document.querySelectorAll('.box').forEach(box => box.removeEventListener('click', boxClick))
			restar()
			break
		}
	}
}
   
// ////============5.RESTART============////
const restart = (event) => {
    document.querySelector('#btn').addEventListener('click', () => {
        for (divs of divsArray) {
            divs.innerText = ''
			divs.setAttribute('class', 'box')
			turns = 0
        }
        status.innerText = "Game Status: Ready to Begin!"
        document.querySelectorAll('.box').forEach(box => box.addEventListener('click', boxClick))
    })
}

// Add event listeners for actions taken by the user
// Cell is clicked
document.querySelectorAll('.box').forEach(box => box.addEventListener('click', boxClick))
// Restart button is clicked
document.querySelector('#btn').addEventListener('click', restart)
