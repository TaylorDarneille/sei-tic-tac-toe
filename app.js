// NOTE FOR BRUNO: I got everything to work but I wasn't able to have the cell not be replayed once marked! I know there's something I need to do with my display function though! 

// * A user should be able to click on different squares to make a move.
// * Every click will alternate between marking an `X` and `O`
// * Upon marking of an individual cell, use JavaScript to add a class to each cell to display the separate players.
// * A cell should not be able to be replayed once marked.
// * You should not be able to click remaining empty cells after the game is over.
// * Add a reset button that will clear the contents of the board.
// * Display a message to indicate which turn is about to be played.
// * Detect draw conditions (ties/cat's game) 
// * Detect winner: Stop game and declare the winner if one player ends up getting three in a row. 
//   * Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.

// **Have Fun** - The best way to learn is by playing with code. Let creativity guide you and try some experiments with JS and CSS and see what you can do.

// constants & variables
// grid = 
// [0,1,2]
// [3,4,5]
// [6,7,8]
const winningCombos = [
    [0, 1, 2], [3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]
];
const txt = document.querySelector('h3'); // grabbing txt to play player's turn & display messages later

let grid;
let currentPlayer = 'X';
let victory;

// pulling all the divs and storing them in an array in the constant boxes 
const boxes = Array.from(document.querySelectorAll('#grid div'));
// source: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from

// function to get the winning results 
// there's max three winning combos => if combo[0] is filled OR combo[1] OR combo[2] is filled, it's a win! 
function getWinner() { 
    let chickenDinner = null; // haven't declared winner yet so set to null
    winningCombos.forEach(function(combo, index) { // within the winning combinations, loop callback function through forEach function to see if the grid matches any of the winning combos
        if (grid[combo[0]] && grid[combo[0]] === grid[combo[1]] && grid[combo[0]] === grid[combo[2]]) {
            chickenDinner = grid[combo[0]];
        }
    }); // winning logic: it's a win if all indices (0-2) is marked
    // return chickenDinner ? chickenDinner : grid.includes('') ? null : 'T'; // ternary to make it more efficient
        // reads: is the chickenDinner null? 
        // if yes, chickenDinner is null
        // if no, does the grid include empty strings? 
        // if yes, return chickenDinner to null
        // if no, declare a tie
    if (chickenDinner) {
        return chickenDinner;
    } else if (grid.includes("")) {
        return null;
    } else {
        return 'Tie';
    } 
};
// what am I doing wrong here? T____T

// takeTurn function to alternate between different players
function takeTurn() { 
    let i = boxes.findIndex(function(square) { // declaring i (as index) to find index of boxes array using callback function to return the square div with event target
        return square === event.target;
    }); // assign index of grid (game board) to equal the current players
    grid[i] = currentPlayer;
    if (currentPlayer === 'X') { // if else conditional to do the actual alternating, if currentplayer is x, alternate o, if else, back to x! 
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    };
    victory = getWinner(); 
    display();
};

// display function to move value of grid item to the boxes indices
function display() {
    grid.forEach(function(val, index) {
    //this moves the value of the board item into the boxes indices
        boxes[index].textContent = val;
    // what should I put here to ensure that the boxes can't be clicked if it already has a value?
    });
    // this for loop breaks my code! T___T
        // for (let i = 0; i < boxes.length; i++) { 
        //     if ((boxes[i].contains("x") || boxes[i].contains("o")) === false) {
        //         boxes[i].innerHTML = "block"
    // then set the message via textContent property to change the string
    // txt.textContent = victory === 'Tie' ? `That's a tie!` : victory ? `${victory} wins the game!` : `It's Player ${currentPlayer}'s turn!`; //ternary
    if(victory === 'Tie') {
        txt.innerText = "That's a tie!";
        // alert("It's a draw!")
        // confirm('Try Again?')
        reset();
    } else if (victory) {
        txt.innerText = `${victory} wins the game!`;
        // alert("Congrats!")
        // confirm('Try Again?')
        reset();
    } else {
        txt.innerText = `It's Player ${currentPlayer}'s turn!`;
    }
};

function reset() { // restart function
    grid = ['', '', '', '', '', '', '', '', '']; // start over with class grid having only 9 empty strings
    display();
};

// building event listeners 
document.getElementById('grid').addEventListener('click', takeTurn);
document.getElementById('reset').addEventListener('click', reset);

// initiating reset button again 
reset();