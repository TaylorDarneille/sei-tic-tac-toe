document.addEventListener("DOMContentLoaded", ()=>{
    const container = document.querySelector(".container");

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

    
})