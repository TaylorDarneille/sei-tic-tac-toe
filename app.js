
turningIntoACircle = (event) =>{
 symbols = document.querySelectorAll(".symbol")
  for (let i = 0; i<symbols.length;i++){
     symbols[i].addEventListener("click", ()=>{
         console.log("run")
         symbols[i].setAttribute("class","circle")
     })
  }
}








document.addEventListener("DOMContentLoaded",()=>{
     turningIntoACircle()
})