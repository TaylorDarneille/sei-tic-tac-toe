//Gets all the squares
const cats = document.getElementsByClassName("cat");

//Variable for X
let currentPlayer = "x";

//Variable to store the game status
let gameStatus = "Game On";

//loops through all the elements
for (let i = 0; i < cats.length; i++) {
    //adds event listener to each square;
    cats[i].addEventListener("click", function() {
      //checks if the square has an x or an o in it and also checks if the game is still on
      if (cats[i].innerHTML.trim() == "" && gameStatus == "Game On") {
        //adds x or o for the current play in their choosen square
        cats[i].innerHTML = currentPlayer;
  
        //Variable to change player turns
        currentPlayer = currentPlayer == "x" ? "o" : "x";
  
        //changes player's turn label on top of the game
        document.getElementById(
          "player"
        ).innerHTML = currentPlayer.toUpperCase();
  
        //checks 3 matching x's or o's
        if (
          cats[0].innerHTML == cats[1].innerHTML &&
          cats[1].innerHTML == cats[2].innerHTML &&
          cats[0].innerHTML.trim() != ""
        ) {
          displayWinner(0, 1, 2);
        } else if (
          cats[3].innerHTML == cats[4].innerHTML &&
          cats[4].innerHTML == cats[5].innerHTML &&
          cats[3].innerHTML.trim() != ""
        ) {
          displayWinner(3, 4, 5);
        } else if (
          cats[6].innerHTML == cats[7].innerHTML &&
          cats[7].innerHTML == cats[8].innerHTML &&
          cats[6].innerHTML.trim() != ""
        ) {
          displayWinner(6, 7, 8);
        } else if (
          cats[0].innerHTML == cats[3].innerHTML &&
          cats[3].innerHTML == cats[6].innerHTML &&
          cats[0].innerHTML.trim() != ""
        ) {
          displayWinnerr(0, 3, 6);
        } else if (
          cats[1].innerHTML == cats[4].innerHTML &&
          cats[4].innerHTML == cats[7].innerHTML &&
          cats[1].innerHTML.trim() != ""
        ) {
          displayWinner(1, 4, 7);
        } else if (
          cats[2].innerHTML == cats[5].innerHTML &&
          cats[5].innerHTML == cats[8].innerHTML &&
          cats[2].innerHTML.trim() != ""
        ) {
          displayWinner(2, 5, 8);
        } else if (
          cats[0].innerHTML == cats[4].innerHTML &&
          cats[4].innerHTML == cats[8].innerHTML &&
          cats[0].innerHTML.trim() != ""
        ) {
          displayWinner(0, 4, 8);
        } else if (
          cats[2].innerHTML == cats[4].innerHTML &&
          cats[4].innerHTML == cats[6].innerHTML &&
          cats[2].innerHTML.trim() != ""
        ) {
          displayWinner(2, 4, 6);
        }
      }
    });
  }
  
  