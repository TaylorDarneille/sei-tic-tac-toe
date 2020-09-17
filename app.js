console.log('god help me')

let moveTracker= 'user';

//in global scope, establish boardSquares and then put it through a loop that will create elements for each box???
let boardSquares= document.querySelectorAll('.inside'); //boardSquares is an array of elements, elements are the divs that make up the board, 9 pieces 

const makeAMove= (event)=> {
    //console.log(event.target);
    let chosenSquare= event.target; //chosenSquare is set to the div/board square which is click
    let mark= document.createElement('h1'); //creating a document element that will become the marker 
    while(!(chosenSquare.firstChild)){ //while loop that checks if div/board square does NOT have a mark(aka. h1 aka. firstChild) in it. While loop has to be before the if/else if because if not, each click will still register and change the moveTracker variable, even if a mark wasn't left on the board 
        if(moveTracker=== 'user'){ //checks if the moveTracker is set to user
            mark.innerText='X';
            chosenSquare.classList.add('user');
            moveTracker= 'computer'; //if so, moveTracker turns to computer
        } else if(moveTracker=== 'computer'){ //checks if the moveTracker is set to computer
            mark.innerText= 'O';
            chosenSquare.classList.add('computer');
            moveTracker='user'; //if so, moveTracker turns to user
        }
        chosenSquare.append(mark); //after its determined whos turn it is, the innerText of the mark is determined, either X or O, and then appended to the chosenSquare
    }
}

document.addEventListener('DOMContentLoaded', ()=> {
    //MAYBE keep it here, but currently it is in global scope
    //let boardSquares= document.querySelectorAll('.inside'); //boardSquares is an array of elements, elements are the divs that make up the board, 9 pieces 
    //console.log(boardSqu);
    boardSquares.forEach(square=> {
        square.addEventListener('click', makeAMove);
    });
})