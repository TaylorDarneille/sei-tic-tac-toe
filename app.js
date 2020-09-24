
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

// --------- user -----------
let xClicked = false
let oClicked = false
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
      document.querySelector(".menu").style.display = "block";
      document.querySelector("h5").style.display = "none";
      document.querySelector("#o").style.display = "none";
      document.querySelector("#x").style.display = "none";
      document.querySelector("#container").style.display = "block";
      document.querySelector(".computerScoreBoard").style.display =
        "inline-block";
      document.querySelector(".userScoreBoard").style.display = "inline-block";
      let xClicked = true
    });
    let o = document.querySelector("#o");
    o.addEventListener("click", () => {
      console.log("running");
      document.querySelector(".menu").style.display = "block";
      document.querySelector(".btn").style.display = "block";
      document.querySelector("h5").style.display = "none";
      document.querySelector("#o").style.display = "none";
      document.querySelector("#x").style.display = "none";
      document.querySelector("#container").style.display = "block";
      document.querySelector(".computerScoreBoard").style.display =
        "inline-block";
      document.querySelector(".userScoreBoard").style.display = "inline-block";
      let oClicked = true;
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
        symbols[i].addEventListener("click",()=>{ 
        if (turn === "X"){
                  symbols[i].setAttribute("class","cross")
                  console.log("hey")
                  turn = "O"
                  winning()
   
          }else if(turn === "O"){
              console.log("get there")
                 
                  symbols[i].setAttribute("class","circle")
                  turn = "X"
                  winning()   
          }
  })
 }
}
const menu = () =>{
  let menuButton = document.querySelector(".menu")
  menuButton.addEventListener("mouseover", ()=>{
    menuButton.style.color = "white";
    menuButton.style.border = "solid 2px white";
  })
  menuButton.addEventListener("mouseout", ()=>{
    menuButton.style.color = "rgba(0,0,0,0.3)";
    menuButton.style.border = "rgba(0,0,0,0.3) 2px solid";
  })
  menuButton.addEventListener("click",()=>{
    document.querySelector(".btn").style.display = "none";
      document.querySelector(".menu").style.display = "none";
      document.querySelector("h5").style.display = "block";
      document.querySelector("#o").style.display = "inline-block";
      document.querySelector("#x").style.display = "inline-block";
      document.querySelector("#container").style.display = "none";
      document.querySelector(".computerScoreBoard").style.display =
        "none";
      document.querySelector(".userScoreBoard").style.display = "none";
    
  })
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
    document.querySelector("#container").style.display = "block";
    document.querySelector(".alert").style.display = "none";
    for(div of circles){
      div.setAttribute("class","symbol")
    }
    for(div of cross){
      div.setAttribute("class","symbol")
    }
  })
}

const winning = () =>{
  if(squareOne.className === "circle" && squareTwo.className === "circle" && squareThree.className === "circle" || squareFour.className === "circle" && squareFive.className === "circle" && squareSix.className === "circle" || squareSeven.className === "circle" && squareEight.className === "circle" && squareNine.className === "circle"||squareOne.className === "circle" && squareFour.className === "circle" && squareSeven.className === "circle"||squareTwo.className === "circle" && squareFive.className === "circle" && squareEight.className === "circle"|| squareThree.className === "circle" && squareSix.className === "circle" && squareNine.className === "circle"||squareOne.className === "circle" && squareFive.className === "circle" && squareNine.className === "circle"||squareThree.className === "circle" && squareFive.className === "circle" && squareSeven.className === "circle"){
      
      document.querySelector("#container").style.display = "none";
      document.querySelector(".alert").style.display = "block";
      document.querySelector(".alert").innerText = "O Wins!"
      scoreOfLeft++
      leftScore.innerText = scoreOfLeft

  }else if (squareOne.className === "cross" && squareTwo.className === "cross" && squareThree.className === "cross" || squareFour.className === "cross" && squareFive.className === "cross" && squareSix.className === "cross" || squareSeven.className === "cross" && squareEight.className === "cross" && squareNine.className === "cross"||squareOne.className === "cross" && squareFour.className === "cross" && squareSeven.className === "cross"||squareTwo.className === "cross" && squareFive.className === "cross" && squareEight.className === "cross"|| squareThree.className === "cross" && squareSix.className === "cross" && squareNine.className === "cross"||squareOne.className === "cross" && squareFive.className === "cross" && squareNine.className === "cross"||squareThree.className === "cross" && squareFive.className === "cross" && squareSeven.className === "cross"){
   
    document.querySelector("#container").style.display = "none";
    document.querySelector(".alert").style.display = "block";
    document.querySelector(".alert").innerText = "X Wins!"
    scoreOfRight++
    rightScore.innerText = scoreOfRight
  }
}
 











document.addEventListener("DOMContentLoaded", () => {
    firstScreen();
    game()
    restart()
    menu()
   
  });