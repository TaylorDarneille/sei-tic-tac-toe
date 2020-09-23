//The HTML Elements - This is where I will be be grabbing my elements.
 
// The statusDiv is being called because when one player makes a move, we have to indicarte that the next player is now up to make a move. 
const statusDiv = document.querySelector('.status');

// The resetDiv is being grabbed to allow the reset button to be used once a game is completed. 
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');

// GAME CONSTANTS - VARIABLES THAT WONT CHANGE
const xSymbol = 'X';
const oSymbol = 'O';

// THE GAME VARIABLES

//as it sits, when 'gameIsLive' is true, the game is actively being played. WHen someone wins the game, I have to manually set this to false. 
let gameIsLive = true;

// When 'xIsNext' is true then the X player is up for their turn. When this is false, then the O player is up for their turn. 
let xIsNext = true;

// FUNCTIONS

const winSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;

const handleWin = (letter) => {
    gameIsLive = false;
    if (letter === 'x') {
        statusDiv.innerHTML = `${winSymbol(letter)} has won!`;
    } else {
        statusDiv.innerHTML = `<span>${winSymbol(letter)} has won! </span>`;
    }
};

//This will work to check the game status after every move by the players was made. 
const checkGameStatus = () => {
    const topLeft = cellDivs[0].classList[1];
    const topMiddle = cellDivs[1].classList[1];
    const topRight = cellDivs[2].classList[1];
    const middleLeft = cellDivs[3].classList[1];
    const middleMiddle = cellDivs[4].classList[1];
    const middleRight = cellDivs[5].classList[1];
    const bottomLeft = cellDivs[6].classList[1];
    const bottomMiddle = cellDivs[7].classList[1];
    const bottomRight = cellDivs[8].classList[1];

    //This is checking if there is a winner.
    if (topLeft && topLeft === topMiddle && topLeft === topRight) {
        handleWin(topLeft);
        cellDivs[0].classList.add('won');
        cellDivs[1].classList.add('won');
        cellDivs[2].classList.add('won');
    } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
        handleWin(middleLeft);
        cellDivs[3].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[5].classList.add('won');
    } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
        handleWin(bottomLeft);
        cellDivs[6].classList.add('won');
        cellDivs[7].classList.add('won');
        cellDivs[8].classList.add('won');
    } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
        handleWin(topLeft);
        cellDivs[0].classList.add('won');
        cellDivs[3].classList.add('won');
        cellDivs[6].classList.add('won');
    } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
        handleWin(topMiddle);
        cellDivs[1].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[7].classList.add('won');
    } else if (topRight && topRight === middleRight && topRight === bottomRight) {
        handleWin(topRight);
        cellDivs[2].classList.add('won');
        cellDivs[5].classList.add('won');
        cellDivs[8].classList.add('won');
    } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
        handleWin(topLeft);
        cellDivs[0].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[8].classList.add('won');
    } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
        handleWin(topRight);
        cellDivs[2].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[6].classList.add('won');
    } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
        gameIsLive = false;
        statusDiv.innerHTML = 'Game has resulted in a tie!';
    } else {
        xIsNext = !xIsNext;
        if (xIsNext) {
            statusDiv.innerHTML = `${xSymbol} is next`;
        } else {
            statusDiv.innerHTML = `<span>${oSymbol} is next </span>`;
        }
    }
};

//FUNCTIONS DEFINED HERE. EVENT HANDLERS
const handleReset = () => {
    xIsNext = true;
    statusDiv.innerHTML = `${xSymbol} is next`;
    for (const cellDiv of cellDivs) {
        cellDiv.classList.remove('X');
        cellDiv.classList.remove('O');
        cellDiv.classList.remove('won');
    }
    gameIsLive = true;
};

// This location 'handleCellClick' function lets me know whenever I click on any of the cells(squares), which cell I a dealing with. 
const handleCellClick = (e) => {
    // Grabbing all the 'classList' in the beginning.
    const classList = e.target.classList;
    
    // Since I know that the '[2]' index is going to contain the 'O' or the 'X'.  Becuase I only want the index to only contain either
    // an 'X' or an 'O', if it already contains one of these options, we want nothing to happen after this. By having it simply putting 
    // a return in the function, This will cause the function to end right here. Otherwise, if the cell does not contain either an 
    // 'X' or an 'O' we want it to run the next portion of the function. 
    if (!gameIsLive || classList[1] === 'X' || classList[1] === 'O') {
        return;
    }

    if (xIsNext) {
        classList.add('X');
        checkGameStatus();
    } else {
        classList.add('O');
        checkGameStatus();
    }
};

// THE EVENT LISTENERS.
resetDiv.addEventListener('click', handleReset);

// 'const cellDivs' is an array like structure. So what this does is loop through each of the elements with the cellDivs'. The element will
// then be stored in the 'cellDiv' variable.  
for (const cellDiv of cellDivs) {
    cellDiv.addEventListener('click', handleCellClick)
}