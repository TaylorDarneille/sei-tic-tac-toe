# Peudo-Code Tic Tac Toe

Next Week, you'll be building a [tic-tac-toe](https://en.wikipedia.org/wiki/Tic-tac-toe) game from scratch. To prepare, the deliverable this week is to plan it out! You'll also get to practice writing [markdown](https://guides.github.com/features/mastering-markdown/).

## The Assignment

Fork & Clone this repo. Open this file in your text editor and fill in the sections below. When you're done, make a pull request!

### Part 1: Make a To-Do list

Write out a list of *all* the things you need to do to code this game. This can be as detailed or high-level, though we recommend the former. This is your first time planning an app, so just have fun and just see what you can come up with. There's no right way.

---

- [ ] Make a grid of 3x3 divs - maybe class square
- [ ] Give each div an id 0-8
- [ ] Add event listener to each div to alert which one is clicked (to note the id of the div which is clicked)
- [ ] Modify event listener to place an "X" in the square which was clicked
- [ ] Modify code to alternate between X and O after the other was placed
- [ ] Ensure nothing happens if "X" or "O" already placed
- [ ] User can choose if they want to play as X or O,
- [ ] X starts first
- [ ] Check for a win condition or draw
- [ ] Add ability to reset the game
- [ ] Add computer to place randomly in an empty square (easy)
- [ ] Add computer to place logically in an empty square (hard)
- [ ] User can choose to play multiplayer or single player.
- [ ] User can choose to play on easy mode (random computer moves) or hard (computer ideal move)
---

### Optional Part 2: Pseudo-code your win-logic

Each time a player makes a move, your code will check to see if there is a game-over condition (a win or a draw). Write out this logic in english/psuedocode below. When you're done, anyone should be able to read your pseudo-code and translate it line-by-line into javascript or another language.

---



consider that the board is represented by the array as below:

```js
[0, 1, 2,
 3, 4, 5,
 6, 7, 8]
 ```

 for purpose of the pseudocode assume same piece is X or O, a *nonempty* piece:

if the same piece is in the top row (0,1,2) **OR**

if the same piece is in the second row (3,4,5) **OR**

if the same piece is in the third row (6,7,8) **OR**

if the same piece is in the first column (0,3,6) **OR**

if the same piece is in the second column (1,4,7) **OR**

if the same piece is in the third column (2,5,8) **OR**

if the same piece is in the downward diagonal (0,4,8) **OR**

if the same piece is in the upward diagonal (2,4,6)

  *Then the player associated with that piece wins*

otherwise if there are no empty spaces in the grid

*it is a draw*

---
