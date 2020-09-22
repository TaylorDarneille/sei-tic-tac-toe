# Peudo-Code Tic Tac Toe

Next Week, you'll be building a [tic-tac-toe](https://en.wikipedia.org/wiki/Tic-tac-toe) game from scratch. To prepare, the deliverable this week is to plan it out! You'll also get to practice writing [markdown](https://guides.github.com/features/mastering-markdown/).

## The Assignment

Fork & Clone this repo. Open this file in your text editor and fill in the sections below. When you're done, make a pull request!

### Part 1: Make a To-Do list

Write out a list of *all* the things you need to do to code this game. This can be as detailed or high-level, though we recommend the former. This is your first time planning an app, so just have fun and just see what you can come up with. There's no right way.

---

*Write TODO list here*
*make board
    *grid for the game
    *buttons or fill in for the x and o
    *select two player
        *two different turns that change from x/o after each turn
    *select one player
        *player plays against computer that selects randomly
    *indicate turn by changing board color 
        *(eg. playerBackground=red / playerComputer background=blue)
*make rules
    *one person can fill a field at a time
    *three in a row gives a point to the winner
    *set game length 
        *best 2 out of 3 
    *when winner has won 2/3 games
        *ask if they want to restart
*set players
    *choice for player 1 vs player 2
    *choice for player 1 vs computer
    *assign color to each player choice
*set win condition
    *alert winner with animation

*flow of game
    * when player starts they select player X: or player Y: button
    * the selection will indicate which to start with
    * clicking on the squares the two variables will switch back and forth
    * when win condiiton is met the score will update on player X or Y button
    * the restart button will return the game to it's original state ask to select a player again
---

### Optional Part 2: Pseudo-code your win-logic

Each time a player makes a move, your code will check to see if there is a game-over condition (a win or a draw). Write out this logic in english/psuedocode below. When you're done, anyone should be able to read your pseudo-code and translate it line-by-line into javascript or another language.

---

*function checkForWinner ={ 
    if (div1 === div2 === div3 || div4 === div5 === div6 || div7 === div8 === div9){
        alert ('${Player ?} is the winner!)
    } else if(){
        alert ('${Player ?} is the winner!)
}

---
