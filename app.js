
const squareOne = document.querySelector("#one")
const squareTwo = document.querySelector("#two")
const squareThree = document.querySelector("#three")
const squareFour = document.querySelector("#four")
const squareFive = document.querySelector("#five")
const squareSix = document.querySelector("#six")
const squareSeven = document.querySelector("#seven")
const squareEight = document.querySelector("#eight")
const squareNine = document.querySelector("#nine")

turningIntoACircle = (event) =>{
 symbols = document.querySelectorAll(".symbol")
  for (let i = 0; i<symbols.length;i++){
     symbols[i].addEventListener("click", ()=>{
         console.log("run")
         symbols[i].setAttribute("class","circle")
         
         if (squareOne.className === "circle" && squareTwo.className === "circle" && squareThree.className === "circle" || squareOne.className === "circle" && squareFour.className === "circle" && squareSeven.className === "circle"|| squareTwo.className === "circle" && squareFive.className === "circle" && squareEight.className === "circle"|| squareThree.className === "circle" && squareSix.className === "circle" && squareNine.className === "circle"||squareFour.className === "circle" && squareFive.className === "circle" && squareSix.className === "circle"||squareSeven.className === "circle" && squareEight.className === "circle" && squareNine.className === "circle" ||squareOne.className === "circle" && squareFive.className === "circle" && squareNine.className === "circle"|| squareThree.className === "circle" && squareFive.className === "circle" && squareSeven.className === "circle"){
            alert("win!")
            //clear tic tac toe
            const divs = document.querySelectorAll (".circle")
            for (div of divs){
                div.className = "symbol"
            }
        }
     })
  }
  
}

turningIntoXShape = (event) =>{
    symbols = document.querySelectorAll(".symbol")
     for (let i = 0; i<symbols.length;i++){
        symbols[i].addEventListener("click", ()=>{
            console.log("run")
            symbols[i].setAttribute("class","cross")

            if (squareOne.className === "cross" && squareTwo.className === "cross" && squareThree.className === "cross" || squareOne.className === "cross" && squareFour.className === "cross" && squareSeven.className === "cross"|| squareTwo.className === "cross" && squareFive.className === "cross" && squareEight.className === "cross"|| squareThree.className === "cross" && squareSix.className === "cross" && squareNine.className === "cross"||squareFour.className === "cross" && squareFive.className === "cross" && squareSix.className === "cross"||squareSeven.className === "cross" && squareEight.className === "cross" && squareNine.className === "cross" ||squareOne.className === "cross" && squareFive.className === "cross" && squareNine.className === "cross"|| squareThree.className === "cross" && squareFive.className === "cross" && squareSeven.className === "cross"){
                alert("win!")
                //clear tic tac toe
                const divs = document.querySelectorAll (".cross")
                for (div of divs){
                    div.className = "symbol"
                }
            }
        })
     }
   }
  
  





document.addEventListener("DOMContentLoaded",()=>{
    //  turningIntoACircle()
     

    
    
     turningIntoXShape()
})