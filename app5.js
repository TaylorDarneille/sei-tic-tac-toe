let player1 = "X";
let player2="O";






const changeClassX = ()=>{
    const bodyClasses = document.querySelector("body").classList
    if(bodyClasses.length===0){
        bodyClasses.add("black")
    } else { 
        bodyClasses.remove("black")
    }
}

const board = ()=> {
let cells = document.querySelectorAll(".cell");
    for (let i=0;i<cells.length; i++){
       console.log(board)
    }
}
     //   cells[i].addEventListener("click",playerMove)
    // if(cellClasses.length===1){
    //     cellClasses.add("Xclass")
    // } else {
    //     cellClasses.remove("Xclass")
    // }
 


 


document.addEventListener('DOMContentLoaded', ()=>{ 
    let h1 = document.querySelector("h1")
    h1.addEventListener("click", changeClassX);
        
    })








//regular class once it is clicked, change the classlist and let css create the x and o








