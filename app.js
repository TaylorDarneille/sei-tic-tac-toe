console.log('god help me')

//let body= document.querySelector('body');
let moveTracker= 'user'; //initialize move tracker to start with user 
let board= [ //create an array that resembles a board, will be manipulated and then used to determine a winning game
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9']
    ];
let gameWon= false; //initialize the gameWon to state as false, value is later changed 

//created a function fillBoardArr that will fill the board array with matching marks, depending on which board square is chosen. Able to make code less repetitive, more DRY...even though this function is very still long hehe
const fillBoardArr= ()=> {
    let chosenSquare= event.target; //have to reestablish the variable chosenSquare to be equal to the event.target, which is the div that is clicked on
    for(let i=0; i<board.length; i++){ //for loop iterates through the elements in the board array 
        let boardElement= board[i]; //set inner array to variable boardElement
        //console.log('this is boardElement', boardElement);
        if(boardElement.includes(chosenSquare.id)){//checks if the boardElement/inner array includes the id of the chosenSquare, if it does, move on to code block below 
            for(let j=0; j<boardElement.length; j++){ //itterates through boardElement/inner array
                let innerBoardElement= boardElement[j]; //sets elements within boardElement/inner array to a variable innerBoardElement 
                if(innerBoardElement===chosenSquare.id){ //checks if the innerBoardElement is equal to the id of the chosenSquare
                    let indexBoardElement= boardElement.indexOf(chosenSquare.id); //searches through the boardElement/inner array and finds the index of the id of chosenSquare, set that to variable indexBoardElement
                    let marker; //create a variable for the marker inside the board array
                    //!!!INTERESTING NOTE: classList returns a DOMTokenList (even though it appears like an array in the console), .include() method does not work on DOMTokenLists but .contains() does!!
                    if(chosenSquare.classList.contains('user')){ //checks if the chosenSquare's classList includes/contains user, if so, the marker inside the board array will be X
                        marker= 'X';
                    } else { //if not, the marker in the board array will be O
                        marker= 'O'
                    }
                    boardElement.splice((indexBoardElement), 1, marker); //go into the current boardElement/inner array at location of the indexBoardElement (where the id of the chosenSquare exists within the inner array), remove that item, and replace it with the marker that is determined from the above if/else statement
                }
            }
        }
    }
}

const win= (winner)=> { //callback function that is passed a certain argument when called in checkWin();
    //code that will run when called, called when the game has been won
    //code will alert there is a winner and then stop any moves from happening 
    heading.innerText= `Marker ${winner} is the winner!`;
    heading.style.color= 'rgb(151, 255, 250)'; //makes winner Message a diff color to pop 
    //first had created a winnerMessage h1 element and appended it and then replaced the current heading but swapped it for above 2 lines of code 
    // let winnerMessage= document.createElement('h1');
    // winnerMessage.innerText= `Marker ${winner} is the winner!`;
    // //heading.append(winnerMessage);
    // //!!!!!replaceChild syntax: node.replaceChild(newNode, oldNode)
    // heading.replaceChild(winnerMessage, heading.firstChild); //this will get rid of the message that tells who turn it is and put the winnerMessage in its place
    gameWon= true; //sets gameWon to true so that moves can no longer be made in makeAMove function 
}

const checkWin= ()=> {
    //code that will check if someone won the game 
    //this block of code will be run everytime a box is clicked
    //ROWS
    for(i=0; i<board.length; i++){ //use a for loop to create row(s) and check them to see if it is a win
        let row= board[i].join('');
        //if/else if statement checks for the winning combo and if so, calls win()function passing in the determined winner as an argument 
        if(row=== 'XXX'){
            win('X');
            //console.log('mark X, WON');
        } else if(row=== 'OOO'){
            win('O');
            //console.log('mark O, WON');
        }
    }
    //COLUMNS
    //create 3 column variables set equal to what column of board would be, joined, from the board array elements
    let column1= board[0][0]+board[1][0]+board[2][0];
    let column2= board[0][1]+board[1][1]+board[2][1];
    let column3= board[0][2]+board[1][2]+board[2][2];
    //if/else if statements check to see if columns equal a winning combo and if so, calls win()function passing in the determined winner as an argument 
    if(column1=== 'XXX' || column2=== 'XXX'|| column3=== 'XXX'){
        win('X');
        //console.log('mark X, WON');
    } else if(column1==='OOO'|| column2==='OOO'|| column3==='OOO'){
        win('O');
        //console.log('mark O, WON');
    }
    //DIAGONAL
    //create 2 diag variables set equal to the joined board array elements going in diagonal 
    let diag1= board[0][0]+board[1][1]+board[2][2];
    let diag2= board[0][2]+board[1][1]+board[2][0];
    //if/else if statements check to see if diags are equal to a winning combo and if so, calls win()function passing in the determined winner as an argument 
    if(diag1=== 'XXX' || diag2 === 'XXX'){
        win('X');
        //console.log('mark X, WON');
    } else if(diag1==='OOO' || diag2=== 'OOO'){
        win('O');
        //console.log('mark O, WON');
    } else if(
        (board[0][0]=== 'X' || board[0][0]=== 'O')
        && (board[0][1]=== 'X' || board[0][1]=== 'O')
        && (board[0][2]=== 'X' || board[0][2]=== 'O')
        && (board[1][0]=== 'X' || board[1][0]=== 'O')
        && (board[1][1]=== 'X' || board[1][1]=== 'O')
        && (board[1][2]=== 'X' || board[1][2]=== 'O')
        && (board[2][0]=== 'X' || board[2][0]=== 'O')
        && (board[2][1]=== 'X' || board[2][1]=== 'O')
        && (board[2][2]=== 'X' || board[2][2]=== 'O')
    ){
        if(gameWon=== false){
        heading.innerText= 'Game is a tie!';
        heading.style.color= 'limegreen';
        }
    }
}

