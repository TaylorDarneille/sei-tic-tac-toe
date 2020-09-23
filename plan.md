# Peudo-Code Tic Tac Toe

Next Week, you'll be building a [tic-tac-toe](https://en.wikipedia.org/wiki/Tic-tac-toe) game from scratch. To prepare, the deliverable this week is to plan it out! You'll also get to practice writing [markdown](https://guides.github.com/features/mastering-markdown/).

## The Assignment

Fork & Clone this repo. Open this file in your text editor and fill in the sections below. When you're done, make a pull request!

### Part 1: Make a To-Do list

Write out a list of *all* the things you need to do to code this game. This can be as detailed or high-level, though we recommend the former. This is your first time planning an app, so just have fun and just see what you can come up with. There's no right way.

---

TODO LIST:
Create the page HTML- header should have the game name and a nav bar with a "start new game" and an "undo" button, the left side will be a panel for Player 1 (div class= "player1"), spot for the player's name (id="name"), the player's mark (X or O)(id="mark"), a "Your-turn" message, and the score at the bottom of the section (id="score"). The middle will be the blank game board- a 3/3 grid in the center (each square should have an id of 0-8, a class of their row, and a 2nd class of their column). The right side will have a panel for Player 2 with the same elements as Player 1's panel.

Javascript- 
STARTING SETUP: There will be empty variables for Player 1 & 2's marks, their scores, arrays for their choices, an array for filled spots on the gameboard, and a pre-filled array for available spots on the gameboard which will contain all the spot id's, 0-8. The user has to select the "start new game" button to initiate gameplay. The button will have an onclick event listener so that the button text will change to "reset" after it's been clicked, as well as an event listener so the page will prompt the user to select if they want to play with a 2nd player (and have manual player 2 inputs), or against the computer (which will have randomly selected inputs by the computer). The next prompt should have Player 1 enter their name, and choose their mark. There should be another array called "markOptions" containing X & O. If player 2 is another user, they should also enter their name on a following form, and their mark will automatically be assigned as the leftover from markOptions. The user(s)'s inputs will then be pushed into their variables for namePlayer1/namePlayer2 & markPlayer1/markPlayer2. The page should populate each users info into their respective panel containers using DOM manupulation. If there is no player 2, the computer's name "Computer" will populate. scorePlayer1/scorePlayer2 is initially set to 0. When player info has populated,there will be a function that randomly chooses who will have the first turn- triggered by a user clicking a button that sets off a randomTurnAssignment function. The button will show up on the board after the last player prompt is completed, using the DOM to insert the button. 

GAMEPLAY: Whoever's turn it is, the "Your-turn" signal will change display styles to 100% opacity to show up their panel. When the first player clicks their spot on the gameboard, the DOM will insert their mark into the spot, push the spot's id into (1.) the player's choices array and (2.)the filledSpots array, then remove it from the availableSpots array. There will be a turn-alternating function, based on if the number of filled spots is odd or even, and the output of the function will dictate which player object the related functions will act on, for example, on odd turns, the "your-turn" will go from "invisible" to "shown" on player 1, the click event that occurs during this time will push the spot number into the playerChoices for player 1, and will check if Plaer 1's entry triggers a winning condition. 

WIN CONDITION: There will be a set array of winning combinations, each winning combo will be an array inside that array, and a checkWin function will run each player's turn through to see if any 3 spots inside their playerChoices array contain any matching sets within the winning combinations array.  Example- winningCombinations = [ [0,1,2], [3,4,5] ...], checking the win will say: "what does player 1 have in their array right now? do any 3 of these numbers match with winningCombinations[0]? winningCombinations[1]? winningCombinations[2]? etc..."
If this returns true, add +1 to their score, stop the rest of the game, and show the winning combination that triggered these.



---

### Optional Part 2: Pseudo-code your win-logic

Each time a player makes a move, your code will check to see if there is a game-over condition (a win or a draw). Write out this logic in english/psuedocode below. When you're done, anyone should be able to read your pseudo-code and translate it line-by-line into javascript or another language.

---

*Write psuedocode here*

---
