# Peudo-Code Tic Tac Toe

Next Week, you'll be building a [tic-tac-toe](https://en.wikipedia.org/wiki/Tic-tac-toe) game from scratch. To prepare, the deliverable this week is to plan it out! You'll also get to practice writing [markdown](https://guides.github.com/features/mastering-markdown/).

## The Assignment

Fork & Clone this repo. Open this file in your text editor and fill in the sections below. When you're done, make a pull request!

### Part 1: Make a To-Do list

Write out a list of *all* the things you need to do to code this game. This can be as detailed or high-level, though we recommend the former. This is your first time planning an app, so just have fun and just see what you can come up with. There's no right way.

---
* provide a 3x3 board and header with game title 
* two players (user vs computer) get a marker of either X or O
* allow user to choose which marker they want
    * marker glows/moves/ reacts when clicked on by user
    * or if its a response from prompt, illuminate the appearance of marker on the users side   
* After initial choice of X or O, keep that marker for the entire game 
    * players are given sides, L or R, that will have their name, marker, and win tally 
* players take turns putting down their marker 
    * when mouse hover over the box of user choice, change color
    * on click, add marker into space
* player will not be able to click when it is computers turn
    * maybe include text that says whos turn it is 
* each box on the board can only be filled once 
    * give error/alert if user tries to place a marker on a taken spot
* game is won when one of the players gets 3 markers in a row; can be up, down, diagonal 
    * line illuminates/marks through the 3 in a row 
* game is a tie if board fills up and neither player gets 3 in a row 
    * when all spots are filled, alert user the game is a tie 
* allow for a tally for each player that will keep track of their wins
    * have it appear on the screen for each side
* play again option
    * clears the board but keeps win tally 

---

### Optional Part 2: Pseudo-code your win-logic

Each time a player makes a move, your code will check to see if there is a game-over condition (a win or a draw). Write out this logic in english/psuedocode below. When you're done, anyone should be able to read your pseudo-code and translate it line-by-line into javascript or another language.

---
Extra Notes:
* board could be a table with divs inside each space so that you can control the space within, or maybe with a table you can control it by table row or table data
* have a for loop that checks if spot is taken by giving clicked spaces a new class name and then the loop for the game will check for the existence of that class name, something like that 
* create a loop that will tally games one and have it appear on the screen for each side

*Write psuedocode here*

---
