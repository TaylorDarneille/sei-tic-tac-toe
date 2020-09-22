const turn = document.getElementById("turn")

// boxes is the array of all the boxes in the gameboard
let boxes = document.querySelectorAll("#gameboard div")
let turnNumber = 0

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
        }
    }

    // TIE -- tried to make a for loop that will change the text to indicate a tie if the following condition is met: where the classes in all the divs contain either x or o && where the class does NOT contain "win" -- but it didn't work properly within the for loop

    // i am thinking about putting these conditionals into an array so the code is easier to read? might also look into checking if all the divs include either "X" or "O" aka if all boxes are filled, then indicate is it a tie.

    // for (let i = 0; i < boxes.length; i++) {
    //     if ( (boxes[i].classList.contains("x") && (boxes[i].classList.contains("win") === false)) || (boxes[i].classList.contains("y") && (boxes[i].classList.contains("win") === false)) ) {
    //         turn.innerText = "tie!"
    //     }
    // }

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
function replay(){
    for (let i = 0; i < boxes.length; i++){
        boxes[i].classList.remove("win")
        boxes[i].classList.remove("x", "o")
        boxes[i].innerHTML = ""
        boxes[i].style.background = ""
        turn.innerHTML = "play"
    }
}

document.getElementById("replay").addEventListener("click", replay)

// REQUIREMENTS TO WORK ON
// make a condition for a tie -- not working