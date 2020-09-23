
// ------------- users input -------------
let turn = "X"

// -------------- all the inner divs ----------
const squareOne = document.querySelector("#one");
const squareTwo = document.querySelector("#two");
const squareThree = document.querySelector("#three");
const squareFour = document.querySelector("#four");
const squareFive = document.querySelector("#five");
const squareSix = document.querySelector("#six");
const squareSeven = document.querySelector("#seven");
const squareEight = document.querySelector("#eight");
const squareNine = document.querySelector("#nine");

// --------- divs -----------


// ------------- leftScore and rightScore -------------
let leftScore = document.querySelector("#scoreLeft");
let rightScore = document.querySelector("#scoreRight");
let scoreOfLeft = 0;
let scoreOfRight = 0;
//-----------------------------------------------------------------------------------
firstScreen = () => {
    let x = document.querySelector("#x");
    x.addEventListener("click", () => {
      console.log("running");
      document.querySelector(".btn").style.display = "block";
      document.querySelector("h5").style.display = "none";
      document.querySelector("#o").style.display = "none";
      document.querySelector("#x").style.display = "none";
      document.querySelector("#container").style.display = "block";
      document.querySelector(".computerScoreBoard").style.display =
        "inline-block";
      document.querySelector(".userScoreBoard").style.display = "inline-block";
    });
    let o = document.querySelector("#o");
    o.addEventListener("click", () => {
      console.log("running");
      document.querySelector(".btn").style.display = "block";
      document.querySelector("h5").style.display = "none";
      document.querySelector("#o").style.display = "none";
      document.querySelector("#x").style.display = "none";
      document.querySelector("#container").style.display = "block";
      document.querySelector(".computerScoreBoard").style.display =
        "inline-block";
      document.querySelector(".userScoreBoard").style.display = "inline-block";
    });
    o.addEventListener("mouseover", () => {
      o.style.height = "100px";
      o.style.width = "100px";
    });
    o.addEventListener("mouseout", () => {
      o.style.height = "80px";
      o.style.width = "80px";
    });
    x.addEventListener("mouseover", () => {
      var xAfter = document.styleSheets[1].cssRules[4];
      xAfter.style.width = "150px";
      xAfter.style.top = "60px";
      xAfter.style.left = "-55px";
      x.style.height = "150px";
    });
    x.addEventListener("mouseout", () => {
      var xAfter = document.styleSheets[1].cssRules[4];
      xAfter.style.width = "100px";
      xAfter.style.top = "40px";
      xAfter.style.left = "-40px";
      x.style.height = "100px";
    });
  };
  
const game = () =>{
    let symbols = document.querySelectorAll(".symbol");
        for(let i = 0; i<symbols.length;i++) {
            if (turn === "X"){
                symbols[i].addEventListener("click",()=>{
                    symbols[i].setAttribute("class","cross")
                    console.log("hey")
                    turn = "O"
                    game()
                })  
            }else if(turn === "O"){
                console.log("get there")
                symbols[i].addEventListener("click",()=>{
                    symbols[i].setAttribute("class","circle")
                    turn = "X"
                    game()
            }) 
    }
  }
}
const restart = () =>{
  let restartButton = document.querySelector(".btn")
  restartButton.addEventListener("mouseover", ()=>{
    restartButton.style.color = "white";
    restartButton.style.border = "solid 2px white";
  })
  restartButton.addEventListener("mouseout", ()=>{
    restartButton.style.color = "rgba(0,0,0,0.3)";
    restartButton.style.border = "rgba(0,0,0,0.3) 2px solid";
  })
  restartButton.addEventListener("click",()=>{
    let circles = document.querySelectorAll(".circle")
    let cross = document.querySelectorAll(".cross")
    for(div of circles){
      div.setAttribute("class","symbol")
    }
    for(div of cross){
      div.setAttribute("class","symbol")
    }
  })
}
document.addEventListener("DOMContentLoaded", () => {
    firstScreen();
    game()
    restart()
  });