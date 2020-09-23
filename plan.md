# Peudo-Code Tic Tac Toe

Next Week, you'll be building a [tic-tac-toe](https://en.wikipedia.org/wiki/Tic-tac-toe) game from scratch. To prepare, the deliverable this week is to plan it out! You'll also get to practice writing [markdown](https://guides.github.com/features/mastering-markdown/).

## The Assignment

Fork & Clone this repo. Open this file in your text editor and fill in the sections below. When you're done, make a pull request!

### Part 1: Make a To-Do list

Write out a list of _all_ the things you need to do to code this game. This can be as detailed or high-level, though we recommend the former. This is your first time planning an app, so just have fun and just see what you can come up with. There's no right way.

---

_Write TODO list here_

-Create a grid 3 by 3
-Pick colors for grid, make it every other color
-Make it a two player game
-Have X and O with the two main variables
-Mark your Mark
Take Turns
Wine logic : align 3 in a row, in a column or diagonally
declare a Tie
The Game is then Finished

---

### Optional Part 2: Pseudo-code your win-logic

Each time a player makes a move, your code will check to see if there is a game-over condition (a win or a draw). Write out this logic in english/psuedocode below. When you're done, anyone should be able to read your pseudo-code and translate it line-by-line into javascript or another language.

---

_Write psuedocode here_

- Make boilder Type in HTML
  Link up CSS and JavaScript

  Creating a Board
  div classes in container in Javascript for the grids.
  Create 3 by 3 grids
  State variables, creating a function for a 3 by 3 grid

  The controls to take action would also need to be created, for example, start and stop.

  CSS- Everything is css would need to be created, based on color and the size of the grids.

  Create conditional statement as players pick X and O, so if player 1 picks X then something would happen and if player 1 choose O then another event would happen.

  Wine conditions and lose conditions need to be created, for example if a player gets 1, 2, 3 in the grids, they woud win.

A function for creating a tie would also be created as that is one of the options to the game which would cause the game to restart.

We need to create fucntions to check in which ways the winners are declared, horizontal, vertical or diagonal.

Then create a function to declare a winner like we did in landscaper.

---





    title
    3x3 grid
        the grid should be clickable
        the grid cells should have the correct player sign displayed an information display
    should display a message informing the current player it’s their turn
        should show us who won the game
        should show us if the game ended in a draw
    restart button
        will restart the entire game

Next, let’s break down the game flow for a cell click:

    needs to track any clicks that happen on our cells
    needs to check if a valid move has been made
        needs to make sure nothing happens if an already played cell has been clicked
    we should update our game state
    we should validate the game state
        check if a player has won
        check if the game ended in a draw
    either stop the game or change the active player, depending on the above checks
    reflect the updates made on the UI
    rinse and repeat