const whosTurn= ()=> {
    let placement= document.createElement('div');
    while(heading.firstChild){
        heading.removeChild(heading.firstChild);
    }
    let message= document.createElement('p');
    let turn='';
    if(moveTracker==='user'){
        turn= 'X';
        message.classList.add('user');
    } else if(moveTracker==='computer') {
        turn= 'O';
        message.classList.add('computer');
    }
    message.innerText= `It is now player ${turn}'s turn`;
    heading.append(placement);
    placement.append(message);
}

const makeAMove= (event)=> {
    //console.log(event.target);
    let chosenSquare= event.target; //chosenSquare is set to the div/board square which is click

    //a softer reset of the game, basically just undoes what was done 
    button.addEventListener('click', ()=> {
        while(chosenSquare.firstChild){ //checks if there are marks in the game board squares
            chosenSquare.removeChild(chosenSquare.firstChild); //if there are, then they are removed 
            //class is later added to the div, not the mark, so those have to be removed when the reset button is clicked 
            chosenSquare.classList.remove('user');
            chosenSquare.classList.remove('computer');
        }  
        board= [ //have to reset the board array to og array so that it matches the new blank board 
            ['1', '2', '3'],
            ['4', '5', '6'],
            ['7', '8', '9']
        ];
        heading.removeChild(heading.firstChild); //removes the message/winnerMessage from top
        heading.innerText= 'Tic-Tac-Toe'; //game title heading gets removed too so were adding this back
        heading.style.color= 'white';
        moveTracker= 'user'; //so user X always starts first
        gameWon= false; //have to reset gameWon to false because its a new game 
    }) //end of button event listener 

    let mark= document.createElement('p'); //creating a document element that will become the marker 
    while((!chosenSquare.firstChild) && gameWon=== false){ //while loop that checks if div/board square does NOT have a mark(aka. h1 aka. firstChild) in it. it ALSO checks to make sure gameWon hasnt been change to true (aka game has not been won), makes it so no moves are registered after the game is won
    //While loop has to be before the if/else if because if not, each click will still register and change the moveTracker variable, even if a mark wasn't left on the board 
        if(moveTracker=== 'user'){ //checks if the moveTracker is set to user
            mark.innerText='X'; 
            chosenSquare.classList.add('user'); //adding a class of user when it is the users turn
            moveTracker= 'computer'; //if so, moveTracker turns to computer
            //console.log('this is id of chosenSquare', chosenSquare.id);
            //whosTurn();
            fillBoardArr(); //call fillBoardArr function instead of having a repetative for loop, cleans up code
        } else if(moveTracker=== 'computer'){ //checks if the moveTracker is set to computer
            mark.innerText= 'O';
            chosenSquare.classList.add('computer'); //adding a class of computer when it is the computers turn
            moveTracker='user'; //if so, moveTracker turns to user
            //console.log('this is id of chosenSquare', chosenSquare.id);
            fillBoardArr(); ////call fillBoardArr function instead of having a repetative for loop, cleans up code
        }
        chosenSquare.append(mark); //after its determined whos turn it is, the innerText of the mark is determined, either X or O, and then appended to the chosenSquare
        //whosTurn();
    }
    whosTurn();
    //call these functions inside makeMove() so that it is checked after every click
    checkWin(); 
}

//the resetGame function, called by the reset click button event, would be used for a hard reset of the game
// const resetGame= ()=> {
//     //document.location.href= ''; //this is the easy route to resetting the game. this line of code will reload the entire html and javascript 
// }

document.addEventListener('DOMContentLoaded', ()=> {
    let boardSquares= document.querySelectorAll('.inside'); //boardSquares is an array of elements, elements are the divs that make up the board, 9 pieces 
    for(let i=0; i<boardSquares.length; i++){
        let square= boardSquares[i];
        square.addEventListener('click', makeAMove);
        square.id=(i+1); //gives id of each div/square of 1-9
    }
    //couldnt figure out how to treat forEach as a loop that would add and increment id names 
    // boardSquares.forEach(square=> {
    //     square.addEventListener('click', makeAMove);
    // });
    //button.addEventListener('click', resetGame); //useful for the easy/shortcut reset 
})
