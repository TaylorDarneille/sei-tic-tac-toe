console.log('god help me')

let moveTracker= 'user'; //initialize move tracker to start with user 

let board= [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9']
    ];


// const fillBoardArr= ()=> {
//     let chosenSquare= event.target; //have to reestablish the variable chosenSquare to be equal to the event.target, which is the div that is clicked on
//     for(let i=0; i<board.length; i++){ //for loop iterates through the elements in the board array 
//         let boardElement= board[i]; //set inner array to variable boardElement
//         //console.log('this is boardElement', boardElement);
//         if(boardElement.includes(chosenSquare.id)){//checks if the boardElement/inner array includes the id of the chosenSquare, if it does, move on to code block below 
//             for(let j=0; j<boardElement.length; j++){ //itterates through boardElement/inner array
//                 let innerBoardElement= boardElement[j]; //sets elements within boardElement/inner array to a variable innerBoardElement 
//                 if(innerBoardElement===chosenSquare.id){ //checks if the innerBoardElement is equal to the id of the chosenSquare
//                     let indexBoardElement= boardElement.indexOf(chosenSquare.id); //searches through the boardElement/inner array and finds the index of the id of chosenSquare, set that to variable indexBoardElement
//                     //console.log('this is the index of the chosenSquare id', indexBoardElement);
//                     //console.log('this is innerBoardElement', innerBoardElement);
//                     let marker; //create a variable for the marker inside the board array
//                     //!!!INTERESTING NOTE: classList returns a DOMTokenList (even though it appears like an array in the console), .include() method does not work on DOMTokenLists but .contains() does!!
//                     if(chosenSquare.classList.contains('user')){ //checks if the chosenSquare's classList includes/contains user, if so, the marker inside the board array will be X
//                         marker= 'X';
//                     } else { //if not, the marker in the board array will be O
//                         marker= 'O'
//                     }
//                     boardElement.splice((indexBoardElement), 1, marker); //go into the current boardElement/inner array at location of the indexBoardElement (where the id of the chosenSquare exists within the inner array), remove that item, and replace it with the marker that is determined from the above if/else statement
//                 }
//             }
//         }
//     }

// }

const checkWin= ()=> {
    //code that will check if someone won the game 
} 

const makeAMove= (event)=> {
    //console.log(event.target);
    let chosenSquare= event.target; //chosenSquare is set to the div/board square which is click
    button.addEventListener('click', ()=> {
        while(chosenSquare.firstChild){ //checks if there are marks in the game board squares
            chosenSquare.removeChild(chosenSquare.firstChild); //if there are, then they are removed 
            //class is later added to the div, not the mark, so those have to be removed when the reset button is clicked 
            chosenSquare.classList.remove('user');
            chosenSquare.classList.remove('computer');
        }  
    }) //end of button event listener 
    let mark= document.createElement('h1'); //creating a document element that will become the marker 
    while(!(chosenSquare.firstChild)){ //while loop that checks if div/board square does NOT have a mark(aka. h1 aka. firstChild) in it. While loop has to be before the if/else if because if not, each click will still register and change the moveTracker variable, even if a mark wasn't left on the board 
        if(moveTracker=== 'user'){ //checks if the moveTracker is set to user
            mark.innerText='X'; 
            chosenSquare.classList.add('user'); //adding a class of user when it is the users turn
            moveTracker= 'computer'; //if so, moveTracker turns to computer
            //console.log('this is id of chosenSquare', chosenSquare.id);

        

            for(let i=0; i<board.length; i++){ //for loop iterates through the elements in the array 
                let boardElement= board[i]; //set inner array to variable boardElement
                //console.log('this is boardElement', boardElement);
                if(boardElement.includes(chosenSquare.id)){//checks if the boardElement/inner array includes the id of the chosenSquare, if it does, move on to code block below 
                    for(let j=0; j<boardElement.length; j++){ //itterates through boardElement/inner array
                        let innerBoardElement= boardElement[j]; //sets elements within boardElement/inner array to a variable innerBoardElement 
                        if(innerBoardElement===chosenSquare.id){ //checks if the innerBoardElement is equal to the id of the chosenSquare
                            let indexBoardElement= boardElement.indexOf(chosenSquare.id); //searches through the boardElement/inner array and finds the index of the id of chosenSquare, set that to variable indexBoardElement
                            //console.log('this is the index of the chosenSquare id', indexBoardElement);
                            //console.log('this is innerBoardElement', innerBoardElement);
                            boardElement.splice((indexBoardElement), 1, 'X'); //go into the current boardElement/inner array at location of the indexBoardElement (where the id of the chosenSquare exists within the inner array), remove that item, and replace it with an X
                        }
                    }
                }
            }
            //console.log('this is board now', board);

        } else if(moveTracker=== 'computer'){ //checks if the moveTracker is set to computer
            mark.innerText= 'O';
            chosenSquare.classList.add('computer'); //adding a class of computer when it is the computers turn
            moveTracker='user'; //if so, moveTracker turns to user
            //console.log('this is id of chosenSquare', chosenSquare.id);

    


            for(let i=0; i<board.length; i++){ //for loop iterates through the elements in the array 
                let boardElement= board[i]; //set inner array to variable boardElement
                //console.log('this is boardElement', boardElement);
                if(boardElement.includes(chosenSquare.id)){//checks if the boardElement/inner array includes the id of the chosenSquare, if it does, move on to code block below 
                    for(let j=0; j<boardElement.length; j++){ //itterates through boardElement/inner array
                        let innerBoardElement= boardElement[j]; //sets elements within boardElement/inner array to a variable innerBoardElement 
                        if(innerBoardElement===chosenSquare.id){ //checks if the innerBoardElement is equal to the id of the chosenSquare
                            let indexBoardElement= boardElement.indexOf(chosenSquare.id); //searches through the boardElement/inner array and finds the index of the id of chosenSquare, set that to variable indexBoardElement
                            //console.log('this is the index of the chosenSquare id', indexBoardElement);
                            //console.log('this is innerBoardElement', innerBoardElement);
                            boardElement.splice((indexBoardElement), 1, 'O'); //go into the current boardElement/inner array at location of the indexBoardElement (where the id of the chosenSquare exists within the inner array), remove that item, and replace it with an X
                        }
                    }
                }
            }
        }
        chosenSquare.append(mark); //after its determined whos turn it is, the innerText of the mark is determined, either X or O, and then appended to the chosenSquare
    }
    //call these functions inside makeMove() so that it is checked after every click
    //checkWin(); 
    //checkTie();
}
console.log('this is the board now', board);

document.addEventListener('DOMContentLoaded', ()=> {
    let boardSquares= document.querySelectorAll('.inside'); //boardSquares is an array of elements, elements are the divs that make up the board, 9 pieces 
    for(let i=0; i<boardSquares.length; i++){
        let square= boardSquares[i];
        square.addEventListener('click', makeAMove);
        square.id=(i+1); //gives id of each div/square of 1-9
    }
    //couldnt figure out how to treat forEach as a loop that would add and increment class names 
    // boardSquares.forEach(square=> {
    //     square.addEventListener('click', makeAMove);
    // });
})