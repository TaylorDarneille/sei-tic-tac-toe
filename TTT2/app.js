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
    
    
    const statusBar = document.createElement("div");
    statusBar.classList.add("status");
    container.appendChild(statusBar);


    const resetBtn = document.createElement("div");
    resetBtn.classList.add("reset");
    resetBtn.innerText = "Stay Hard Mfer"
    container.appendChild(resetBtn);

    // console.log(container)

  
    let gameIsLive = true;
    let xIsNext = true;


    const clickOutcome = (e) => {
        // const classList = e.target.classList
        console.log(e.target.classList)

        if (e.target.classList[1] === "x" || e.target.classList[1] === "o") {
            return;
        }

        if (xIsNext) {
            e.target.classList.add("x");
            // let x = document.createElement("p");
            // x.innerText = "X";
            // e.target.appendChild(x);
            xIsNext = !xIsNext;
        } else {
            e.target.classList.add("o");
            // let o = document.createElement("p");
            // o.innerText = "O";
            // e.target.appendChild(o);
            xIsNext = true;
        }
        console.log(e.target.classList[1]);
    }


    document.addEventListener("click", clickOutcome)

    // const topLeft = classList[1];
    


    // const hardestMfer = () => {

    // }



    
})