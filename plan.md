# Peudo-Code Tic Tac Toe

Next Week, you'll be building a [tic-tac-toe](https://en.wikipedia.org/wiki/Tic-tac-toe) game from scratch. To prepare, the deliverable this week is to plan it out! You'll also get to practice writing [markdown](https://guides.github.com/features/mastering-markdown/).

## The Assignment

Fork & Clone this repo. Open this file in your text editor and fill in the sections below. When you're done, make a pull request!

### Part 1: Make a To-Do list

Write out a list of *all* the things you need to do to code this game. This can be as detailed or high-level, though we recommend the former. This is your first time planning an app, so just have fun and just see what you can come up with. There's no right way.

---

1. Create 3X3 grid. (9 divs)
2. Create a scorecard (tally space for wins)
2. Create icons x and o.
3. Allow player to choose x or o as their icon by clicking on it.
4. The computer is automatically assigned the other icon.
5. Alert player to start by clicking on a grid square.
6. If the player clicks on a grid square, their icon should appear in that grid space.
7. The computer should automatically play their icon in a random(?) space. (Note: maybe have the computer automatically play in a grid square next to the user's icon? - this would result in maybe an easy mode or a hard mode that the user can choose from? not sure if too complicated...)
8. Check for a win after every turn.
8. If no win/tie, the player will have the ability to play a second turn.
9. Repeat turns until a win/tie condition is met.
10. When 3 icons appear in a row, a line will appear, connecting the three icons.
11. The user is alerted with who won the game.
12. The winner of the game will earn a tally point on their scorecard.

note- somewhere in the code I need to ensure that if a space is clicked where an icon is already present that the new icon does not override the already placed icon.
---

### Optional Part 2: Pseudo-code your win-logic

Each time a player makes a move, your code will check to see if there is a game-over condition (a win or a draw). Write out this logic in english/psuedocode below. When you're done, anyone should be able to read your pseudo-code and translate it line-by-line into javascript or another language.

---
After a player makes a move 

Loop over the grid(not sure how this is done)

If three of the same icons appear in a row (horizontally, vertically, or diagonally)

    Draw a line over the three icons and alert winner and add a tally to score card.

Else if there are no open grid spaces

    Alert a tie

Else alert the next player to take their turn

---
