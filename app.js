var turn = document.getElementById("turn")
boxes = document.querySelectorAll("#main"), X_or_O = 0;

function selectWinnerBoxes(boxes1,boxes2,boxes3){
    boxes1.classList.add("win");
    boxes2.classList.add("win");
    boxes3.classList.add("win");
    turn.innerHTML = boxes1.innerHTML + " Won Congrats!";
    turn.style.fontSize = "40px";
}

function getWinner(){
    const box1 = document.getElementById("box1")
    const box2 = document.getElementById("box2")
    const box3 = document.getElementById("box3")
    const box4 = document.getElementById("box4")
    const box5 = document.getElementById("box5")
    const box6 = document.getElementById("box6")
    const box7 = document.getElementById("box7")
    const box8 = document.getElementById("box8")
    const box9 = document.getElementById("box9")


}

for(let i=0; i <boxes.length; i++){
    boxes[i].onclick = function(){
        if(this.innerHTML !== "X" && this.innerHTML !=="O"){
            if (X_or_O%2 === 0){
                console.log(X_or_O);
                this.innerHTML = "X";
                this.innerHTML = "O Turn Now";
                getWinner();
                X_or_O += 1;
            }else{
                console.log(X_or_O);
                this.innerHTML = "O";
                this.innerHTML = "X Turn now";
                getWinner();
                X_or_O += 1;
            }
        }
    };
}

