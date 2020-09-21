
 






const grid_1 = document.getElementById('cellOne');
const grid_2 = document.getElementById('cellTwo');
const grid_3 = document.getElementById('cellThree');
const grid_4 = document.getElementById('cellFour');
const grid_5 = document.getElementById('cellFive');
const grid_6 = document.getElementById('cellSix');
const grid_7 = document.getElementById('cellSeven');
const grid_8 = document.getElementById('cellEight');
const grid_9 = document.getElementById('cellNine');





document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.cell')
    const playerDisplay = document.querySelector('#player')
    
    let currentPlayer = 'playerX'

    
    squares.forEach(square => {
        square.addEventListener('click', clickOutcome)
    })
    function clickOutcome(e) {
        const squareArray = Array.from(squares)
        const index = squareArray.indexOf(e.target)
         
        playerDisplay.innerHTML = currentPlayer
        diagonalWinner()
        //columnWinner()
        //rowWinner()
        
        if(currentPlayer === 'playerX') {
            squares[index].classList.add('playerX')
            
            currentPlayer = 'playerO'
        } else {
            squares[index].classList.add('playerO')
            
            currentPlayer = 'playerX'
        }
            
        
        }
        const checkWin = (firstBox, secondBox, thirdBox) => {
                let X = document.querySelectorAll('.playerX') //I think this is where my issue is, im trying to compare once a div class is applied rather than the inner text because i dont have inner text
                let O = document.querySelectorAll('.playerO')
                    
            if((firstBox.class === secondBox.class) && (secondBox.class === thirdBox.class)){
                console.log(X.length)
                if(X.length === 3){
                    alert('X Wins!')
                } else if(O.length === 3){
                    alert('O Wins!')
                } 
            }
            
        }
        const diagonalWinner = () => {
            let leftDownDiag = checkWin(grid_3, grid_5, grid_7);
            let rightUpDiag = checkWin(grid_9, grid_5, grid_1);
            
            return leftDownDiag || rightUpDiag;
          }
          const columnWinner = () => {
            let leftCol = checkWin(grid_1, grid_4, grid_7);
            let middleCol = checkWin(grid_2, grid_5, grid_8);
            let rightCol = checkWin(grid_3, grid_6, grid_9);
            
            return leftCol || (middleCol || rightCol);
          }
          const rowWinner = () => {
            let topRow = checkWin(grid_1, grid_2, grid_3);
            let middleRow = checkWin(grid_4, grid_5, grid_6);
            let bottomRow = checkWin(grid_7, grid_8, grid_9);
      
            return topRow || (middleRow || bottomRow);
          }
          const getWinner = () => {
             console.log('fired')
            return diagonalWinner() || (rowWinner() || columnWinner());
            
          }
          const winner = getWinner(); 
            if (winner) {
            alert("Player " + winner + " won!");

            
          }
          

        
        
    })
    
    
    function clear(){
        const clear = document.getElementById('form').reset()
    }
     




    