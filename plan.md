# Peudo-Code Tic Tac Toe

Next Week, you'll be building a [tic-tac-toe](https://en.wikipedia.org/wiki/Tic-tac-toe) game from scratch. To prepare, the deliverable this week is to plan it out! You'll also get to practice writing [markdown](https://guides.github.com/features/mastering-markdown/).

## The Assignment

Fork & Clone this repo. Open this file in your text editor and fill in the sections below. When you're done, make a pull request!

### Part 1: Make a To-Do list

Write out a list of *all* the things you need to do to code this game. This can be as detailed or high-level, though we recommend the former. This is your first time planning an app, so just have fun and just see what you can come up with. There's no right way.

---

1. lay out a 3x3 grid
2. lay out an X and O to be used by players
3. make event listeners for when an X or O is selected and event listeners for where they are placed
4. every time a move is made prevent from happening if not their turn, if apporpriate turn check grid for 3 of x or o in a row
5. if 3 in a row, indicate with a line and indicate which player has won
6. add a win counter next to winners name and clear board for next game

---

### Optional Part 2: Pseudo-code your win-logic

Each time a player makes a move, your code will check to see if there is a game-over condition (a win or a draw). Write out this logic in english/psuedocode below. When you're done, anyone should be able to read your pseudo-code and translate it line-by-line into javascript or another language.

---

use a 2d array to track the board, each element can have a value of 0, 1 or 2, 0 is no piece there, 1 is x, 2 is o
if grid section is clicked and corresponding 2d array element is not 0 don't allow move, if 0, update 2d array to match what piece was just placed and then check corresponding 2d array elements if 3 in a row of same piece has been made in any direction
if 3 in a row in any direction, game over

---
