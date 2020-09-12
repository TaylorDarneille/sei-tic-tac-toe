# Peudo-Code Tic Tac Toe

Next Week, you'll be building a [tic-tac-toe](https://en.wikipedia.org/wiki/Tic-tac-toe) game from scratch. To prepare, the deliverable this week is to plan it out! You'll also get to practice writing [markdown](https://guides.github.com/features/mastering-markdown/).

## The Assignment

Fork & Clone this repo. Open this file in your text editor and fill in the sections below. When you're done, make a pull request!

### Part 1: Make a To-Do list

Write out a list of *all* the things you need to do to code this game. This can be as detailed or high-level, though we recommend the former. This is your first time planning an app, so just have fun and just see what you can come up with. There's no right way.

---

*Write TODO list here*

## Tic-Tac-Toe To-Do

### Create boilerplate HTML, CSS, and JS
Connect them as usual
### Create a grid to play on
Later versions can have this be a variable where users can choose the size. To start, just make a 3x3
#### Grid style
- Only want visible lines where the "#" would be
- Class = "grid" ids of positions (top-left, top-mid, top right)
    - may need to rework if going to build out larger grid options
    - keep simple for now

### Create "x" and "o" variables
- Maybe for starters the computer is "o" and the player is "x"
- Later versions player can choose, and can style playing pieces (color,shape)
- Or... two human players? That's easier probably

### Create logic that alternates "x" and "o" clicks
- For two humans, the squares in the grid should write an "x" or "o" depending on whose turn it is
- For computer, write an "x" after the human makes their move
- "x" goes first

### If someone gets 3 in a row, they win
If the board fills up and there is no 3 in a row, it's a tie
---

### Optional Part 2: Pseudo-code your win-logic

Each time a player makes a move, your code will check to see if there is a game-over condition (a win or a draw). Write out this logic in english/psuedocode below. When you're done, anyone should be able to read your pseudo-code and translate it line-by-line into javascript or another language.

---

*Write psuedocode here*

---
