//create variable to add an x to a div when that div is clicked
const addX = () => {
    const x = document.createElement("p");
    x.innerText = "X";
    console.log(x);
    event.target.appendChild(x);
}

//create variable to add an o to a div when that div is clicked
const addO = () => {
    const o = document.createElement("p");
    o.innerText = "O";
    console.log(o);
    event.target.appendChild(o);
}

// variable for player moves
let playerOne = [];
let playerTwo = [];
// this variable counts the number of clicks
let clicks = 0;
// this will keep track of how many clicks have been made
let clicksArr = [];






document.addEventListener("DOMContentLoaded", ()=>{
    console.log("Get Ready to Play Tic, Tac Toe!");

    document.addEventListener("click", ()=>{
        // console.log(event);
        clicks++;
        // console.log(clicks);
        clicksArr.push(clicks);
        // console.log(clicksArr);


        // for(let i = 0; i < clicksArr.length; i++){
            if (clicks === 1 || clicks === 3 || clicks === 5 || clicks === 7 || clicks === 9){
                // get id from clicked cell and push to player array
                const clickedCell = parseInt(event.target.getAttribute("id"));
                playerOne.push(clickedCell);
                console.log(playerOne);
                //adds an X to the cell that was clicked
                addX();   
            }else if(clicks === 2 || clicks === 4 || clicks === 6 || clicks === 8){
                const clickedCell = parseInt(event.target.getAttribute("id"));
                playerTwo.push(clickedCell);
                console.log(playerTwo)
                addO(); 
            }
        // }


        
        

    })
})
 