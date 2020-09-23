const turn = document.getElementById("turn")

// boxes is the array of all the boxes in the gameboard
let boxes = document.querySelectorAll("#gameboard div")
let turnNumber = 0
// turnNumber indicates whether it is player X or player O's turn

// function to select the three winning boxes and check conditions. if met, the display message will say player X or O wins. it will also change the image of the winning boxes to stars!

// it also changes the remaining boxes aka empty boxes to have an innerHTML of "block" which is then checked in a later function to not allow the user to click in these remaining boxes once the game ends.
function selectWinnerBoxes(b1,b2,b3) {
    b1.classList.add("win")
    b2.classList.add("win")
    b3.classList.add("win")
    turn.innerHTML = "the winner is " + b1.innerHTML + "! congrats!"

    let winningBoxes = document.querySelectorAll(".win")
    for (let i = 0; i < winningBoxes.length; i++) {
        winningBoxes[i].style.backgroundImage = "url(star.png)"
    }

    for (let i = 0; i < boxes.length; i++) {
        if ((boxes[i].classList.contains("x") || boxes[i].classList.contains("o")) === false) {
            boxes[i].innerHTML = "block"
        }
    }
}

// the function that checks the conditional statements of every box to determine every winning combination. if none of these conditions are met, then it checks if all the boxes are already filled and if yes, it displays that it is a tie. also changes every block to a sad cat pic :(
function getWinner(){
    let box1 = document.getElementById("box1")
    let box2 = document.getElementById("box2")
    let box3 = document.getElementById("box3")
    let box4 = document.getElementById("box4")
    let box5 = document.getElementById("box5")
    let box6 = document.getElementById("box6")
    let box7 = document.getElementById("box7")
    let box8 = document.getElementById("box8")
    let box9 = document.getElementById("box9")

    // conditional statements to get all the possibilities
    // this statement is saying if box1 is NOT blank AND if it is equal to box2 AND equal to box3, then run the selectWinnerBoxes function with these three boxes as the winning boxes
    // we will create this for all possible situations
        // 1 2 3 -- horizontal 1
        if(box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML) {
            selectWinnerBoxes(box1, box2, box3)
        }
        // 4 5 6 -- horizontal 2
        else if(box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) {
            selectWinnerBoxes(box4, box5, box6)
        }
        // 7 8 9 -- horizontal 3
        else if(box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) {
            selectWinnerBoxes(box7, box8, box9)
        }
        // 1 4 7 -- vertical 1
        else if(box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) {
            selectWinnerBoxes(box1, box4, box7)
        }
        // 2 5 8 -- vertical 2
        else if(box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) {
            selectWinnerBoxes(box2, box5, box8)
        }
        // 3 6 9 -- vertical 3
        else if(box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) {
            selectWinnerBoxes(box3, box6, box9)
        }
        // 1 5 9 -- diagonal 1
        else if(box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML) {
            selectWinnerBoxes(box1, box5, box9)
        }
        // 3 5 7 -- diagonal 2
        else if(box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML) {
            selectWinnerBoxes(box3, box5, box7)
        } else if (box1.innerHTML !== "" && box2.innerHTML !== "" && box3.innerHTML !== "" && box4.innerHTML !== "" && box5.innerHTML !== "" && box6.innerHTML !== "" && box7.innerHTML !== "" && box8.innerHTML !== "" && box9.innerHTML !== "") {
            turn.innerHTML = "it's a tie! play again?"
            let allBoxes = document.querySelectorAll(".box")
            for (let i = 0; i < allBoxes.length; i++) {
                allBoxes[i].style.backgroundImage = "url(sad-cat.png)"
            }
        }
    }

    // this code is what determines whose turn it is when the user clicks a box. it also determines if the remaining boxes are unclickable -- from above, where it changed the innerHTML to "block"
for (let i = 0; i < boxes.length; i++) {
    boxes[i].onclick = function() {
        if (this.innerHTML === "block") {
            return 
        } else if(this.innerHTML !== "X" && this.innerHTML !== "O") {
            if(turnNumber % 2 === 0) {
                console.log(turnNumber)
                this.innerHTML = "X"
                this.classList.add("x")
                turn.innerHTML = "current turn: o"
                getWinner()
                turnNumber += 1
            } else {
                console.log(turnNumber)
                this.innerHTML = "O"
                this.classList.add("o")
                turn.innerHTML = "current turn: x"
                getWinner()
                turnNumber += 1
            }
        }
    }
}

// replay button
// removes all classes "win, x, o"
// makes all innerHTML be blank
// removes the background of x or o or sad cat
// turns the innerHTML to the initial message when the game just starts
// sets the turnNumber back to 0 aka it always starts at player X's turn
function replay(){
    for (let i = 0; i < boxes.length; i++){
        boxes[i].classList.remove("win")
        boxes[i].classList.remove("x", "o")
        boxes[i].innerHTML = ""
        boxes[i].style.background = ""
        turn.innerHTML = "press any square to play"
        turnNumber = 0
    }
}

// click add event listener for the replay button
document.getElementById("replay").addEventListener("click", replay) 
