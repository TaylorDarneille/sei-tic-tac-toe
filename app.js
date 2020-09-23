//add variable to add an x to a div when that div is clicked
const addX = () => {
    const x = document.createElement("p");
    x.innerText = "X";
    console.log(x);
    event.target.appendChild(x);
}

//add variable to add an o to a div when that div is clicked
const addO = () => {
    const o = document.createElement("p");
    o.innerText = "O";
    console.log(o);
    event.target.appendChild(o);
}



document.addEventListener("DOMContentLoaded", ()=>{
    console.log("Get Ready to Play Tic, Tac Toe!");

    document.addEventListener("click", ()=>{
        console.log(event);
        

    })
})
 