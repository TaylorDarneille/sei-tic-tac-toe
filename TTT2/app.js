document.addEventListener("DOMContentLoaded", ()=>{
    // create game board
    const container = document.querySelector(".container");
    // let classList = e.target.classList;
    // console.log(classList);


    for (let i = 0; i < 9; i++) {
        const cellDiv = document.createElement("div");
        cellDiv.classList.add("game-cells");
        container.appendChild(cellDiv);
    }

    const gameCellDivs = document.querySelectorAll(".game-cells");
    console.log(gameCellDivs); 
    
    const statusBar = document.createElement("div");
    statusBar.classList.add("status");
    // statusBar.innerHTML = "xIsNext";
    container.appendChild(statusBar);


    const resetBtn = document.createElement("div");
    resetBtn.classList.add("reset");
    resetBtn.innerText = "Stay Hard Mfer"
    container.appendChild(resetBtn);

    // console.log(container)

  
    let gameIsLive = true;
    let xIsNext = true;
    let winner = null;

    const updateStatus = () => {
        if(xIsNext){
        statusBar.innerHTML = "X is next";
    } else if (!xIsNext) {
        statusBar.innerHTML = "O is next";
    }
}
    updateStatus();

 

    const handleWinner = (letter) => {
        gameIsLive = false;
        winner = letter;
        if(winner === "x"){
            statusBar.innerHTML = `${winner} is the winner`;
            } else {
                statusBar.innerHTML = `${winner} is the winner`;
            }
    }


    const hardestMfer = (e) => {
        const topLeft = gameCellDivs[0].classList[1];
        const topMiddle = gameCellDivs[1].classList[1];
        const topRight = gameCellDivs[2].classList[1];
        const middleLeft = gameCellDivs[3].classList[1];
        const middleMiddle = gameCellDivs[4].classList[1];
        const middleRight = gameCellDivs[5].classList[1];
        const bottomLeft = gameCellDivs[6].classList[1];
        const bottomMiddle = gameCellDivs[7].classList[1];
        const bottomRight = gameCellDivs[8].classList[1];
        //check if there is a winner
        if(topLeft && topLeft === topMiddle && topLeft === topRight) {
            handleWinner(topLeft);
        } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight){
            handleWinner(middleLeft);
        } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight){
            handleWinner(bottomLeft);
        } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight){
            handleWinner(topLeft);
        } else if (topRight && topRight === middleMiddle && topRight === bottomLeft){
            handleWinner(topRight);
        } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft){
            handleWinner(topLeft);
        } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle){
            handleWinner(topMiddle);
        } else if (topRight && topRight === middleRight && topRight === bottomRight){
            handleWinner(topRight);
        } else if (topLeft && middleLeft && bottomLeft && topMiddle && middleMiddle && bottomMiddle && topRight && middleRight && bottomRight){
            gameIsLive = false;
            statusBar.innerHTML = "Game is a draw";
        }
        // for (gameCell of gameCellDivs) {
        //     if(gameCell && gameCell =)
        // }
    }

    const clickOutcome = (e) => {
        const classList = e.target.classList
        console.log(e.target.classList)

        if (e.target.classList[0] !== "game-cells" || e.target.classList[1] === "x" || e.target.classList[1] === "o") {
            return;
        }

        if (xIsNext) {
            e.target.classList.add("x");
            // let x = document.createElement("p");
            // x.innerText = "X";
            // e.target.appendChild(x);
            xIsNext = !xIsNext;
            updateStatus();
            hardestMfer();
        } else {
            e.target.classList.add("o");
            // let o = document.createElement("p");
            // o.innerText = "O";
            // e.target.appendChild(o);
            xIsNext = true;
            updateStatus();
            hardestMfer();
        }
        console.log(e.target.classList[1]);
    }




    const resetGame = () => {
        xIsNext = true;
        updateStatus();
        winner = null;
        for(const gameCell of gameCellDivs) {
            gameCell.classList.remove("x");
            gameCell.classList.remove("o");
        }
        }

    document.addEventListener("click", clickOutcome);
    resetBtn.addEventListener("click", resetGame);

    
    






    
})