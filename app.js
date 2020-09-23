
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

document.addEventListener("DOMContentLoaded", () => {
    firstScreen();
    game()
  });