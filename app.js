

// const buttonX = document.querySelector("#X")
// const buttonO = document.querySelector("#O")
// const choices = ["x","o"]


const makePink = (event) =>{
    event.target.style.backgroundColor = "pink"
}

const playGame =()=> {
    const div = document.querySelectorAll(".cell")
    console.log(div)
    for (let i=0; i<div.length; i++){
        div[i].addEventListener("click", makePink)
    }
     
}


document.addEventListener("DOMContentLoaded", ()=>{
    playGame()

//funciton that checks for win condition
})