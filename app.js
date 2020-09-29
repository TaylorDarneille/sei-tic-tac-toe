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
// let clicksArr = [];
const win = [
    [1,4,7],
    [7,4,1],               
    [2,5,8], 
    [8,5,2],
    [3,6,9], 
    [9,6,3],
    [1,2,3], 
    [3,2,1],
    [4,5,6], 
    [6,5,4],
    [7,8,9], 
    [9,8,7],
    [1,5,9], 
    [9,5,1],
    [3,5,7], 
    [7,5,3],
];

const a = win[0];
const b = win[1];
const c = win[2];
const d = win[3];
const e = win[4];
const f = win[5];
const g = win[6];
const h = win[7];
const i = win[8];
const j = win[9];
const k = win[10];
const l = win[11];
const m = win[12];
const n = win[13];
const o = win[14];
const p = win[15];


const findWin = () => {
    for(let i = 0; i < win.length; i++){
        if (playerOne === a || playerOne === b || playerOne === c || playerOne === d || playerOne === e || playerOne === f || playerOne === g || playerOne === h || playerOne === i || playerOne === j || playerOne === k || playerOne === l || playerOne === m || playerOne === n || playerOne === o || playerOne === p){
            alert("Player one wins!")
    } else if((playerTwo === a || playerTwo === b || playerTwo === c || playerTwo === d || playerTwo === e || playerTwo === f || playerTwo === g || playerTwo === h || playerTwo === i || playerTwo === j || playerTwo === k || playerTwo === l || playerTwo === m || playerTwo === n || playerTwo === o)){
            alert("Player two wins")
    } 
}
}






document.addEventListener("DOMContentLoaded", ()=>{
    console.log("Get Ready to Play Tic, Tac Toe!");
    
    document.addEventListener("click", ()=>{
        // console.log(event);
        clicks++; //every time a cell is clicked it will add one to this
        // console.log(clicks);
        // clicksArr.push(clicks); 
        // console.log(clicksArr);


        // for(let i = 0; i < clicksArr.length; i++){
            //this conditional will check what number clicks is each time a cell is clicked and depending on the conditions it will show an x or an o
            if (clicks === 1 || clicks === 3 || clicks === 5 || clicks === 7 || clicks === 9){
                // get id from clicked cell and push to player array
                const clickedCell = parseInt(event.target.getAttribute("id"));
                playerOne.push(clickedCell);
                console.log(playerOne);
                //adds an X to the cell that was clicked
                addX(); 
                findWin();  
            }else if(clicks === 2 || clicks === 4 || clicks === 6 || clicks === 8){
                const clickedCell = parseInt(event.target.getAttribute("id"));
                playerTwo.push(clickedCell);
                console.log(playerTwo)
                addO(); 
                findWin();
            }
        // }
            // findWin();


    })
}) 