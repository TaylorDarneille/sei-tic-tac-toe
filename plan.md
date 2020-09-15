# Peudo-Code Tic Tac Toe

Next Week, you'll be building a [tic-tac-toe](https://en.wikipedia.org/wiki/Tic-tac-toe) game from scratch. To prepare, the deliverable this week is to plan it out! You'll also get to practice writing [markdown](https://guides.github.com/features/mastering-markdown/).

## The Assignment

Fork & Clone this repo. Open this file in your text editor and fill in the sections below. When you're done, make a pull request!

### Part 1: Make a To-Do list

Write out a list of *all* the things you need to do to code this game. This can be as detailed or high-level, though we recommend the former. This is your first time planning an app, so just have fun and just see what you can come up with. There's no right way.

---

*Write TODO list here*

---

### Optional Part 2: Pseudo-code your win-logic

Each time a player makes a move, your code will check to see if there is a game-over condition (a win or a draw). Write out this logic in english/psuedocode below. When you're done, anyone should be able to read your pseudo-code and translate it line-by-line into javascript or another language.

---

*Write psuedocode here*

### Part 1: To Do List
1. Create 3X3 grid (which will be 9 divs)
2. Need to have icons X and O 
3. Create a tally space for wins (a scoreboard) 
4. The computer/other player is automatically assigned the other icon 
5. Allow player to choose X or O as their icon by clicking on it
6. If possible, a way to randomize who goes first (you or other player)
7. If the player clicks on an empty square, their icon should appear in that space
8. The computer should automatically play/appear in a random space
9. Check for a win after every turn (like an if/else if during a while loop it sounds like)
10. Repeat turns until a win or tie condition is met
11. When three Xs or Os are in a row (in a win scenario) a line will appear connecting the three spaces
12. The winner of the game will win a round, not the whole game. (Something like best out of 5 or so rounds win)
13. Alert with who won the game
14. Should probably have a code of some sort somewhere that doesn't allow the opposite player to pick a square
that the other player has already chosen.


### Part 2: Win scenario
A line connecting the three spaces of the X or O winner (not even sure how to do that yet but it's a thought)

In theory, maybe something like:
given that i is equial to number of squares occupied by X or O

while (i < 3) {
 The game continues
}  if (i === 3) there are no open grid spaces {
   Alert a a win
} else if (i === 3 and grid is full with no 3 icons in a row) {
    Alert a tie, and start a new round
} Else alert the next player to take their turn   







---
