// ## Requirements
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


//make sure to write plenty of comments!
//remember to set up your window onload!
document.addEventListener('DOMContentLoaded',()=>{
    // array of classes to loop through
    let empty = document.getElementsByClassName('.grid')
    let x = "https://logodix.com/logo/1075168.png"
    let o = "https://logodix.com/logo/710909.png"
    const moves = [empty,x,o]
    let index = 0;
    // the event handler function
    const makeMove = (event) =>{
    // store the class it currently has
    const currentClass = event.target.classList
    // remove the class it has
    event.target.classList.remove(currentClass)
    // incrementing the index, if within bounds of the shapes array, otherwise set it to zero
    if (index <moves.length - 1){
        index = index + 1
    } else {
        index = 0
    }
    // index < shapes.length - 1 ? index++ : (index = 0);
    // add the next class in the array
    event.target.classList.add(moves[index])
    }
    // select all the triangles by class - this is a NodeList (like an array)
    let divs = document.querySelectorAll('.grid')
    // add an event listener to each triangle selected
    for (let i = 0; i< divs.length; i++){
        divs[i].addEventListener('click', makeMove)
    }
})
  