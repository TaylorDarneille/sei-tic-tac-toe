//Blank array where choices take place
const cells = ['','','','','','','','','']

//Winning combination of arrays to compare to the cells on the grid
const winningOptions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

//Declare query selectors as variables
const boxes = document.querySelectorAll('.box')
const status = document.querySelector('.status')

//Function for player's turn
const playerTurn = (event) => {
    //Invoke function to check the game status at the start of the turn
    checkStatus()
    const clickedCell = event.target
    const cellNumber = clickedCell.id
    if (cells[cellNumber] === ''){
        cells[cellNumber] = 'X'
        clickedCell.innerText = cells[cellNumber]
        //Pretend like the CPU is actually thinking
        status.innerText = ('CPU is thinking...')
        //Check the status after the turn
        setTimeout(checkStatus, 2000)
    } else if(cells[boxNumber] === 'X'){
        //If the box already has an X, restart the playerTurn function
        playerTurn()
    }
    setTimeout(computerTurn, 1000)
}
//Click event that invokes the playerTurn function
document.querySelectorAll('.box').forEach(box => box.addEventListener('click', playerTurn))

//Function for computer's turn
const computerTurn = () => {
    checkStatus()
    //Generate a random number to set up computer's random choice
    let cpuChoice = Math.floor(Math.random()*9)
    //Get the id of the cell that matches the random number
    let boxNumber = document.getElementById(cpuChoice)
    //If there is already an X or O in the box, restart the computer turn and make a choice elsewhere
    if (boxNumber.innerText === 'X' || boxNumber.innerText === 'O'){
        computerTurn()
    //Otherwise, computer makes a choice and prints an O in the random cell they choice    
    } else if(boxNumber.innerText === ''){
        boxNumber.innerText = 'O'
        cells[cpuChoice] = boxNumber.innerText
        setTimeout(checkStatus, 1000)
    }
}

//Function to check the status of the game (recognizing win/tie/lose, and who's turn it is)
const checkStatus = (event) => {
    //Loop through the winning options array
    for (let i=0; i<8; i++){
        const winningCombos = winningOptions[i]
        const indexOne = cells[winningCombos[0]]
        const indexTwo = cells[winningCombos[1]]
        const indexThree = cells[winningCombos[2]]
        //Winning event for player X (you)
        if (indexOne === 'X' && indexTwo === 'X' && indexThree === 'X'){
            status.innerText = 'Great! You Win!'
            for(box of boxes) {
                box.style.background = 'skyblue'
            }
            return computerTurn()
         }
        //Winning event for player O (computer)
        else if (indexOne === 'O' && indexTwo === 'O' && indexThree === 'O'){
            status.innerText = 'Computer Wins!'
            for(box of boxes) {
                box.style.background = 'red'
            }
            return playerTurn()
        //Tie event
        } else if (indexOne !== '' && indexTwo !== '' && indexThree !== '') {
            status.innerText = 'Tie game! Play again!'
            // document.getElementById('#board').style.pointerEvents = "none"
            // I couldn't get the above code to work when I needed it to without screwing it up. It would work but 
            // it was firing when I didn't want it to and I ran out of time and it was due before I could figure out 
            // where to put it. I was trying to make it so that if there was a tie for some reason and there was still
            // an empty cell, then they could no longer click the empty box. It was screwing it up.
        } else {
           status.innerText = 'Your turn!'
           continue
        }
    }
}

//Restart function
const restart = (event) => {
    document.querySelector('#button').addEventListener('click', ()=>{
        for (box of boxes) {
            box.innerText=''
            box.style.background = 'purple'
        }
        for(let i=0;i<9; i++){
            cells[i] = ''
        }
        status.innerText = "Click on a box to begin!"
    })
 }

//Invoke the restart function when button is clicked
 document.querySelector('#button').addEventListener('click', restart)