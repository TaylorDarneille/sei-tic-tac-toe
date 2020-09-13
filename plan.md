# Peudo-Code Tic Tac Toe

Next Week, you'll be building a [tic-tac-toe](https://en.wikipedia.org/wiki/Tic-tac-toe) game from scratch. To prepare, the deliverable this week is to plan it out! You'll also get to practice writing [markdown](https://guides.github.com/features/mastering-markdown/).

## The Assignment

Fork & Clone this repo. Open this file in your text editor and fill in the sections below. When you're done, make a pull request!

### Part 1: Make a To-Do list

Write out a list of *all* the things you need to do to code this game. This can be as detailed or high-level, though we recommend the former. This is your first time planning an app, so just have fun and just see what you can come up with. There's no right way.

---

*Write TODO list here*
#### Setting Up the Board
* Board is a 3 x 3 grid
  * Div would probably work here because we want to be able to populate each box within the grid
* Would also probably be useful to have a short overview of objective of game, just in case players need a reminder
  * Something to effect of "You win the game if you are able to make a row/column/diagonal of three of your piece
* Would also want a place to display player names and which piece they are (see below)

#### Outlining the Parameters of the Game
* There are two players: one player will place "X"s on the board, the other will place "O"s on the board
  * Players select their piece at the beginning of the game and cannot change it for the duration of the game
  * Player must select different pieces
* The game lasts until either a player makes a row of three or there are no more open spaces on the board (in which case the game is a draw)
* Players take turns placing pieces on the board

#### Game Flow
* Players can only place a piece on an open square
* They can only play one piece at a time
  * Their turn is over once they play a piece
* Players take turns as long as there is an open square on the board
  * Once a piece has been placed on a square, it cannot be moved for the duration of the game
* Assume there is no time limit for a turn
* At the end of the player's turn, the win-logic/end game logic should fire to determine if the game has reached an end-stage
* Bonus: ask players if they want to play again once game ends.

#### Additional To-Do
* Bonus is to make the page look nice
* Need to make sure piece shows up on square that player selects (assuming it is empty)
  * Basically need to make sure page reacts to user actions
---

### Optional Part 2: Pseudo-code your win-logic

Each time a player makes a move, your code will check to see if there is a game-over condition (a win or a draw). Write out this logic in english/psuedocode below. When you're done, anyone should be able to read your pseudo-code and translate it line-by-line into javascript or another language.

---

*Write psuedocode here*
* Win condition:
  * There is a row of three Xs or Os
  * There is a column of three Xs or Os
  * There is a diagonal of three Xs or Os
* It may help to number the squares to make it easier to refer to (this could be done through ID tags on the squares)

Sample | Grid | Setup
-----|-----|-----
  1 | 2 | 3
  4 | 5 | 6
  7 | 8 | 9
