# Peudo-Code Tic Tac Toe

Next Week, you'll be building a [tic-tac-toe](https://en.wikipedia.org/wiki/Tic-tac-toe) game from scratch. To prepare, the deliverable this week is to plan it out! You'll also get to practice writing [markdown](https://guides.github.com/features/mastering-markdown/).

## The Assignment

Fork & Clone this repo. Open this file in your text editor and fill in the sections below. When you're done, make a pull request!

### Part 1: Make a To-Do list

Write out a list of *all* the things you need to do to code this game. This can be as detailed or high-level, though we recommend the former. This is your first time planning an app, so just have fun and just see what you can come up with. There's no right way.

---

*Write TODO list here*
start game
create a grid with that's 3 by 3
- do this by creating a "table"
create a variable that lets the user or computer make choices to play zero  or x
create a function that determines a winner between computer and user
- the function must be able to compare the choices in the grid to see if they're all zeros or x's
- the function must be able to tell whether the player has won or if it's a tie
- the function must be able to make comparisons diagonally, vertically and horizontally
- add event listener for when the user clicks on grid
 determine which space on the grid the user has clicked on
 determine which space on the grid the computer has chosen
 create a startGame/replay button
 create a game over function

---

### Optional Part 2: Pseudo-code your win-logic

Each time a player makes a move, your code will check to see if there is a game-over condition (a win or a draw). Write out this logic in english/psuedocode below. When you're done, anyone should be able to read your pseudo-code and translate it line-by-line into javascript or another language.

---
func create table {
  row 1: tr with 3 td
  row2 : tr with 3 td
  row 3: tr with 3 td
  (each td will have the same class name to allow editing css)
  (give every td a different id name)

}

variable for human player choice (o)
variable for computer choice (x)

Array of winningCombo[
  will contain arrays of the winning combinations
]
startGame function{
  Add a for loop that counts through every cell in the table
  Add an event listener for when player clicks on cell
}
function for cellchosen{
  Add an event listener for the cell chosen by human player
  display the choice on table
  check if game has been won or it it's a tie
}

function to determine winner {

  have a loop that goes through the choices by computer and human play and compare that to the winning combinations
  Check to see if all the cells in the table have been taken by human or computer players
}

function to end game{
  Check to see if all the cells in the table have been taken by human or computer players and if so, end the game
}

*Write psuedocode here*

---
