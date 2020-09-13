# Peudo-Code Tic Tac Toe

Next Week, you'll be building a [tic-tac-toe](https://en.wikipedia.org/wiki/Tic-tac-toe) game from scratch. To prepare, the deliverable this week is to plan it out! You'll also get to practice writing [markdown](https://guides.github.com/features/mastering-markdown/).

## The Assignment

Fork & Clone this repo. Open this file in your text editor and fill in the sections below. When you're done, make a pull request!

### Part 1: Make a To-Do list

Write out a list of *all* the things you need to do to code this game. This can be as detailed or high-level, though we recommend the former. This is your first time planning an app, so just have fun and just see what you can come up with. There's no right way.

---

### To-Do List

1. Create 9 DIV Elements for board squares
2. Create a DIV for a restart button
3. Position board square divs using flexbox
4. Position reset button
5. Create javascript function that randomly decides which player starts first
6. Create player and computer functions that will eventually alternate and either wait for input for user or provide input if computer
7. Add logic at the end of both the player and the computer's moves to check for a win or a draw
8. add javascript function that looks for clicks from the user or a move choice from the computer and alters a board square's styling 
9. Add div that indicates visually which player is X and which O


---

### Optional Part 2: Pseudo-code your win-logic

Each time a player makes a move, your code will check to see if there is a game-over condition (a win or a draw). Write out this logic in english/psuedocode below. When you're done, anyone should be able to read your pseudo-code and translate it line-by-line into javascript or another language.

---

### Pseudocode

There are only 8 possible winning lines, so first we can make variables for them (collections of divs? i.e. div 1-div 5- div 9 would be the winning line spanning from top left to bottom right)

if...if else loop through all the possibilities and see if all three squares of a winning row have the same class (class='x' or class='0')

if all 9 squares have been clicked and there is no winning combination, it is a draw
---
