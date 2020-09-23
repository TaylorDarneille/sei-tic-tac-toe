//Gets all the squares
const cats = document.getElementsByClassName("cat");
//Variable for X
let currentPlayer = "x";
let computer = null;
//Variable to store the game status
let gameStatus = "Game On";
// function to generate a random choice
const randomChoice = () => {
    let computer = Math.floor(Math.random() * cats.length);
    return(randomChoice);
};

// Multiplayer game
//loops through all the elements
for (let i = 0; i < cats.length; i++) {
    //adds event listener to each square;
    cats[i].addEventListener("click", () => {
       
      //checks if the square has an x or an o in it and also checks if the game is still on
      if (cats[i].innerHTML == "" && gameStatus == "Game On") {
        //adds x or o for the current play in their choosen square
        cats[i].innerHTML = currentPlayer;
        
        //Variable to change player turns
        currentPlayer = currentPlayer == "x" ? "o" : "x";
  
        //changes player's turn label on top of the game
        document.getElementById(
          "player"
        ).innerHTML = currentPlayer.toUpperCase();
  
        //checks for the winning sequence(3 x's or 3 o's)
        if (
          cats[0].innerHTML == cats[1].innerHTML &&
          cats[1].innerHTML == cats[2].innerHTML &&
          cats[0].innerHTML != ""
        ) {
          showWinner(0, 1, 2);
        } else if (
          cats[3].innerHTML == cats[4].innerHTML &&
          cats[4].innerHTML == cats[5].innerHTML &&
          cats[3].innerHTML != ""
        ) {
          showWinner(3, 4, 5);
        } else if (
          cats[6].innerHTML == cats[7].innerHTML &&
          cats[7].innerHTML == cats[8].innerHTML &&
          cats[6].innerHTML != ""
        ) {
          showWinner(6, 7, 8);
        } else if (
          cats[0].innerHTML == cats[3].innerHTML &&
          cats[3].innerHTML == cats[6].innerHTML &&
          cats[0].innerHTML != ""
        ) {
          showWinner(0, 3, 6);
        } else if (
          cats[1].innerHTML == cats[4].innerHTML &&
          cats[4].innerHTML == cats[7].innerHTML &&
          cats[1].innerHTML != ""
        ) {
          showWinner(1, 4, 7);
        } else if (
          cats[2].innerHTML == cats[5].innerHTML &&
          cats[5].innerHTML == cats[8].innerHTML &&
          cats[2].innerHTML != ""
        ) {
          showWinner(2, 5, 8);
        } else if (
          cats[0].innerHTML == cats[4].innerHTML &&
          cats[4].innerHTML == cats[8].innerHTML &&
          cats[0].innerHTML != ""
        ) {
          showWinner(0, 4, 8);
        } else if (
          cats[2].innerHTML == cats[4].innerHTML &&
          cats[4].innerHTML == cats[6].innerHTML &&
          cats[2].innerHTML != ""
        ) {
          showWinner(2, 4, 6);
        }
      }
    });
}
  
//resets the game
document.getElementById("reset").addEventListener("click", () => {
    for (let i = 0; i < cats.length; i++) {
      cats[i].innerHTML = "";
      cats[i].style.backgroundColor = "white";
      cats[i].style.color = "black";
    
    }
    currentPlayer = "x";
    document.getElementById("clair").style.display = "none";
    document.getElementById("player").innerHTML = "X";
    gameStatus = "Game On";
});
  
  //displays the winner
const showWinner = (x, y, z) => {
    cats[x].style.background = "purple";
    cats[x].style.color = "white";
    cats[y].style.background = "purple";
    cats[y].style.color = "white";
    cats[z].style.background = "purple";
    cats[z].style.color = "white";
    document.getElementById("winner").innerHTML =
      currentPlayer == "x" ? "O" : "X";
    document.getElementById("clair").style.display = "block";
    gameStatus = "Game Over";
}

   // single player function
document.getElementById("single").addEventListener("click", () => {
   //loops through all the elements
    for (let i = 0; i < cats.length; i++) {
        //adds event listener to each square;
        cats[i].addEventListener("click", () => {
        })
    }
})   
// i couldn't figure out the conditional. 
//i wanted to create a new array to generate a choice from but i keep getting a bug  