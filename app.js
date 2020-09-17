/* ####### TO-DO LIST ###############
\\(DONE!) \\ Create event listeners to place a marker on a square when it is selected by a player
\\(DONE!) \\ Create a conditional wherein a square on the grid can no longer be interacted with by a player once a marker has been placed (i.e. allow the eventlistener to happen only once)
\\(DONE!) \\ Create a way to determine who is playing (i.e. which marker to place)
\\(DONE!) \\ Create a click event listener for the reset button

* Create a conditional that will end the game once win conditions are met
* Create a condtional that will stop the game when no more moves can be made
#####################################
*/

const gameBoard = document.getElementsByClassName('gridsquare')
let turns = 0

const placeMarker = (e) => {
    turns++
    console.log(turns)
    //conditional for determining which marker to place
    if (turns % 2 === 0) { 
        e.target.classList.add('o-marker')
    }else {
        e.target.classList.add('x-marker')
    }
    //
    e.target.removeEventListener('click', placeMarker)
}

//add click event listeners for each div in the gameboard 
const setGameBoard = () => {
    console.log("ready to play!")
    for(i=0; i<gameBoard.length; i++) {
    if (gameBoard[i].classList.contains('x-marker')) {
        gameBoard[i].classList.remove('x-marker')
    }else if (gameBoard[i].classList.contains('o-marker')){
        gameBoard[i].classList.remove('o-marker')
    }
    gameBoard[i].addEventListener('click', placeMarker)
    }
}


document.addEventListener('DOMContentLoaded', ()=>{
    reset.addEventListener('click', () => {
            setGameBoard();
    })
})

   